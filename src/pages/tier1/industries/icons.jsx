/**
 * Icons for this page, rendered as Google Material Symbols.
 *
 * Previously a hand-drawn 24x24 line set. The names on the left are the keys
 * the page's data files already use, so nothing outside this file changed;
 * each maps to a Material Symbols glyph on the right.
 *
 * Material Symbols is a font, so this returns a <span>, not an <svg>. Any CSS
 * that used to colour these via a bare `svg` selector now also targets .msym
 * (see the tier-1 stylesheets).
 */
const GLYPHS = {
  building: 'apartment',
  factory: 'factory',
  cart: 'shopping_cart',
  truck: 'local_shipping',
  crane: 'construction',
  health: 'health_and_safety',
  briefcase: 'work',
  globe: 'language',
  check: 'check_circle',
};

export default function Icon({ name, size = 22, className, ...rest }) {
  const glyph = GLYPHS[name] ?? 'circle';
  return (
    <span
      aria-hidden="true"
      {...rest}
      className={['msym', className].filter(Boolean).join(' ')}
      style={{
        '--msym': `${size}px`,
        fontVariationSettings: `'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' ${size}`,
      }}
    >
      {glyph}
    </span>
  );
}
