import { useEffect, useRef, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, ChevronDown, MSym } from '@/components/icons/material';
import { contactLink } from '@/lib/contact-link';
import { useLenis } from '@/hooks/useLenis';
import { solutionDetail as copy } from '@/content/solution-detail.js';
import { solutionPages, type SolutionPageContent } from './solutionPages';
import './solution-detail.css';

export default function SolutionDetail({ page }: { page: SolutionPageContent }) {
  const [expanded, setExpanded] = useState<string[]>([page.capabilities[0].id]);
  const pendingAnchor = useRef<string | null>(null);
  const lenis = useLenis();

  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = meta?.content;
    document.title = `${page.name} | ITG Technologies`;
    if (meta) meta.content = page.description;
    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== undefined) meta.content = previousDescription;
    };
  }, [page]);

  // Menu deep links also open the relevant capability before scrolling to it.
  useEffect(() => {
    const readHash = () => {
      let id: string;
      try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      // Preserve links to the previous AI overview section.
      if (id === 'ai-capabilities') id = 'capabilities';
      if (!id) return;
      pendingAnchor.current = id;
      setExpanded(current => page.capabilities.some(cap => cap.id === id)
        ? Array.from(new Set([...current, id])) : [...current]);
    };
    readHash();
    window.addEventListener('hashchange', readHash);
    return () => window.removeEventListener('hashchange', readHash);
  }, [page]);

  useEffect(() => {
    const id = pendingAnchor.current;
    if (!id) return;
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (target) {
        lenis.current?.resize();
        target.scrollIntoView({ block: 'start', behavior: 'instant' });
      }
      pendingAnchor.current = null;
    });
    return () => cancelAnimationFrame(frame);
  }, [expanded, lenis]);

  const openCapability = (id: string) => {
    pendingAnchor.current = id;
    setExpanded(current => Array.from(new Set([...current, id])));
  };
  const related = solutionPages.filter(item => item.id !== page.id);
  const contactHref = copy.contactEmail
    ? `mailto:${copy.contactEmail}?subject=${encodeURIComponent(`${page.name} enquiry`)}`
    : contactLink(copy.contactFallback.href, page.name);

  return (
    <>
      <a className="solution-skip" href="#solution-main">{copy.skipLink}</a>
      <Header contactHref="#contact" />
      <main id="solution-main" className="solution-detail solution-category" tabIndex={-1}>
        <section className="sd-hero" data-dark-hero aria-labelledby="solution-title">
          <img className="sd-hero-image" src={page.image} alt="" loading="eager" />
          <div className="sd-hero-scrim" />
          <div className="section-container sd-hero-content">
            <nav className="sd-breadcrumb" aria-label="Breadcrumb">
              <a href="/">{copy.home}</a><span aria-hidden="true">/</span>
              <a href="/solutions">{copy.solutions}</a><span aria-hidden="true">/</span>
              <span aria-current="page">{page.name}</span>
            </nav>
            <div className="sd-hero-copy">
              <p className="sd-eyebrow"><MSym name={page.icon} size={20} />{page.name}</p>
              <h1 id="solution-title">{page.headline}<span>{page.accent}</span></h1>
              <p className="sd-hero-description">{page.description}</p>
              <div className="sd-actions">
                <a className="btn-modern" href="#capabilities">{copy.explore}<ArrowRight size={18} /></a>
                <a className="btn-modern-ghost" href="#contact">{copy.talk}</a>
              </div>
            </div>
            <div className="sd-hero-bottom">
              <ul className="sd-hero-tags">{page.tags.map(tag => <li key={tag}><MSym name="check_circle" size={16} />{tag}</li>)}</ul>
              <a href="#overview" className="sd-scroll">{copy.scroll}<ChevronDown size={18} /></a>
            </div>
          </div>
        </section>

        <nav className="sd-section-nav" aria-label={`${page.name} sections`}>
          <div className="section-container sd-section-nav-inner">
            <span className="sd-section-name"><MSym name={page.icon} size={20} />{page.shortName}</span>
            <div className="sd-section-links">
              <a href="#overview">{copy.overview}</a><a href="#capabilities">{copy.capabilities}</a>
              <a href="#applications">{copy.applications}</a><a href="#approach">{copy.approach}</a>
            </div>
          </div>
        </nav>

        <section id="overview" className="sd-section">
          <div className="section-container">
            <div className="sd-intro-grid">
              <div><p className="sd-eyebrow">{page.overview.eyebrow}</p><h2>{page.overview.title}</h2></div>
              <div className="sd-prose"><p>{page.overview.body}</p><p>{page.overview.note}</p></div>
            </div>
            <div className="sd-outcomes">{page.outcomes.map(item => (
              <article key={item.title} className="sd-outcome"><span className="sd-icon"><MSym name={item.icon} size={26} /></span><h3>{item.title}</h3><p>{item.body}</p></article>
            ))}</div>
          </div>
        </section>

        <section id="capabilities" className="sd-section sd-ice">
          <div className="section-container">
            <div className="sd-section-heading"><p className="sd-eyebrow">{copy.capabilitiesEyebrow}</p><h2>{copy.capabilitiesTitle}</h2><p>{page.capabilitiesIntro}</p></div>
            <div className="sd-capability-layout">
              <nav className="sd-capability-index" aria-label={copy.capabilities}>
                {page.capabilities.map((cap, index) => <a key={cap.id} href={`#${cap.id}`} onClick={() => openCapability(cap.id)}><span className="sd-number">{String(index + 1).padStart(2, '0')}</span><span>{cap.title}</span><ArrowRight size={16} /></a>)}
              </nav>
              <div className="sd-capability-list">{page.capabilities.map((cap, index) => {
                const isOpen = expanded.includes(cap.id);
                return <article key={cap.id} id={cap.id} className={`sd-capability${isOpen ? ' is-open' : ''}`}>
                  <h3><button type="button" id={`${cap.id}-trigger`} aria-expanded={isOpen} aria-controls={`${cap.id}-panel`} onClick={() => setExpanded(current => isOpen ? current.filter(id => id !== cap.id) : [...current, cap.id])}>
                    <span className="sd-icon"><MSym name={cap.icon} size={24} /></span>
                    <span className="sd-capability-heading"><span className="sd-capability-number">{String(index + 1).padStart(2, '0')}</span><span>{cap.title}</span></span>
                    <ChevronDown size={20} className="sd-expand" />
                  </button></h3>
                  <div id={`${cap.id}-panel`} role="region" aria-labelledby={`${cap.id}-trigger`} hidden={!isOpen} className="sd-capability-body">
                    <p className="sd-capability-subtitle">{cap.subtitle}</p><p>{cap.description}</p>
                    <div className="sd-capability-columns">
                      <div><h4>{copy.focus}</h4><ul>{cap.focus.map(item => <li key={item}><MSym name="check" size={16} />{item}</li>)}</ul></div>
                      <div className="sd-capability-result"><h4>{copy.outcome}</h4><ul>{cap.outcome.map(item => <li key={item}><MSym name="check_circle" size={16} />{item}</li>)}</ul></div>
                    </div>
                    <a href="#contact" className="sd-text-link sd-discuss-link"><span className="sd-discuss-label">{copy.discuss}</span><ArrowRight size={17} /></a>
                  </div>
                </article>;
              })}</div>
            </div>
          </div>
        </section>

        <section id="applications" className="sd-section">
          <div className="section-container">
            <div className="sd-section-heading"><p className="sd-eyebrow">{copy.applicationsEyebrow}</p><h2>{copy.applicationsTitle}</h2><p>{copy.applicationsIntro}</p></div>
            <div className="sd-applications">{page.applications.map(item => <article key={item.title} className="sd-application"><MSym name={item.icon} size={32} /><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          </div>
        </section>

        <section className="sd-feature" aria-labelledby="feature-title">
          <div className="sd-feature-photo"><img src={page.feature.image} alt={page.feature.imageAlt} loading="lazy" /></div>
          <div className="sd-feature-copy"><p className="sd-eyebrow">{page.feature.eyebrow}</p><h2 id="feature-title">{page.feature.title}</h2><p>{page.feature.body}</p><ul>{page.feature.points.map(point => <li key={point}><MSym name="check_circle" size={20} />{point}</li>)}</ul></div>
        </section>

        <section id="approach" className="sd-section">
          <div className="section-container">
            <div className="sd-section-heading"><p className="sd-eyebrow">{copy.approachEyebrow}</p><h2>{copy.approachTitle}</h2><p>{copy.approachIntro}</p></div>
            <ol className="sd-steps">{copy.steps.map((step, index) => <li key={step.title}><span className="sd-step-number">{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol>
          </div>
        </section>

        <section className="sd-section sd-ice" aria-labelledby="related-title">
          <div className="section-container">
            <div className="sd-section-heading"><p className="sd-eyebrow">{copy.relatedEyebrow}</p><h2 id="related-title">{copy.relatedTitle}</h2></div>
            <div className="sd-related">{related.map(item => <a href={`/${item.id}`} key={item.id} className="sd-related-card"><img src={item.image} alt="" loading="lazy" /><div><h3>{item.name}</h3><span>{copy.relatedLink}<ArrowRight size={17} /></span></div></a>)}</div>
          </div>
        </section>

        <section id="contact" className="sd-section sd-contact">
          <div className="section-container"><p className="sd-eyebrow">{copy.contactEyebrow}</p><h2>{page.cta.title}</h2><p>{page.cta.body}</p><div className="sd-actions"><a href={contactHref} className="btn-modern">{copy.contactEmail ? page.cta.label : copy.contactFallback.label}<ArrowRight size={18} /></a><a href="/solutions" className="sd-text-link">{copy.allSolutions}<ArrowRight size={18} /></a></div></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
