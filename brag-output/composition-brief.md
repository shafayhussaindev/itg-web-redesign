# Hyperframes Composition Brief: ITG Technologies

## Objective
Create a short launch-style brag video for the ITG Technologies corporate
website — specifically for the **architecture** behind it, not just its surface.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 23.2 seconds

## Source Material
- Project root: `ITG_cooperate-website-main/`
- Primary files read: `index.html` (fonts, title), `src/index.css` (brand tokens),
  `src/content/home.js` (hero copy), `src/content/site.js` (navigation tree),
  `src/content/industry-detail.js` (tier-2 industry copy), `package.json`
- Product name: **ITG Technologies**
- Tagline / strongest claim: "Building Intelligent Platforms for an AI-driven World"
- Key UI to recreate: (a) the Industries mega menu — two columns of 11 category
  rows plus the tier-3 flyout; (b) a tier-2 industry page hero with its
  breadcrumb, icon eyebrow and two-line headline, plus one segment card
- Copy that must appear verbatim:
  - "Building Intelligent Platforms for an" / "AI-driven World"
  - The 11 industry category names, in nav order
  - "Home / Industries / Healthcare & Life Sciences"
  - "Secure by obligation." / "Usable by necessity."
  - "Hospitals & Healthcare Providers" / "Provider operations"
  - "Patient administration and scheduling" / "Clinical record access and audit"
  - "One content layer. Twenty-seven pages."

**Verified counts (do not alter — these were counted from the content files):**
5 tier-1 pages · 27 tier-2 pages (5 solutions + 5 products + 6 services +
11 industries) · 51 industry segments · 20 services · 10 product platforms.

## Creative Direction
- Tone preset: `polished`
- Creative direction: a quiet engineering-craft film — the site presented the
  way the site presents itself
- Interpretation: five scenes, long holds, soft crossfades. No zoom cuts, no
  caps-lock, no riser. The numbers land because nothing around them shouts.
- Angle: the site looks like a large hand-built marketing site and is actually
  one system — one card, one content layer, four tier-2 families on one
  foundation. Show the real site, open the real menu, land on a real detail
  page, then reveal the ratio.
- Hook: the site's own hero headline, in its own typeface, on its own navy.
- Outro / punchline: "One content layer. Twenty-seven pages."
- Avoid:
  - Generic SaaS language
  - Abstract filler visuals
  - Unrelated visual redesign
  - Any number not in the verified list above

## Visual Identity
- Background: `#0D2140` (`--navy`); light surfaces `#FFFFFF` and `#EAF0F8` (`--ice`)
- Text: `#FFFFFF` on navy; `#0D2140` headings and `#4A5568` (`--charcoal`) body on light
- Accent: `#3D6FB4` (`--brand-accent`) on light, `#A8C6EA` (`--brand-accent-soft`) on navy
- Supporting accent: `#0D9488` (`--teal`) for ticks
- Display + body font: **Sora** — shipped locally at `assets/fonts/Sora-latin.woff2`
  (variable, covers 400/600/700)
- Mono font: **JetBrains Mono 500** — `assets/fonts/JetBrainsMono-500-latin.woff2`
- Visual references from the project: the tier-2 dark hero scrim, the segment
  card's two-column identity/body split, the mono section numbers, the teal ticks

## Storyboard
Use the storyboard in `brag-output/brag-plan.md` as the creative contract.

Scene summary:
1. Real hero — 0.00-4.23s — the verbatim two-line headline on navy
2. The menu opens — 4.23-10.54s — 11 category rows cascade, then the flyout
3. The page lands — 10.54-15.81s — tier-2 hero + one segment card
4. The ratio — 15.81-20.54s — 27 / 51 / 1, one at a time, then held
5. Wordmark — 20.54-23.20s — logo and the closing line

## Audio
- Audio role: warm corporate bed with restrained motion-matched accents
- Audio arc: quiet establish → rhythmic under the menu → one impact on the page
  landing → three small ticks under the stats → fade to silence under the outro
- Music: `assets/music/happy-beats-business-moves-vol-9-by-ende-dot-app.mp3` (114.84 BPM)
- Music treatment: starts at 0, sits at ~0.24 gain, lifts to ~0.30 under the
  stat reveal, fades to 0 across the final 1.7s
- Music cue guidance: preset read from the bundled
  `happy-beats-business-moves-vol-9-by-ende-dot-app.music-cues.md`.
  Beat grid (0.52s spacing): 1.07, 1.59, 2.12, 2.65, 3.18, 3.70, 4.23, 4.75,
  5.28, 5.80, 6.34, 6.86, 7.40, 7.92, 8.44, 8.96, 9.50, 10.01, 10.54, 11.06,
  11.60, 12.12, 12.65, 13.18, 13.70, 14.22, 14.76, 15.28, 15.81, 16.34, 16.86,
  17.38, 17.91, 18.44, 18.96, 19.48, 20.02, 20.54, 21.06, 21.59, 22.12, 22.64,
  23.17. Strong cues: 3.70, 4.23, 5.28, **6.34**, 7.92, 8.44, **10.54**, 11.60,
  **12.65**, 23.17.
  Lock three: the Healthcare row highlight at **6.34**, the tier-2 page landing
  at **10.54**, the segment card rising at **12.65**.
- Audio-reactive treatment: subtle — if extraction is available, drive only the
  navy hero's radial glow opacity and the segment card's shadow depth from music
  RMS. No waveform bars, no particles, no strobing. Skip if unavailable; do not
  block the render.
- Audio-coupled moments:
  - Menu flyout opens — `assets/sfx/rollover2.ogg`, quiet
  - Tier-2 page lands — `assets/sfx/impactSoft_medium_001.ogg`, one hit
  - Each of the three figures — `assets/sfx/bong_001.ogg`, low gain
  - Outro — nothing; let the music fade carry it
- SFX selection guidance: the 11 menu rows must NOT each get a sound — that is
  eleven clicks in five seconds and it ruins the tone. One tick on the flyout only.
- SFX analysis guidance: picks above are all "low HF risk / warm" entries from
  `skills/brag/assets/sfx/sfx-analysis.md`, chosen for a polished B2B edit.
- Exact SFX choice: timestamps follow the implemented animation.
- Audio files: copied into `brag-output/composition/assets/`

## Hyperframes Instructions
Domain skills `hyperframes-core`, `hyperframes-animation`, `hyperframes-creative`,
`hyperframes-keyframes` and `hyperframes-cli` were installed via
`npx hyperframes skills update` and read from `~/.claude/skills/`. This is the
`/brag` workflow — the generic promo / launch-video workflow was not entered.

Requirements honoured:
- Real UI from the source project in scenes 2 and 3.
- All text holds long enough to read; the 11 menu rows cascade as a *shape*
  (0.1s stagger) rather than as 11 separate reads, and the three stat figures
  land on **every other beat** (~1.04s apart) so each one is legible.
- Duration 23.2s, inside the 15-25s law.
- Music plus four restrained SFX.
- Three strong-cue locks, marked `// beat-locked` in the timeline source.
- Fonts shipped locally so `font_family_without_font_face` cannot fire and the
  render is deterministic.
- `npx hyperframes check` is the single gate before render.
