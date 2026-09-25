import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, MSym } from '@/components/icons/material';
import { useHashScroll } from '@/pages/tier2/shared/useHashScroll';
import { contactLink } from '@/lib/contact-link';
import { servicePages, serviceDetail as copy } from '@/content/tier2/service-detail.js';
import '@/pages/tier2/shared/base.css';
import './service-category.css';

type ServiceCategoryContent = typeof servicePages[number];

/**
 * Tier 2: one page per Services menu category, with the individual services as
 * sections. Shares the tier-2 foundation (`tier2/shared/base.css`) with the
 * solution and product pages, so all three families read as one system; the
 * only page-specific styling is in `service-category.css`.
 *
 * Delivery comes before the service catalogue to explain the engagement first.
 * Open service rows and a vertical timeline distinguish this family.
 */
export default function ServiceCategory({ page }: { page: ServiceCategoryContent }) {

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
    ? `mailto:${copy.contactEmail}?subject=${encodeURIComponent(`${name} service enquiry`)}`
    : contactLink(copy.contactFallback.href, name);

  const related = servicePages.filter(item => item.id !== page.id);

  return (
    <>
      <a className="solution-skip" href="#service-main">{copy.skipLink}</a>
      <Header contactHref="#contact" />
      <main id="service-main" className="solution-detail service-category" tabIndex={-1}>
        <section className="sd-hero" data-dark-hero aria-labelledby="service-title">
          <img className="sd-hero-image" src={page.image} alt="" style={{ objectPosition: page.focus }} loading="eager" />
          <div className="sd-hero-scrim" />
          <div className="section-container sd-hero-content">
            <nav className="sd-breadcrumb" aria-label="Breadcrumb">
              <a href="/">{copy.home}</a><span aria-hidden="true">/</span>
              <a href="/services">{copy.services}</a><span aria-hidden="true">/</span>
              <span aria-current="page">{page.name}</span>
            </nav>
            <div className="sd-hero-copy">
              <p className="sd-eyebrow"><MSym name={page.icon} size={20} />{page.name}</p>
              <h1 id="service-title">{page.headline}<span>{page.accent}</span></h1>
              <p className="sd-hero-description">{page.description}</p>
              <div className="sd-actions">
                <a className="btn-modern" href="#services">{copy.explore}<ArrowRight size={18} /></a>
                <a className="btn-modern-ghost" href="#contact">{copy.talk}</a>
              </div>
            </div>
            <div className="sd-hero-bottom">
              <ul className="sd-hero-tags">{page.tags.map(tag => <li key={tag}><MSym name="check_circle" size={16} />{tag}</li>)}</ul>
            </div>
          </div>
        </section>

        <nav className="sd-section-nav" aria-label={`${page.name} sections`}>
          <div className="section-container sd-section-nav-inner">
            <span className="sd-section-name"><MSym name={page.icon} size={20} />{page.shortName}</span>
            <div className="sd-section-links">
              <a href="#overview">{copy.overview}</a>
              <a href="#delivery">{copy.delivery}</a>
              <a href="#services">{copy.servicesNav}</a>
            </div>
          </div>
        </nav>

        <section id="overview" className="sd-section">
          <div className="section-container">
            <div className="sd-intro-grid">
              <div><p className="sd-eyebrow">{copy.overviewEyebrow}</p><h2>{page.overviewTitle}</h2></div>
              <div className="sd-prose"><p className="sc-lead">{page.lead}</p><p>{page.overviewBody}</p></div>
            </div>
            <div className="sd-outcomes">{page.outcomes.map(item => (
              <article key={item.title} className="sd-outcome">
                <span className="sd-icon"><MSym name={item.icon} size={26} /></span>
                <h3>{item.title}</h3><p>{item.body}</p>
              </article>
            ))}</div>
          </div>
        </section>

        <section id="delivery" className="sd-section">
          <div className="section-container">
            <div className="sd-section-heading">
              <p className="sd-eyebrow">{copy.deliveryEyebrow}</p>
              <h2>{copy.deliveryTitle}</h2>
              <p>{copy.deliveryIntro}</p>
            </div>
            <ol className="sd-steps">{copy.steps.map((step, index) => (
              <li key={step.title}>
                <span className="sd-step-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3><p>{step.body}</p>
              </li>
            ))}</ol>
          </div>
        </section>

        <section id="services" className="sd-section sd-ice" aria-labelledby="services-title">
          <div className="section-container">
            <div className="sd-section-heading">
              <p className="sd-eyebrow">{copy.servicesEyebrow}</p>
              <h2 id="services-title">{copy.servicesTitle}</h2>
            </div>
            <div className="sc-services">{page.services.map((service, index) => (
              <article className="sc-service" id={service.id} key={service.id} aria-labelledby={`${service.id}-title`}>
                <div className="sc-service-identity">
                  <div className="sc-service-top">
                    <span className="sd-icon"><MSym name={service.icon} size={28} /></span>
                    <span className="sd-number">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 id={`${service.id}-title`}>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="sc-service-body">
                  <p>{service.body}</p>
                  <h4>{copy.serviceFocus}</h4>
                  <ul>{service.focus.map(item => <li key={item}><MSym name="check_circle" size={18} />{item}</li>)}</ul>
                  <a
                    href={`${page.href}/${service.id}`}
                    className="sd-text-link sc-discuss-link"
                    aria-label={`${copy.serviceLink}: ${service.name}`}
                  >
                    <span className="sc-discuss-label">{copy.serviceLink}</span><ArrowRight size={17} />
                  </a>
                </div>
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

        <section className="sd-section sd-ice" aria-labelledby="related-title">
          <div className="section-container">
            <div className="sd-section-heading">
              <p className="sd-eyebrow">{copy.relatedEyebrow}</p>
              <h2 id="related-title">{copy.relatedTitle}</h2>
            </div>
            <div className="sc-related-services">{related.map((item, index) => (
              <a href={item.href} key={item.id}>
                <span className="sd-number">{String(index + 1).padStart(2, '0')}</span><h3>{item.name}</h3><ArrowRight size={20} />
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
              <a href="/services" className="sd-text-link">{copy.allServices}<ArrowRight size={18} /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
