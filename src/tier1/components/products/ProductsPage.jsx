import { useEffect, useRef, useState } from 'react';
import { useAnimationActivity } from '@/hooks/useAnimationActivity';
import ProductEcosystem from './ProductEcosystem.jsx';
import HowItWorks from './HowItWorks.jsx';
import {
  productsHero, philosophy, categoriesHeading, productCategories,
  ecosystem, howItWorks, industries, productsCta,
} from '@/content/products.js';
import '../../styles/products.css';
import CtaLabel from '../CtaLabel.jsx';
import { productCategoryPaths } from '@/content/product-detail.js';

/* ---------- small inline icon set (stroke, matches Solutions weight) ---------- */
/* Material Symbols, keyed by the icon names the products data already uses. */
const PP_GLYPHS = {
  check: 'check',
  plug: 'power',
  shield: 'verified_user',
  flow: 'account_tree',
  layers: 'layers',
  leaf: 'eco',
  gear: 'settings',
  spark: 'auto_awesome',
  screen: 'devices',
};

function Ico({ name, size = 20 }) {
  return (
    <span
      className="msym"
      aria-hidden="true"
      style={{ '--msym': `${size}px`, fontVariationSettings: `'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' ${size}` }}
    >
      {PP_GLYPHS[name] ?? 'circle'}
    </span>
  );
}

/* Renders `text` with `accent` visually emphasised. It never adds, removes or
   reorders a word — `accent` must be a verbatim substring of `text`, so the
   copy in data/products.js stays the single source and stays intact. */
function Accented({ text, accent }) {
  const at = accent ? text.lastIndexOf(accent) : -1;
  if (at === -1) return text;
  return (
    <>
      {text.slice(0, at)}
      <span className="pp-accent">{accent}</span>
      {text.slice(at + accent.length)}
    </>
  );
}

/* ---------- philosophy: the four capabilities wired to one platform core ----
   The paths are measured from the real card boxes rather than hard-coded, so
   they stay anchored when the copy rewraps or the breakpoint changes. The
   lane they run through is the container's own padding-right, which means CSS
   alone decides how wide it is per breakpoint. */
