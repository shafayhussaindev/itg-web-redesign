import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, MSym } from '@/components/icons/material';
import { useHashScroll } from '@/hooks/useHashScroll';
import { productPages, productDetail as copy } from '@/content/product-detail.js';
import './solution-detail.css';
import './product-category.css';

type ProductCategoryContent = typeof productPages[number];

export default function ProductCategory({ page }: { page: ProductCategoryContent }) {

  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = meta?.content;
    document.title = `${page.title} | ITG Technologies`;
    if (meta) meta.content = page.body;
    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== undefined) meta.content = previousDescription;
    };
  }, [page]);

  // Deep links from the menus land on a section of this page.
  useHashScroll(page);


  const enquiryHref = (name: string) => copy.contactEmail
    ? `mailto:${copy.contactEmail}?subject=${encodeURIComponent(`${name} product enquiry`)}`
    : copy.contactFallback.href;

  return (
    <>
      <a className="solution-skip" href="#product-main">{copy.skipLink}</a>
      <Header contactHref="#contact" />
      <main id="product-main" className="solution-detail product-category" tabIndex={-1}>
        <section className="sd-hero" data-dark-hero aria-labelledby="product-title">
          <img className="sd-hero-image" src={page.image} alt="" style={{ objectPosition: page.focus }} loading="eager" />
          <div className="sd-hero-scrim" />
          <div className="section-container sd-hero-content">
            <nav className="sd-breadcrumb" aria-label="Breadcrumb">
              <a href="/">{copy.home}</a><span aria-hidden="true">/</span>
              <a href="/products">{copy.products}</a><span aria-hidden="true">/</span>
              <span aria-current="page">{page.title}</span>
            </nav>
            <div className="sd-hero-copy">
              <p className="sd-eyebrow"><MSym name={page.icon} size={20} />{page.title}</p>
              <h1 id="product-title">{page.headline}<span>{page.accent}</span></h1>
              <p className="sd-hero-description">{page.body}</p>
              <div className="sd-actions">
                <a className="btn-modern" href="#platforms">{copy.explore}<ArrowRight size={18} /></a>
                <a className="btn-modern-ghost" href="#contact">{copy.talk}</a>
              </div>
            </div>
            <div className="sd-hero-bottom">
              <ul className="sd-hero-tags">{page.tags.map(tag => <li key={tag}><MSym name="check_circle" size={16} />{tag}</li>)}</ul>
              <span className="pc-hero-label">{copy.products} / {page.shortName}</span>
            </div>
          </div>
        </section>

        <nav className="sd-section-nav" aria-label={`${page.title} sections`}>
          <div className="section-container sd-section-nav-inner">
            <span className="sd-section-name"><MSym name={page.icon} size={20} />{page.shortName}</span>
            <div className="sd-section-links"><a href="#overview">{copy.overview}</a><a href="#platforms">{copy.platforms}</a><a href="#integration">{copy.integration}</a></div>
          </div>
        </nav>

        <section id="overview" className="sd-section">
          <div className="section-container sd-intro-grid">
            <div><p className="sd-eyebrow">{copy.overviewEyebrow}</p><h2>{page.overviewTitle}</h2></div>
            <div className="sd-prose"><p className="pc-lead">{page.lead}</p><p>{page.overviewBody}</p></div>
          </div>
        </section>

        <section id="platforms" className="sd-section sd-ice" aria-labelledby="platforms-title">
          <div className="section-container">
            <div className="sd-section-heading"><p className="sd-eyebrow">{copy.platformsEyebrow}</p><h2 id="platforms-title">{copy.platformsTitle}</h2></div>
            <div className="pc-platforms">{page.platforms.map((platform, index) => (
              <article className="pc-platform" id={platform.id} key={platform.id} aria-labelledby={`${platform.id}-title`}>
                <div className="pc-platform-identity">
                  <div className="pc-platform-top"><span className="sd-icon"><MSym name={platform.icon} size={28} /></span><span className="sd-number">{String(index + 1).padStart(2, '0')}</span></div>
                  <h3 id={`${platform.id}-title`}>{platform.name}</h3><p>{platform.description}</p>
                </div>
                <div className="pc-platform-body"><p>{platform.body}</p><h4>{copy.platformFocus}</h4>
                  <ul>{platform.focus.map(item => <li key={item}><MSym name="check_circle" size={18} />{item}</li>)}</ul>
                  <a href={copy.contactEmail ? enquiryHref(platform.name) : '#contact'} className="sd-text-link pc-discuss-link" aria-label={`${copy.discuss}: ${platform.name}`}><span className="pc-discuss-label">{copy.discuss}</span><ArrowRight size={17} /></a>
                </div>
              </article>
            ))}</div>
          </div>
        </section>

        <section id="integration" className="sd-section">
          <div className="section-container">
            <div className="sd-section-heading"><p className="sd-eyebrow">{copy.integrationEyebrow}</p><h2>{copy.integrationTitle}</h2><p>{copy.integrationBody}</p></div>
            <div className="sd-outcomes">{copy.integrationPoints.map(item => <article className="sd-outcome" key={item.title}><span className="sd-icon"><MSym name={item.icon} size={26} /></span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          </div>
        </section>

        <section className="sd-section sd-ice" aria-labelledby="related-title">
          <div className="section-container">
            <div className="sd-section-heading"><p className="sd-eyebrow">{copy.relatedEyebrow}</p><h2 id="related-title">{copy.relatedTitle}</h2></div>
            <div className="sd-related">{productPages.filter(item => item.id !== page.id).map(item => <a href={item.href} key={item.id} className="sd-related-card"><img src={item.image} alt="" loading="lazy" /><div><h3>{item.title}</h3><span>{copy.relatedLink}<ArrowRight size={17} /></span></div></a>)}</div>
          </div>
        </section>

        <section id="contact" className="sd-section sd-contact">
          <div className="section-container"><p className="sd-eyebrow">{copy.contactEyebrow}</p><h2>{copy.contactTitle}</h2><p>{copy.contactBody}</p>
            <div className="sd-actions"><a href={enquiryHref(page.title)} className="btn-modern">{copy.contactEmail ? copy.contactLabel : copy.contactFallback.label}<ArrowRight size={18} /></a><a href="/products" className="sd-text-link">{copy.allProducts}<ArrowRight size={18} /></a></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
