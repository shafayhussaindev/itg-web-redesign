import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, MSym } from '@/components/icons/material';
import { contact as copy } from '@/content/contact.js';
import { globalPresence } from '@/content/tier1/company.js';
import { footer } from '@/content/site.js';
import '@/pages/tier2/shared/base.css';
import './contact.css';

type FieldKey = 'topic' | 'name' | 'email' | 'company' | 'phone' | 'message' | 'consent';
type Values = {
  topic: string; name: string; email: string; company: string;
  phone: string; message: string; consent: boolean;
  /** Honeypot. Hidden from people; bots that fill every field fill this. */
  website: string;
};
type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'failed' | 'offline';

/** Order of the fields on the page, which is also the order of the error summary. */
const ORDER: FieldKey[] = ['topic', 'name', 'email', 'company', 'phone', 'message', 'consent'];
const MESSAGE_MIN = 20;
const PHONE_CHARS = /^[+()\d\s.-]+$/;
const EMPTY: Values = { topic: '', name: '', email: '', company: '', phone: '', message: '', consent: false, website: '' };

const { form, outcomes, connect } = copy;
const topicIds = form.topics.map(t => t.id);

/**
 * /contact — the destination for every "Contact us" on the site.
 *
 * Built on the tier-2 foundation (`tier2/shared/base.css`) so it shares their
 * header, tokens and buttons; layout specific to this page is in `contact.css`.
 *
 * The form validates on the browser's own rules where they exist (the email
 * format comes from `type="email"` itself), but renders its own messages:
 * checked when a field is left, cleared as soon as the visitor edits it, and
 * gathered into a focused summary on submit. How a valid message is delivered
 * depends on `contact.connect` — see the note at the top of `content/contact.js`.
 */