function PrincipleStack({ principles }) {
  const host = useRef(null);
  const [geo, setGeo] = useState(null);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const measure = () => {
      const cards = [...el.querySelectorAll('.pp-principle-slot')];
      const lane = parseFloat(getComputedStyle(el).paddingRight) || 0;
      if (!cards.length || lane < 24) { setGeo(null); return; }
      const w = el.clientWidth, h = el.clientHeight;
      const x0 = w - lane;          // where a path leaves its card
      const cx = w - 20, cy = h / 2; // the core everything converges on
      setGeo({
        w, h, cx, cy,
        paths: cards.map((c) => {
          const y = c.offsetTop + c.offsetHeight / 2;
          return `M${x0},${y} C${x0 + (cx - x0) * 0.55},${y} ${cx},${y + (cy - y) * 0.42} ${cx},${cy}`;
        }),
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [principles]);

  return (
    <div className="pp-principles" ref={host}>
      {/* The slot owns the staggered entry, the card owns the hover. They are
          split because a single element cannot carry two transition lists —
          sharing one made the hover lift inherit the entry's delay. */}
      {principles.map((pr, i) => (
        <div className="pp-principle-slot" key={pr.text}>
          <div
            className={`pp-principle${active === i ? ' is-active' : ''}`}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(-1)}
          >
            <span className="pp-principle-icon"><Ico name={pr.icon} /></span>
            <p>{pr.text}</p>
          </div>
        </div>
      ))}

      <div className="pp-phil-web" aria-hidden="true">
        {geo && (
          <>
            <svg viewBox={`0 0 ${geo.w} ${geo.h}`} width={geo.w} height={geo.h}>
              {geo.paths.map((d, i) => (
                <path key={i} d={d} className={`pp-web-path${active === i ? ' is-active' : ''}`} />
              ))}
              <circle className="pp-core-halo" cx={geo.cx} cy={geo.cy} r="19" />
              <circle className="pp-core-ring" cx={geo.cx} cy={geo.cy} r="11" />
              <circle className="pp-core-dot" cx={geo.cx} cy={geo.cy} r="3.6" />
            </svg>

            {/* ambient: one slow point per route, permanently in flight */}
            {geo.paths.map((d, i) => (
              <span
                key={`a${i}`} className="pp-flow"
                style={{ offsetPath: `path("${d}")`, animationDelay: `${i * 3.4}s` }}
              />
            ))}
            {/* hover: two quick points, mounted only while the card is held */}
            {active > -1 && [0, 1].map((n) => (
              <span
                key={`h${active}-${n}`} className="pp-flow pp-flow--hot"
                style={{ offsetPath: `path("${geo.paths[active]}")`, animationDelay: `${n * 0.34}s` }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- product categories ------------------------------------------ */
function CatCard({ cat, onEnter, onLeave }) {
  return (
    <article
      className={`pp-cat${cat.feature ? ' is-feature' : ''}`}
      onMouseEnter={onEnter} onMouseLeave={onLeave}
    >
      <div className="pp-cat-visual" aria-hidden="true">
        <img src={cat.image} alt="" loading="lazy" style={{ objectPosition: cat.focus }} width="1100" height="580" />
        <span className="pp-cat-glow" />
      </div>
      <div className="pp-cat-body">
        <span className="pp-cat-icon"><Ico name={cat.icon} /></span>
        <h3>{cat.title}</h3>
        <p className="pp-cat-lead">{cat.lead}</p>
        <p className="pp-cat-desc">{cat.body}</p>
        <p className="pp-includes-label">INCLUDES</p>
        <ul className="pp-includes">
          {cat.includes.map((inc) => <li key={inc}>{inc}</li>)}
        </ul>
        <a className="pp-cat-cta" href={productCategoryPaths[cat.id]}>
          {cat.cta}<span className="pp-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

/* The ecosystem behind the deck lives entirely in the gutters: a spine down
   the column gap from the feature card, a bar along the row gap, nodes where
   they meet. The cards are opaque, so only the negative space ever shows a
   line — which is what keeps it from reading as a diagram. */
function CategoryDeck({ cats }) {
  const deck = useRef(null);
  const [geo, setGeo] = useState(null);
  const [active, setActive] = useState(-1);

  const feature = cats.find((c) => c.feature);
  const rest = cats.filter((c) => !c.feature);

  useEffect(() => {
    const el = deck.current;
    if (!el) return;
    const measure = () => {
      const grid = el.querySelector('.pp-cat-grid');
      const feat = el.querySelector('.pp-cat.is-feature');
      const cards = [...grid.querySelectorAll('.pp-cat')].map((c) => c.getBoundingClientRect());
      // one column (mobile) leaves no gutter to draw in
      if (!feat || cards.length < 4 || Math.abs(cards[0].top - cards[1].top) > 4) { setGeo(null); return; }
      const base = el.getBoundingClientRect();
      const g = grid.getBoundingClientRect();
      setGeo({
        w: Math.round(base.width), h: Math.round(base.height),
        cx: (cards[0].right + cards[1].left) / 2 - base.left,
        cy: (cards[0].bottom + cards[2].top) / 2 - base.top,
        top: feat.getBoundingClientRect().bottom - base.top,
        bottom: g.bottom - base.top,
        left: g.left - base.left,
        right: g.right - base.left,
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [cats]);

  // each card lights the two segments that actually run to it
  const lit = {
    st: active === 0 || active === 1,
    sb: active === 2 || active === 3,
    bl: active === 0 || active === 2,
    br: active === 1 || active === 3,
  };
  const seg = (on) => `pp-cat-line${on ? ' is-lit' : ''}`;

  return (
    <div className="pp-cat-deck" ref={deck}>
      <div className="pp-cat-slot pp-cat-slot--feature">
        <CatCard cat={feature} />
      </div>

      <div className="pp-cat-grid">
        {rest.map((cat, i) => (
          <div className="pp-cat-slot" key={cat.id}>
            <CatCard cat={cat} onEnter={() => setActive(i)} onLeave={() => setActive(-1)} />
          </div>
        ))}
      </div>

      <div className="pp-cat-web" aria-hidden="true">
        {geo && (
          <>
            <svg viewBox={`0 0 ${geo.w} ${geo.h}`} width={geo.w} height={geo.h}>
              <line className={seg(lit.st)} x1={geo.cx} y1={geo.top} x2={geo.cx} y2={geo.cy} />
              <line className={seg(lit.sb)} x1={geo.cx} y1={geo.cy} x2={geo.cx} y2={geo.bottom} />
              <line className={seg(lit.bl)} x1={geo.left} y1={geo.cy} x2={geo.cx} y2={geo.cy} />
              <line className={seg(lit.br)} x1={geo.cx} y1={geo.cy} x2={geo.right} y2={geo.cy} />
              <circle className="pp-cat-node" cx={geo.cx} cy={geo.top} r="2.5" />
              <circle className="pp-cat-node" cx={geo.left} cy={geo.cy} r="2" />
              <circle className="pp-cat-node" cx={geo.right} cy={geo.cy} r="2" />
              <circle className="pp-cat-node" cx={geo.cx} cy={geo.bottom} r="2" />
              <circle className="pp-cat-hub" cx={geo.cx} cy={geo.cy} r="4" />
            </svg>
            <span
              className="pp-cat-drop"
              style={{ offsetPath: `path("M${geo.cx},${geo.top} L${geo.cx},${geo.bottom}")` }}
            />
            <span
              className="pp-cat-drop pp-cat-drop--b"
              style={{ offsetPath: `path("M${geo.left},${geo.cy} L${geo.right},${geo.cy}")` }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  // The philosophy thread, route pulses and hub halos loop forever. Pause them
  // while their section is off-screen, as the page's other animations do.
  const { ref: philosophyRef } = useAnimationActivity();
  const { ref: categoriesRef } = useAnimationActivity();

  return (
    <div>
      <main>

        {/* ---------- 1 · HERO ----------
            Same composition as the approved Solutions hero: full-bleed
            environment, glassmorphism content panel over it. The environment
            is the ecosystem render rather than a photograph, so the veil runs
            light and the panel carries navy type instead of white. */}
        <section className="pp-hero">
          <div className="pp-hero-env" aria-hidden="true">
            {/* decorative: the message is carried by the panel over it */}
            <picture>
              <source media="(max-width: 680px)" srcSet="/assets/products/hero-environment-sm.webp" />
              <img
                className="pp-hero-env-img"
                src="/assets/products/hero-environment.webp"
                alt="" width="2448" height="1130"
                fetchpriority="high" decoding="async"
              />
            </picture>
            <div className="pp-hero-atmos" />
            {/* light travelling the ecosystem's routes, on its isometric axes */}
            <span className="pp-trace pp-trace--1" />
            <span className="pp-trace pp-trace--2" />
            <span className="pp-trace pp-trace--3" />
            <span className="pp-node pp-node--1" />
            <span className="pp-node pp-node--2" />
            <span className="pp-node pp-node--3" />
            <span className="pp-node pp-node--4" />
          </div>
          {/* calms the left so the panel reads, leaves the ecosystem crisp right */}
          <div className="pp-hero-veil" aria-hidden="true" />

          <div className="pp-hero-inner">
            <div className="pp-hero-glass">
              <h1>{productsHero.title}</h1>
              <p className="pp-hero-sub">
                <Accented text={productsHero.subtitle} accent={productsHero.subtitleAccent} />
              </p>
              {productsHero.body.map((line) => (
                <p className="pp-hero-body" key={line}>{line}</p>
              ))}

              <div className="pp-hero-ctas">
                <a className="btn-cyan" href={productsHero.primaryCta.href}><CtaLabel>{productsHero.primaryCta.label}</CtaLabel></a>
                <a className="btn-outline-navy" href={productsHero.secondaryCta.href}>
                  {productsHero.secondaryCta.label}<span className="btn-arrow">→</span>
                </a>
              </div>
            </div>

            {/* second, smaller glass panel stepped off the main one */}
            <aside className="pp-hero-panel">
              <h2>{productsHero.panel.heading}</h2>
              <ul>
                {productsHero.panel.items.map((item) => (
                  <li key={item}>
                    <span className="pp-tick"><Ico name="check" size={14} /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* ---------- 2 · PLATFORM-FIRST PHILOSOPHY ---------- */}
        <section ref={philosophyRef} className="pp-philosophy">
          {/* philosophy → architecture → capabilities, drawn as one faint thread
              behind the copy. Meant to be found, not noticed. */}
          <svg className="pp-phil-thread" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path pathLength="100" d="M5,67 C28,67 40,53 62,50 C78,48.5 88,50 100,50" />
          </svg>

          <div className="pp-philosophy-inner">
            <div className="pp-philosophy-bg" aria-hidden="true">
              <img src="/assets/products/philosophy-core.webp" alt="" loading="lazy" width="1180" height="629" />
              <span className="pp-phil-halo" />
            </div>

            <div className="pp-phil-copy">
              <h2>{philosophy.heading}</h2>
              <p className="pp-lede">{philosophy.body}</p>
              <span className="pp-kicker">{philosophy.kicker}</span>
              <p className="pp-note">{philosophy.note}</p>
            </div>

            <PrincipleStack principles={philosophy.principles} />
          </div>
        </section>

        {/* ---------- 3 · PRODUCT CATEGORIES ---------- */}
        <section ref={categoriesRef} className="pp-cats" id="categories">
          <div className="pp-section-head">
            <h2>{categoriesHeading}</h2>
          </div>
          <CategoryDeck cats={productCategories} />
        </section>

        {/* ---------- 4 · PRODUCT ECOSYSTEM ---------- */}
        <section className="pp-ecosystem pp-grid-field">
          <div className="pp-section-head">
            <h2>{ecosystem.heading}</h2>
          </div>
          <div className="pp-ecosystem-stage">
            <ProductEcosystem />
          </div>
        </section>

        {/* ---------- 5 · HOW ITG PRODUCTS WORK TOGETHER ---------- */}
        <section className="pp-how">
          <div className="pp-how-inner">
            <div>
              <h2>{howItWorks.heading}</h2>
              <p className="pp-how-body">{howItWorks.body}</p>
              <ul className="pp-how-points">
                {howItWorks.points.map((pt) => (
                  <li key={pt}><span className="pp-dot" aria-hidden="true" /><span>{pt}</span></li>
                ))}
              </ul>
              <p className="pp-note">{howItWorks.note}</p>
            </div>
            <div>
              <HowItWorks />
            </div>
          </div>
        </section>

        {/* ---------- 6 · PRODUCTS ACROSS INDUSTRIES ---------- */}
        <section className="pp-industries" id="industries">
          <div className="pp-section-head">
            <h2>{industries.heading}</h2>
            <p>{industries.intro}</p>
          </div>

          <div className="pp-ind-stage">
            <div className="pp-ind-col pp-ind-col--left">
              {industries.items.slice(0, 4).map((it) => (
                <div className="pp-ind-item" key={it}>{it}</div>
              ))}
            </div>

            <div className="pp-ind-core">
              <img src="/assets/products/industries-anchor.webp" alt="" aria-hidden="true" loading="lazy" width="1200" height="643" />
              <span className="pp-ind-core-label"><span>ITG Platform</span></span>
            </div>

            <div className="pp-ind-col pp-ind-col--right">
              {industries.items.slice(4).map((it) => (
                <div className="pp-ind-item" key={it}>{it}</div>
              ))}
            </div>
          </div>

          <p className="pp-ind-note">{industries.note}</p>
        </section>

        {/* ---------- 7 · FINAL CTA ---------- */}
        <section className="pp-cta pp-grid-field">
          <div>
            <h2>{productsCta.heading}</h2>
            <div className="pp-cta-btns">
              <a className="btn-cyan" href={productsCta.primary.href}><CtaLabel>{productsCta.primary.label}</CtaLabel></a>
              <a className="btn-outline-navy" href={productsCta.secondary.href}>
                {productsCta.secondary.label}<span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
