import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, MSym } from '@/components/icons/material';
import { useHashScroll } from '@/pages/tier2/shared/useHashScroll';
import { tier3Families } from '@/content/tier3/tier3-detail.js';
import { tier3Label as label, type Tier3Page } from './tier3Pages';
import '@/pages/tier2/shared/base.css';
import './tier3.css';

const pad = (n: number) => String(n + 1).padStart(2, '0');

/* One template for every Tier 3 page (a capability, product, service or
   industry segment). All words come from tier3Pages.ts, which reads them from
   the Tier 2 content files. */
export default function Tier3Detail({ page }: { page: Tier3Page }) {
  const family = tier3Families[page.family];

  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = meta?.content;
    document.title = `${page.title} | ${page.parent.name} | ITG Technologies`;
    if (meta) meta.content = page.body;
    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== undefined) meta.content = previousDescription;
    };
  }, [page]);

  useHashScroll(page);

  return (
    <>
      <a className="solution-skip" href="#tier3-main">{label('skipLink', page)}</a>
      <Header contactHref="#contact" />
      <main id="tier3-main" className="solution-detail tier3-detail" tabIndex={-1}>
        <section className="sd-hero" data-dark-hero aria-labelledby="tier3-title">
          <img className="sd-hero-image" src={page.image} alt="" style={{ objectPosition: page.imagePosition }} loading="eager" />
          <div className="sd-hero-scrim" />
          <div className="section-container sd-hero-content">
            <nav className="sd-breadcrumb" aria-label="Breadcrumb">
              <a href="/">{label('home', page)}</a><span aria-hidden="true">/</span>
              <a href={family.href}>{family.label}</a><span aria-hidden="true">/</span>
              <a href={page.parent.href}>{page.parent.name}</a><span aria-hidden="true">/</span>
              <span aria-current="page">{page.title}</span>
            </nav>
            <div className="sd-hero-copy">
              <p className="sd-eyebrow"><MSym name={page.parent.icon} size={20} />{page.parent.name}</p>
              <h1 id="tier3-title">{page.title}<span>{page.tagline}</span></h1>
              <p className="sd-hero-description">{page.body}</p>
              <div className="sd-actions">
                <a className="btn-modern" href="#contact">{label('discuss', page)}<ArrowRight size={18} /></a>
                <a className="btn-modern-ghost" href={page.parent.href}>{label('backTo', page)}</a>
              </div>
            </div>
          </div>
        </section>

        {page.overview && (
          <section id="overview" className="sd-section">
            <div className="section-container sd-intro-grid">
              <div><h2>{page.overview.title}</h2></div>
              <div className="sd-prose">{page.overview.body.map(p => <p key={p}>{p}</p>)}</div>
            </div>
          </section>
        )}

        <section id="included" className="sd-section" aria-labelledby="included-title">
          <div className="section-container">
            <div className="sd-section-heading">
              <p className="sd-eyebrow"><MSym name={page.icon} size={20} />{label('includedEyebrow', page)}</p>
              <h2 id="included-title">{label('includedTitle', page)}</h2>
            </div>
            <div className={`t3-included${page.outcomes.length ? '' : ' t3-included--solo'}`}>
              <ol className="t3-focus">{page.focus.map((item, index) => (
                <li key={item}><span className="sd-number">{pad(index)}</span><span>{item}</span></li>
              ))}</ol>
              {page.outcomes.length > 0 && (
                <div className="t3-outcomes">
                  <h3>{label('outcomeTitle', page)}</h3>
                  <ul>{page.outcomes.map(item => <li key={item}><MSym name="check_circle" size={20} />{item}</li>)}</ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="sd-section" aria-labelledby="why-title">
          <div className="section-container">
            <div className="sd-section-heading">
              <p className="sd-eyebrow">{label('whyEyebrow', page)}</p>
              <h2 id="why-title">{label('whyTitle', page)}</h2>
            </div>
            <div className="sd-outcomes">{page.why.map(item => (
              <article key={item.title} className="sd-outcome"><span className="sd-icon"><MSym name={item.icon} size={26} /></span><h3>{item.title}</h3><p>{item.body}</p></article>
            ))}</div>
          </div>
        </section>

        {page.applied && (
          <section className="sd-section" aria-labelledby="applied-title">
            <div className="section-container">
              <div className="sd-section-heading">
                <p className="sd-eyebrow">{label('appliedEyebrow', page)}</p>
                <h2 id="applied-title">{page.applied.title}</h2>
                {page.applied.intro && <p>{page.applied.intro}</p>}
              </div>
              <div className="t3-applied">{page.applied.items.map(item => (
                <article key={item.title}><MSym name={item.icon} size={28} /><h3>{item.title}</h3><p>{item.body}</p></article>
              ))}</div>
            </div>
          </section>
        )}

        <section id="approach" className="sd-section" aria-labelledby="approach-title">
          <div className="section-container">
            <div className="sd-section-heading">
              <p className="sd-eyebrow">{page.steps.eyebrow}</p>
              <h2 id="approach-title">{page.steps.title}</h2>
              {page.steps.intro && <p>{page.steps.intro}</p>}
            </div>
            <ol className="sd-steps">{page.steps.items.map((step, index) => (
              <li key={step.title}><span className="sd-step-number">{pad(index)}</span><h3>{step.title}</h3><p>{step.body}</p></li>
            ))}</ol>
          </div>
        </section>

        {page.siblings.length > 0 && (
          <section className="sd-section" aria-labelledby="siblings-title">
            <div className="section-container">
              <div className="sd-section-heading">
                <p className="sd-eyebrow"><MSym name={page.parent.icon} size={20} />{label('siblingsEyebrow', page)}</p>
                <h2 id="siblings-title">{label('siblingsTitle', page)}</h2>
              </div>
              <ul className="t3-siblings">{page.siblings.map(item => (
                <li key={item.href}>
                  <a href={item.href}>
                    <span className="sd-icon"><MSym name={item.icon} size={24} /></span>
                    <span><strong>{item.title}</strong><small>{item.description}</small></span>
                    <ArrowRight size={18} />
                  </a>
                </li>
              ))}</ul>
              <a href={page.parent.href} className="sd-text-link t3-parent-link">{label('parentOverview', page)}<ArrowRight size={18} /></a>
            </div>
          </section>
        )}

        <section id="contact" className="sd-section sd-contact">
          <div className="section-container">
            <p className="sd-eyebrow">{label('contactEyebrow', page)}</p>
            <h2>{label('contactTitle', page)}</h2>
            <p>{label('contactBody', page)}</p>
            <div className="sd-actions">
              <a href={page.contactHref} className="btn-modern">{label('discuss', page)}<ArrowRight size={18} /></a>
              <a href={page.parent.href} className="sd-text-link">{label('backTo', page)}<ArrowRight size={18} /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