export default function Contact() {
  const [params] = useSearchParams();
  const presetTopic = params.get('topic') ?? '';

  const [values, setValues] = useState<Values>(() => ({
    ...EMPTY,
    topic: topicIds.includes(presetTopic) ? presetTopic : '',
  }));
  // What the visitor was looking at when they clicked through, e.g. a product page.
  const [about, setAbout] = useState(() => (params.get('about') ?? '').trim().slice(0, 120));
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [dirty, setDirty] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  // Focus moves are requested with a counter and carried out in an effect, after
  // the target has rendered. Not requestAnimationFrame: it never fires in a
  // hidden tab, and the element may not exist yet on the frame it would run.
  const [focusRequest, setFocusRequest] = useState<{ target: 'summary' | 'done' | 'title'; n: number }>({ target: 'title', n: 0 });

  const fields = useRef<Partial<Record<FieldKey, HTMLInputElement | HTMLTextAreaElement | null>>>({});
  const summaryRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = meta?.content;
    document.title = copy.meta.title;
    if (meta) meta.content = copy.meta.description;
    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== undefined) meta.content = previousDescription;
    };
  }, []);

  useEffect(() => {
    if (!focusRequest.n) return;
    const el = { summary: summaryRef, done: doneRef, title: titleRef }[focusRequest.target].current;
    el?.focus();
  }, [focusRequest]);

  const requestFocus = (target: 'summary' | 'done' | 'title') =>
    setFocusRequest(prev => ({ target, n: prev.n + 1 }));

  const check = (key: FieldKey, v: Values): string => {
    const e = form.errors;
    switch (key) {
      case 'topic': return v.topic ? '' : e.topic;
      case 'name': return v.name.trim() ? '' : e.name;
      case 'email': {
        if (!v.email.trim()) return e.emailMissing;
        // The browser's own rule for type="email", so the page never disagrees
        // with what the input itself considers valid.
        const el = fields.current.email as HTMLInputElement | null | undefined;
        return el?.validity.typeMismatch ? e.emailFormat : '';
      }
      case 'company': return v.company.trim() ? '' : e.company;
      case 'phone': {
        const phone = v.phone.trim();
        if (!phone) return '';                       // optional
        const digits = phone.replace(/\D/g, '').length;
        return PHONE_CHARS.test(phone) && digits >= 6 && digits <= 17 ? '' : e.phone;
      }
      case 'message': {
        const text = v.message.trim();
        if (!text) return e.message;
        return text.length < MESSAGE_MIN ? e.messageShort : '';
      }
      case 'consent': return v.consent ? '' : e.consent;
    }
  };

  const setError = (key: FieldKey, message: string) =>
    setErrors(prev => {
      if ((prev[key] ?? '') === message) return prev;
      const next = { ...prev };
      if (message) next[key] = message; else delete next[key];
      return next;
    });

  /** Editing a field is an attempt to correct it: clear its error, re-check on leave. */
  const update = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues(prev => ({ ...prev, [key]: value }));
    if (key === 'website') return;
    setDirty(prev => (prev[key as FieldKey] ? prev : { ...prev, [key]: true }));
    setError(key as FieldKey, '');
  };

  const onBlur = (key: FieldKey) => {
    if (!dirty[key] && !attempted) return;   // don't scold a field someone only tabbed through
    setError(key, check(key, values));
  };

  const jumpTo = (key: FieldKey) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const el = key === 'topic'
      ? document.querySelector<HTMLInputElement>('input[name="topic"]:checked') ?? fields.current.topic
      : fields.current[key];
    el?.focus();
    el?.scrollIntoView({ block: 'center', behavior: 'instant' as ScrollBehavior });
  };

  const topicLabel = form.topics.find(t => t.id === values.topic)?.label ?? values.topic;

  const mailtoHref = () => {
    const f = form.fields;
    const body = [
      `${form.topicLegend} ${topicLabel}`,
      about && `${form.aboutLabel}: ${about}`,
      '',
      `${f.name.label}: ${values.name.trim()}`,
      `${f.company.label}: ${values.company.trim()}`,
      `${f.email.label}: ${values.email.trim()}`,
      values.phone.trim() && `${f.phone.label}: ${values.phone.trim()}`,
      '',
      values.message.trim(),
    ].filter(line => line !== false && line !== undefined).join('\r\n');
    const subject = `${topicLabel} — ${values.company.trim()}`;
    return `mailto:${connect.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;

    // A filled honeypot is a bot. Tell it what it wants to hear and send nothing.
    if (values.website) { setStatus('sent'); requestFocus('done'); return; }

    const found: Partial<Record<FieldKey, string>> = {};
    for (const key of ORDER) {
      const message = check(key, values);
      if (message) found[key] = message;
    }
    setErrors(found);
    setAttempted(true);
    if (Object.keys(found).length) { requestFocus('summary'); return; }

    if (connect.formEndpoint) {
      setStatus('sending');
      try {
        const response = await fetch(connect.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            topic: topicLabel,
            about: about || undefined,
            name: values.name.trim(),
            email: values.email.trim(),
            company: values.company.trim(),
            phone: values.phone.trim() || undefined,
            message: values.message.trim(),
            consent: true,
            page: window.location.href,
          }),
          signal: AbortSignal.timeout(15000),
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        setStatus('sent');
        requestFocus('done');
      } catch (error) {
        console.error('[Contact] Enquiry could not be delivered:', error);
        setStatus('failed');
      }
      return;
    }

    if (connect.email) {
      window.location.href = mailtoHref();
      setStatus('mailto');
      requestFocus('done');
      return;
    }

    console.warn('[Contact] No formEndpoint or email is set in src/content/contact.js, so this enquiry has nowhere to go.');
    setStatus('offline');
  };

  const startAgain = () => {
    setValues(EMPTY);
    setAbout('');
    setErrors({});
    setDirty({});
    setAttempted(false);
    setStatus('idle');
    requestFocus('title');
  };

  const describedBy = (key: FieldKey, hint = false) =>
    [hint && `ct-${key}-hint`, errors[key] && `ct-${key}-error`].filter(Boolean).join(' ') || undefined;

  const errorText = (key: FieldKey) => errors[key] && (
    <p id={`ct-${key}-error`} className="ct-error"><MSym name="error" size={18} />{errors[key]}</p>
  );

  const summaryKeys = ORDER.filter(key => errors[key]);
  const showSummary = attempted && summaryKeys.length > 0;
  const done = status === 'sent' || status === 'mailto';
  const regions = globalPresence.locations.map((l: { name: string }) => l.name);

  return (
    <>
      <a className="solution-skip" href="#contact-form">{copy.skipLink}</a>
      <Header contactHref="#contact-form" />
      <main id="contact-main" className="solution-detail contact-page" tabIndex={-1}>
        <section className="ct-shell" aria-labelledby="contact-title">
          <div className="section-container ct-grid">

            <div className="ct-intro" data-dark-hero>
              <nav className="sd-breadcrumb" aria-label="Breadcrumb">
                <a href="/">{copy.breadcrumbHome}</a><span aria-hidden="true">/</span>
                <span aria-current="page">{copy.breadcrumbHere}</span>
              </nav>
              <div className="ct-intro-copy">
                <p className="sd-eyebrow">{copy.hero.eyebrow}</p>
                <h1 id="contact-title">{copy.hero.headline}<span>{copy.hero.accent}</span></h1>
                <p className="ct-lede">{copy.hero.body}</p>
              </div>

              <div className="ct-lines">
                <h2 className="ct-lines-title">{copy.directLinesTitle}</h2>
                <ul>
                  {connect.email && (
                    <li>
                      <a href={`mailto:${connect.email}`}>
                        <span className="ct-line-icon"><MSym name="mail" size={20} /></span>
                        <span className="ct-line-text"><span className="ct-line-label">{copy.lines.email}</span>{connect.email}</span>
                      </a>
                    </li>
                  )}
                  {connect.phone && (
                    <li>
                      <a href={`tel:${connect.phone.replace(/[^\d+]/g, '')}`}>
                        <span className="ct-line-icon"><MSym name="call" size={20} /></span>
                        <span className="ct-line-text"><span className="ct-line-label">{copy.lines.phone}</span>{connect.phone}</span>
                      </a>
                    </li>
                  )}
                  <li>
                    <a href={footer.linkedin} target="_blank" rel="noreferrer">
                      <span className="ct-line-icon">
                        <svg aria-hidden="true" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </span>
                      <span className="ct-line-text"><span className="ct-line-label">{copy.lines.linkedin}</span>{copy.linkedinLabel}</span>
                      <MSym name="arrow_outward" size={18} className="ct-line-out" />
                    </a>
                  </li>
                </ul>
                {connect.responseTime && (
                  <p className="ct-response"><MSym name="schedule" size={18} />{copy.responsePrefix} {connect.responseTime}.</p>
                )}
              </div>
            </div>

            <div className="ct-form-col">
              <div className="ct-card" id="contact-form" tabIndex={-1}>
                {done ? (
                  <div className="ct-done">
                    <span className="ct-done-icon"><MSym name="check_circle" size={34} /></span>
                    <h2 ref={doneRef} tabIndex={-1}>{status === 'mailto' ? outcomes.mailtoTitle : outcomes.sentTitle}</h2>
                    {status === 'mailto'
                      ? <p>{outcomes.mailtoBody} <a href={`mailto:${connect.email}`}>{connect.email}</a>.</p>
                      : <p>{outcomes.sentBody}</p>}
                    <button type="button" className="ct-again" onClick={startAgain}>{outcomes.another}</button>
                  </div>
                ) : (
                  <form
                    noValidate
                    onSubmit={onSubmit}
                    method="post"
                    action={connect.formEndpoint || (connect.email ? `mailto:${connect.email}` : undefined)}
                    aria-labelledby="ct-form-title"
                    aria-describedby="ct-form-intro"
                  >
                    <h2 id="ct-form-title" ref={titleRef} tabIndex={-1}>{form.title}</h2>
                    <p id="ct-form-intro" className="ct-form-intro">{form.intro}</p>

                    {showSummary && (
                      <div className="ct-summary" ref={summaryRef} tabIndex={-1} aria-labelledby="ct-summary-title">
                        <h3 id="ct-summary-title"><MSym name="error" size={20} />{form.errors.summaryTitle}</h3>
                        <ul>
                          {summaryKeys.map(key => (
                            <li key={key}><a href={`#ct-${key}`} onClick={jumpTo(key)}>{errors[key]}</a></li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {about && (
                      <div className="ct-about">
                        <span className="ct-about-label">{form.aboutLabel}</span>
                        <span className="ct-about-value">{about}</span>
                        {/* The button removes itself, so hand focus on rather than drop it to <body>. */}
                        <button
                          type="button"
                          onClick={() => { setAbout(''); requestFocus('title'); }}
                          aria-label={`${form.aboutRemove}: ${about}`}
                        >
                          <MSym name="close" size={18} />
                        </button>
                      </div>
                    )}

                    <fieldset className="ct-field ct-topics" aria-describedby={describedBy('topic')}>
                      <legend>{form.topicLegend}</legend>
                      {errorText('topic')}
                      <div className="ct-topic-list">
                        {form.topics.map((topic, index) => (
                          <label key={topic.id} className="ct-topic">
                            <input
                              type="radio"
                              name="topic"
                              value={topic.id}
                              id={index === 0 ? 'ct-topic' : undefined}
                              ref={index === 0 ? el => { fields.current.topic = el; } : undefined}
                              checked={values.topic === topic.id}
                              onChange={() => update('topic', topic.id)}
                              aria-invalid={errors.topic ? true : undefined}
                              required
                            />
                            <span><MSym name="check" size={16} className="ct-topic-check" />{topic.label}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div className="ct-field">
                      <label htmlFor="ct-name">{form.fields.name.label}</label>
                      <input
                        id="ct-name" name="name" type="text" autoComplete="name" enterKeyHint="next"
                        maxLength={100} required
                        ref={el => { fields.current.name = el; }}
                        value={values.name}
                        onChange={e => update('name', e.target.value)}
                        onBlur={() => onBlur('name')}
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={describedBy('name')}
                      />
                      {errorText('name')}
                    </div>

                    <div className="ct-field">
                      <label htmlFor="ct-email">{form.fields.email.label}</label>
                      <p id="ct-email-hint" className="ct-hint">{form.fields.email.hint}</p>
                      <input
                        id="ct-email" name="email" type="email" autoComplete="email" enterKeyHint="next"
                        spellCheck={false} maxLength={254} required
                        ref={el => { fields.current.email = el; }}
                        value={values.email}
                        onChange={e => update('email', e.target.value)}
                        onBlur={() => onBlur('email')}
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={describedBy('email', true)}
                      />
                      {errorText('email')}
                    </div>

                    <div className="ct-field">
                      <label htmlFor="ct-company">{form.fields.company.label}</label>
                      <input
                        id="ct-company" name="company" type="text" autoComplete="organization" enterKeyHint="next"
                        maxLength={120} required
                        ref={el => { fields.current.company = el; }}
                        value={values.company}
                        onChange={e => update('company', e.target.value)}
                        onBlur={() => onBlur('company')}
                        aria-invalid={errors.company ? true : undefined}
                        aria-describedby={describedBy('company')}
                      />
                      {errorText('company')}
                    </div>

                    <div className="ct-field">
                      <label htmlFor="ct-phone">
                        {form.fields.phone.label} <span className="ct-optional">({form.fields.phone.optional})</span>
                      </label>
                      <input
                        id="ct-phone" name="phone" type="tel" autoComplete="tel" enterKeyHint="next"
                        maxLength={30}
                        ref={el => { fields.current.phone = el; }}
                        value={values.phone}
                        onChange={e => update('phone', e.target.value)}
                        onBlur={() => onBlur('phone')}
                        aria-invalid={errors.phone ? true : undefined}
                        aria-describedby={describedBy('phone')}
                      />
                      {errorText('phone')}
                    </div>

                    <div className="ct-field">
                      <label htmlFor="ct-message">{form.fields.message.label}</label>
                      <textarea
                        id="ct-message" name="message" rows={6} maxLength={4000} required
                        placeholder={form.fields.message.placeholder}
                        ref={el => { fields.current.message = el; }}
                        value={values.message}
                        onChange={e => update('message', e.target.value)}
                        onBlur={() => onBlur('message')}
                        aria-invalid={errors.message ? true : undefined}
                        aria-describedby={describedBy('message')}
                      />
                      {errorText('message')}
                    </div>

                    <div className="ct-field ct-consent">
                      <input
                        id="ct-consent" name="consent" type="checkbox" required
                        ref={el => { fields.current.consent = el; }}
                        checked={values.consent}
                        onChange={e => update('consent', e.target.checked)}
                        aria-invalid={errors.consent ? true : undefined}
                        aria-describedby={describedBy('consent')}
                      />
                      <label htmlFor="ct-consent">
                        {form.fields.consent.before}
                        <a href={form.fields.consent.linkHref} target="_blank" rel="noreferrer">{form.fields.consent.linkLabel}</a>
                        {form.fields.consent.after}
                      </label>
                      {errorText('consent')}
                    </div>

                    <div className="ct-hp" aria-hidden="true">
                      <label htmlFor="ct-website">Website</label>
                      <input
                        id="ct-website" name="website" type="text" tabIndex={-1} autoComplete="off"
                        value={values.website}
                        onChange={e => update('website', e.target.value)}
                      />
                    </div>

                    <div className="ct-submit">
                      <button type="submit" className="btn-modern" disabled={status === 'sending'}>
                        {status === 'sending' ? form.sending : form.submit}
                        <ArrowRight size={18} />
                      </button>
                    </div>

                    <div className="ct-status" aria-live="polite">
                      {(status === 'failed' || status === 'offline') && (
                        <div className={status === 'offline' ? 'ct-status-note is-info' : 'ct-status-note'}>
                          <MSym name={status === 'offline' ? 'info' : 'error'} size={20} />
                          <div>
                            <p className="ct-status-title">{status === 'failed' ? outcomes.failedTitle : outcomes.offlineTitle}</p>
                            <p>
                              {status === 'failed' ? outcomes.failedBody : outcomes.offlineBody}{' '}
                              {connect.email && <><a href={`mailto:${connect.email}`}>{connect.email}</a>{' · '}</>}
                              <a href={footer.linkedin} target="_blank" rel="noreferrer">{copy.lines.linkedin}</a>
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>

            <div className="ct-aside">
              <section aria-labelledby="ct-next-title">
                <h2 id="ct-next-title" className="sd-eyebrow">{copy.next.eyebrow}</h2>
                <ol className="ct-steps">
                  {copy.next.steps.map((step, index) => (
                    <li key={step.title}>
                      <span className="ct-step-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                      <div><h3>{step.title}</h3><p>{step.body}</p></div>
                    </li>
                  ))}
                </ol>
              </section>

              <section aria-labelledby="ct-regions-title" className="ct-regions-block">
                <h2 id="ct-regions-title" className="sd-eyebrow">{copy.regions.eyebrow}</h2>
                <ul className="ct-regions">
                  {regions.map((name: string) => <li key={name}><MSym name="language" size={16} />{name}</li>)}
                </ul>
                <a href={copy.regions.link.href} className="sd-text-link">{copy.regions.link.label}<ArrowRight size={18} /></a>
              </section>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
