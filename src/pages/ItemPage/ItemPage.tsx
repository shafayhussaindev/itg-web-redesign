import LawIntoActionContent from './custom/LawIntoActionContent';
import ConsumerGoodsIntelligenceContent from './custom/ConsumerGoodsIntelligenceContent';
import HomeTextileContent from './custom/HomeTextileContent';
import SvitchContent from './custom/SvitchContent';
import { useEffect } from 'react';
import { ArrowRight, MSym } from '@/components/common/Icons';
import { useHashScroll } from '@/hooks/useHashScroll';
import { itemFamilies } from '@/data/site/item-page.js';
import { itemLabel as label, type itemPages } from '@/data/itemPages';

type ItemPageContent = typeof itemPages[number];
import '@/styles/detail-pages.css';
import './item-page.css';
import '@/styles/detail-pages-theme.css';

const pad = (n: number) => String(n + 1).padStart(2, '0');

/* One template for every Tier 3 page (a capability, product, service or
   industry segment). All words come from itemPages.js, which reads them from
   the Tier 2 content files. */
export default function ItemPage({ page }: { page: ItemPageContent }) {
  const family = itemFamilies[page.family];
  const isLia = page.path === '/sourcing/integra-crm';
  const isCgi = page.path === '/sourcing/integra-erp';
  const isHomeTextile = page.path === '/manufacturing-industries/textile-apparel';
  const isSvitch = page.path === '/supplier-info-risk-management/ecomagnet';
  const overview = page.overview ?? { title: 'Overview', body: [page.body] };

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
              <h1 id="tier3-title">{page.title}</h1>
              {page.metrics && <dl className="t3-hero-metrics">{page.metrics.map(metric => (
                <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>
              ))}</dl>}
              <p className="t3-tagline">{page.tagline}</p>
              <div className="sd-actions">
                <a className="btn-modern" href={isLia ? 'https://www.lawintoaction.com' : '#contact'}>{isLia ? 'Start a compliance check' : label('discuss', page)}<ArrowRight size={18} /></a>
                <a className="btn-modern-ghost" href={page.parent.href}>{label('backTo', page)}</a>
              </div>
            </div>
          </div>
        </section>

        {isLia ? <LawIntoActionContent /> : isCgi ? <ConsumerGoodsIntelligenceContent /> : isHomeTextile ? <HomeTextileContent /> : isSvitch ? <SvitchContent /> : <>
        {overview && (
          <section id="overview" className="sd-section">
            <div className="section-container sd-intro-grid">
              <div><h2>{overview.title}</h2></div>
              <div className="sd-prose">{overview.body.map(p => <p key={p}>{p}</p>)}</div>
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

        </>}

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
            <h2>{isLia ? 'Ready to expand confidently?' : label('contactTitle', page)}</h2>
            <p>{isLia ? 'Access the LIA portal to initiate a compliance check, or consult our engineering team regarding direct Partner API keys.' : label('contactBody', page)}</p>
            <div className="sd-actions">
              {!isLia && <a href={page.contactHref} className="btn-modern">{label('discuss', page)}<ArrowRight size={18} /></a>}
              {isLia && <a href={page.contactHref} className="sd-text-link">Discuss Partner API access<ArrowRight size={18} /></a>}
              <a href={page.parent.href} className="sd-text-link">{label('backTo', page)}<ArrowRight size={18} /></a>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
