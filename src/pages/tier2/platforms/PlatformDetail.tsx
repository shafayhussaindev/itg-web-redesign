import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, MSym } from '@/components/icons/material';
import { useHashScroll } from '@/pages/tier2/shared/useHashScroll';
import { contactLink } from '@/lib/contact-link';
import { platformPages, platformDetail as copy } from '@/content/tier2/platform-detail.js';
import '@/pages/tier2/shared/base.css';
import './platform-detail.css';

type PlatformPageContent = typeof platformPages[number];

/* One template for all six platform pages (Tier 2). The products on each page
   are Tier 3: sections here, and links in the Platforms menu. */
export default function PlatformDetail({ page }: { page: PlatformPageContent }) {
  // Data Privacy launches without products; its products section, catalogue
  // panel and section-nav link are hidden until it has some.
  const hasProducts = page.products.length > 0;
  const related = platformPages.filter(item => item.id !== page.id);

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
    ? `mailto:${copy.contactEmail}?subject=${encodeURIComponent(`${name} enquiry`)}`
    : contactLink(copy.contactFallback.href, name);

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
              <a href="/platforms">{copy.platforms}</a><span aria-hidden="true">/</span>
              <span aria-current="page">{page.title}</span>
            </nav>
            <div className="pc-hero-layout">
            <div className="sd-hero-copy">
              <p className="sd-eyebrow"><MSym name={page.icon} size={20} />{page.title}</p>
              <h1 id="product-title">{page.headline}<span>{page.accent}</span></h1>
              <p className="sd-hero-description">{page.body}</p>
              <div className="sd-actions">
                <a className="btn-modern" href={hasProducts ? '#products' : '#overview'}>{copy.explore}<ArrowRight size={18} /></a>
                <a className="btn-modern-ghost" href="#contact">{copy.talk}</a>
              </div>
            </div>
            {hasProducts && <aside className="pc-catalogue" aria-label={copy.products}>
              <p className="sd-eyebrow">{copy.productsEyebrow}</p>
              {page.products.map((product, index) => <a key={product.id} href={`#${product.id}`}><span className="sd-number">{String(index + 1).padStart(2, '0')}</span><span><strong>{product.name}</strong><small>{product.description}</small></span><ArrowRight size={18} /></a>)}
            </aside>}
            </div>
            <div className="sd-hero-bottom">
              <ul className="sd-hero-tags">{page.tags.map(tag => <li key={tag}><MSym name="check_circle" size={16} />{tag}</li>)}</ul>
            </div>
          </div>
        </section>

        <nav className="sd-section-nav" aria-label={`${page.title} sections`}>
          <div className="section-container sd-section-nav-inner">
            <span className="sd-section-name"><MSym name={page.icon} size={20} />{page.shortName}</span>
            <div className="sd-section-links"><a href="#overview">{copy.overview}</a>{hasProducts && <a href="#products">{copy.products}</a>}<a href="#integration">{copy.integration}</a></div>
          </div>
        </nav>

        <section id="overview" className="sd-section">
          <div className="section-container sd-intro-grid">
            <div><p className="sd-eyebrow">{copy.overviewEyebrow}</p><h2>{page.overviewTitle}</h2></div>
            <div className="sd-prose"><p className="pc-lead">{page.lead}</p><p>{page.overviewBody}</p></div>
          </div>
        </section>

        {hasProducts && <section id="products" className="sd-section sd-ice" aria-labelledby="products-title">
          <div className="section-container">
            <div className="sd-section-heading"><p className="sd-eyebrow">{copy.productsEyebrow}</p><h2 id="products-title">{copy.productsTitle}</h2></div>
            <div className="pc-platforms">{page.products.map((product, index) => (
              <article className="pc-platform" id={product.id} key={product.id} aria-labelledby={`${product.id}-title`}>
                <div className="pc-platform-identity">
                  <div className="pc-platform-top"><span className="sd-icon"><MSym name={product.icon} size={28} /></span><span className="sd-number">{String(index + 1).padStart(2, '0')}</span></div>
                  <h3 id={`${product.id}-title`}>{product.name}</h3><p>{product.description}</p>
                </div>
                <div className="pc-platform-body"><p>{product.body}</p><h4>{copy.productFocus}</h4>
                  <ul>{product.focus.map(item => <li key={item}><MSym name="check_circle" size={18} />{item}</li>)}</ul>
                  <a href={copy.contactEmail ? enquiryHref(product.name) : '#contact'} className="sd-text-link pc-discuss-link" aria-label={`${copy.discuss}: ${product.name}`}><span className="pc-discuss-label">{copy.discuss}</span><ArrowRight size={17} /></a>
                </div>
              </article>
            ))}</div>
          </div>
        </section>}

        <section id="integration" className="sd-section">
          <div className="section-container">
            <div className="sd-section-heading"><p className="sd-eyebrow">{copy.integrationEyebrow}</p><h2>{copy.integrationTitle}</h2><p>{copy.integrationBody}</p></div>
            <div className="sd-outcomes">{copy.integrationPoints.map(item => <article className="sd-outcome" key={item.title}><span className="sd-icon"><MSym name={item.icon} size={26} /></span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          </div>
        </section>

        <section className="sd-section sd-ice" aria-labelledby="related-title">
          <div className="section-container">
            <div className="sd-section-heading"><p className="sd-eyebrow">{copy.relatedEyebrow}</p><h2 id="related-title">{copy.relatedTitle}</h2></div>
            <div className="sd-related" style={{ "--related-cols": related.length } as React.CSSProperties}>{related.map(item => <a href={item.href} key={item.id} className="sd-related-card"><img src={item.image} alt="" loading="lazy" /><div><h3>{item.title}</h3><span>{copy.relatedLink}<ArrowRight size={17} /></span></div></a>)}</div>
          </div>
        </section>

        <section id="contact" className="sd-section sd-contact">
          <div className="section-container"><p className="sd-eyebrow">{copy.contactEyebrow}</p><h2>{copy.contactTitle}</h2><p>{copy.contactBody}</p>
            <div className="sd-actions"><a href={enquiryHref(page.title)} className="btn-modern">{copy.contactEmail ? copy.contactLabel : copy.contactFallback.label}<ArrowRight size={18} /></a><a href="/platforms" className="sd-text-link">{copy.allPlatforms}<ArrowRight size={18} /></a></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
