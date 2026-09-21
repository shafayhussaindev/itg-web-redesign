import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, MSym } from '@/components/icons/material';
import { useHashScroll } from '@/hooks/useHashScroll';
import { industryPages, industryDetail as copy } from '@/content/industry-detail.js';
import './solution-detail.css';
import './industry-detail.css';

type IndustryPageContent = typeof industryPages[number];

/**
 * Tier 2: one page per Industries menu category, with the segments inside each
 * sector as sections. Shares the tier-2 foundation (`solution-detail.css`)
 * with the solution, product and service pages; the only page-specific styling
 * is in `industry-detail.css`.
 *
 * Two sections differ from the service pages, because an industry page answers
 * "is this us?" before "what do you sell?":
 *   - Who We Serve  — the segments, carrying the menu's deep-link ids.
 *   - What We Deliver — the sector's capability areas, a lighter grid.
 */
export default function IndustryDetail({ page }: { page: IndustryPageContent }) {

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

  // Deep links from the menus land on a section of this page.
  useHashScroll(page);


  const enquiryHref = (name: string) => copy.contactEmail
    ? `mailto:${copy.contactEmail}?subject=${encodeURIComponent(`${name} enquiry`)}`
    : copy.contactFallback.href;

  const related = industryPages.filter(item => item.id !== page.id);

  return (
    <>
      <a className="solution-skip" href="#industry-main">{copy.skipLink}</a>
      <Header contactHref="#contact" />
      <main id="industry-main" className="solution-detail industry-detail" tabIndex={-1}>
        <section className="sd-hero" data-dark-hero aria-labelledby="industry-title">
          <img className="sd-hero-image" src={page.image} alt="" style={{ objectPosition: page.focus }} loading="eager" />
          <div className="sd-hero-scrim" />
          <div className="section-container sd-hero-content">
            <nav className="sd-breadcrumb" aria-label="Breadcrumb">
              <a href="/">{copy.home}</a><span aria-hidden="true">/</span>
              <a href="/industries">{copy.industries}</a><span aria-hidden="true">/</span>
              <span aria-current="page">{page.name}</span>
            </nav>
            <div className="sd-hero-copy">
              <p className="sd-eyebrow"><MSym name={page.icon} size={20} />{page.name}</p>
              <h1 id="industry-title">{page.headline}<span>{page.accent}</span></h1>
              <p className="sd-hero-description">{page.description}</p>
              <div className="sd-actions">
                <a className="btn-modern" href="#segments">{copy.explore}<ArrowRight size={18} /></a>
                <a className="btn-modern-ghost" href="#contact">{copy.talk}</a>
              </div>
            </div>
            <div className="sd-hero-bottom">
              <ul className="sd-hero-tags">{page.tags.map(tag => <li key={tag}><MSym name="check_circle" size={16} />{tag}</li>)}</ul>
              <span className="id-hero-label">{copy.industries} / {page.shortName}</span>
            </div>
          </div>
        </section>

        <nav className="sd-section-nav" aria-label={`${page.name} sections`}>
          <div className="section-container sd-section-nav-inner">
            <span className="sd-section-name"><MSym name={page.icon} size={20} />{page.shortName}</span>
            <div className="sd-section-links">
              <a href="#overview">{copy.overview}</a>
              <a href="#segments">{copy.segmentsNav}</a>
              <a href="#capabilities">{copy.capabilitiesNav}</a>
              <a href="#approach">{copy.approachNav}</a>
            </div>
          </div>
        </nav>

        <section id="overview" className="sd-section">
          <div className="section-container">
            <div className="sd-intro-grid">
              <div><p className="sd-eyebrow">{copy.overviewEyebrow}</p><h2>{page.overviewTitle}</h2></div>
              <div className="sd-prose"><p className="id-lead">{page.lead}</p><p>{page.overviewBody}</p></div>
            </div>
            <div className="sd-outcomes">{page.outcomes.map(item => (
              <article key={item.title} className="sd-outcome">
                <span className="sd-icon"><MSym name={item.icon} size={26} /></span>
                <h3>{item.title}</h3><p>{item.body}</p>
              </article>
            ))}</div>
          </div>
        </section>

        <section id="segments" className="sd-section sd-ice" aria-labelledby="segments-title">
          <div className="section-container">
            <div className="sd-section-heading">
              <p className="sd-eyebrow">{copy.segmentsEyebrow}</p>
              <h2 id="segments-title">{copy.segmentsTitle}</h2>
            </div>
            <div className="id-segments">{page.segments.map((segment, index) => (
              <article className="id-segment" id={segment.id} key={segment.id} aria-labelledby={`${segment.id}-title`}>
                <div className="id-segment-identity">
                  <div className="id-segment-top">
                    <span className="sd-icon"><MSym name={segment.icon} size={28} /></span>
                    <span className="sd-number">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 id={`${segment.id}-title`}>{segment.name}</h3>
                  <p>{segment.description}</p>
                </div>
                <div className="id-segment-body">
                  <p>{segment.body}</p>
                  <h4>{copy.segmentFocus}</h4>
                  <ul>{segment.focus.map(item => <li key={item}><MSym name="check_circle" size={18} />{item}</li>)}</ul>
                  <a
                    href={copy.contactEmail ? enquiryHref(segment.name) : '#contact'}
                    className="sd-text-link id-discuss-link"
                    aria-label={`${copy.discuss}: ${segment.name}`}
                  >
                    <span className="id-discuss-label">{copy.discuss}</span><ArrowRight size={17} />
                  </a>
                </div>
              </article>
            ))}</div>
          </div>
        </section>

        <section id="capabilities" className="sd-section" aria-labelledby="capabilities-title">
          <div className="section-container">
            <div className="sd-section-heading">
              <p className="sd-eyebrow">{copy.capabilitiesEyebrow}</p>
              <h2 id="capabilities-title">{copy.capabilitiesTitle}</h2>
            </div>
            <div className="id-capabilities">{page.capabilities.map(item => (
              <article className="id-capability" key={item.title}>
                <span className="sd-icon"><MSym name={item.icon} size={26} /></span>
                <h3>{item.title}</h3><p>{item.body}</p>
              </article>
            ))}</div>
          </div>
        </section>

        <section className="sd-feature" aria-labelledby="feature-title">
          <div className="sd-feature-photo"><img src={page.feature.image} alt={page.feature.imageAlt} loading="lazy" /></div>
          <div className="sd-feature-copy">
            <p className="sd-eyebrow">{page.feature.eyebrow}</p>
            <h2 id="feature-title">{page.feature.title}</h2>
            <p>{page.feature.body}</p>
            <ul>{page.feature.points.map(point => <li key={point}><MSym name="check_circle" size={20} />{point}</li>)}</ul>
          </div>
        </section>

        <section id="approach" className="sd-section">
          <div className="section-container">
            <div className="sd-section-heading">
              <p className="sd-eyebrow">{copy.approachEyebrow}</p>
              <h2>{copy.approachTitle}</h2>
              <p>{copy.approachIntro}</p>
            </div>
            <ol className="sd-steps">{copy.steps.map((step, index) => (
              <li key={step.title}>
                <span className="sd-step-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3><p>{step.body}</p>
              </li>
            ))}</ol>
          </div>
        </section>

        <section className="sd-section sd-ice" aria-labelledby="related-title">
          <div className="section-container">
            <div className="sd-section-heading">
              <p className="sd-eyebrow">{copy.relatedEyebrow}</p>
              <h2 id="related-title">{copy.relatedTitle}</h2>
            </div>
            <div className="sd-related">{related.map(item => (
              <a href={item.href} key={item.id} className="sd-related-card">
                <img src={item.image} alt="" loading="lazy" />
                <div><h3>{item.shortName}</h3><span>{copy.relatedLink}<ArrowRight size={17} /></span></div>
              </a>
            ))}</div>
          </div>
        </section>

        <section id="contact" className="sd-section sd-contact">
          <div className="section-container">
            <p className="sd-eyebrow">{copy.contactEyebrow}</p>
            <h2>{page.cta.title}</h2>
            <p>{page.cta.body}</p>
            <div className="sd-actions">
              <a href={enquiryHref(page.name)} className="btn-modern">
                {copy.contactEmail ? page.cta.label : copy.contactFallback.label}<ArrowRight size={18} />
              </a>
              <a href="/industries" className="sd-text-link">{copy.allIndustries}<ArrowRight size={18} /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
