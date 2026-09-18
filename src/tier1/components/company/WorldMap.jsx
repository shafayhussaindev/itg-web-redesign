/**
 * Minimal animated world map — the third of the page's three animations.
 *
 * A dot-matrix landmass on an equirectangular grid, with a slow cyan shimmer
 * travelling west to east across it on a ~9 second loop. The dots resolve in
 * column by column when the section enters view, then the shimmer takes over.
 *
 * Deliberately unlabelled, and deliberately without office markers. The
 * approved copy names no countries, regions or cities anywhere on this page,
 * so pinning markers to specific places would be asserting content the client
 * has not signed off — and a wrong pin on a Company page is a real claim, not
 * a decoration. The map communicates reach; the copy beside it does the rest.
 *
 * How the shimmer is drawn (this is a performance decision, not a styling one):
 * the map is two identical dot layers — white underneath, cyan on top — and
 * the cyan layer is only visible through a soft-edged band that slides across
 * it. The band moves one way while its contents move the other, so the dots
 * stay put and only the lit window travels. Both movements are plain
 * transforms, which the browser runs on the compositor: no per-dot
 * animation, no style recalculation and no SVG repaint while it plays. The
 * earlier version animated `fill` on hundreds of individual circles, which
 * restyled and repainted the whole map every frame.
 *
 * Built from column ranges rather than 32 hand-typed 64-character strings so
 * the shape stays legible and editable.
 */
export default function WorldMap({ active }) {
  return (
    <div
      className={`co-map${active ? ' is-active' : ''}`}
      role="img"
      aria-label="Stylised world map indicating global reach"
    >
      <svg className="co-map-svg" viewBox={VIEWBOX} aria-hidden="true">
        {/* Dots grouped by column so the west-to-east resolve animates 64
            groups rather than every circle. */}
        {COLUMNS.map(([col, rows]) => (
          <g key={col} className="co-map-col" style={{ '--col': col }}>
            {rows.map((row) => (
              <Dot key={row} col={col} row={row} />
            ))}
          </g>
        ))}
      </svg>

      <div className="co-map-glint" aria-hidden="true">
        <div className="co-map-glint-band">
          {/* The moving box is a div, not the svg: Chrome composites a
              transform on a plain HTML box unconditionally, but can decline
              one set directly on an <svg>. */}
          <div className="co-map-glint-dots">
            <svg className="co-map-svg" viewBox={VIEWBOX}>
              {COLUMNS.map(([col, rows]) =>
                rows.map((row) => <Dot key={`${col}-${row}`} col={col} row={row} />)
              )}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot({ col, row }) {
  return <circle cx={col * STEP + STEP / 2} cy={row * STEP + STEP / 2} r={R} />;
}

const COLS = 64;
const ROWS = 26;
const STEP = 14;
const R = 2.3;
const VIEWBOX = `0 0 ${COLS * STEP} ${ROWS * STEP}`;

/**
 * Landmass as [row, [[fromCol, toCol], ...]] on a 64x26 equirectangular grid.
 * Row 0 is ~84°N, each row is 5.625° of latitude; column 32 is the meridian,
 * each column 5.625° of longitude. Antarctica is omitted — it would be a solid
 * bar across the bottom and reads as a border, not a continent.
 */
const LAND = [
  [0, [[23, 27]]],
  [1, [[14, 20], [23, 27], [33, 33], [45, 58]]],
  [2, [[8, 21], [24, 27], [33, 36], [37, 60]]],
  [3, [[4, 8], [9, 21], [25, 27], [32, 36], [37, 61]]],
  [4, [[3, 8], [9, 22], [31, 36], [37, 62]]],
  [5, [[6, 22], [30, 31], [32, 36], [37, 62]]],
  [6, [[7, 22], [30, 38], [39, 60], [61, 61]]],
  [7, [[8, 21], [29, 31], [32, 38], [39, 58]]],
  [8, [[8, 21], [30, 38], [39, 43], [44, 58]]],
  [9, [[9, 21], [29, 38], [39, 44], [45, 47], [48, 57]]],
  [10, [[11, 19], [28, 38], [39, 43], [45, 48], [49, 56]]],
  [11, [[12, 19], [28, 38], [39, 43], [45, 48], [49, 54]]],
  [12, [[15, 20], [28, 40], [45, 47], [49, 53]]],
  [13, [[17, 21], [28, 41], [50, 55]]],
  [14, [[19, 27], [28, 42], [50, 57]]],
  [15, [[19, 28], [29, 41], [51, 58]]],
  [16, [[20, 29], [29, 40], [52, 58]]],
  [17, [[21, 29], [30, 39], [52, 59]]],
  [18, [[21, 29], [31, 38], [51, 60]]],
  [19, [[22, 28], [31, 37], [51, 60]]],
  [20, [[23, 27], [32, 36], [52, 59]]],
  [21, [[23, 26], [57, 59], [62, 63]]],
  [22, [[24, 26], [62, 63]]],
  [23, [[24, 26]]],
  [24, [[25, 26]]],
];

/** [col, [rows...]] — computed once. A Set per column, because a few spans
 *  above share an end column (e.g. row 16's 20–29 and 29–40) and would
 *  otherwise draw the same dot twice. */
const COLUMNS = (() => {
  const byCol = new Map();
  for (const [row, spans] of LAND) {
    for (const [from, to] of spans) {
      for (let col = from; col <= to; col += 1) {
        if (!byCol.has(col)) byCol.set(col, new Set());
        byCol.get(col).add(row);
      }
    }
  }
  return [...byCol.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([col, rows]) => [col, [...rows].sort((a, b) => a - b)]);
})();
