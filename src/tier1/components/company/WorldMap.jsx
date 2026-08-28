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
 * Built from column ranges rather than 32 hand-typed 64-character strings so
 * the shape stays legible and editable.
 */
export default function WorldMap({ active }) {
  const dots = [];
  for (const [row, spans] of LAND) {
    for (const [from, to] of spans) {
      for (let col = from; col <= to; col += 1) {
        dots.push([col, row]);
      }
    }
  }

  return (
    <svg
      className={`co-map${active ? ' is-active' : ''}`}
      viewBox={`0 0 ${COLS * STEP} ${ROWS * STEP}`}
      role="img"
      aria-label="Stylised world map indicating global reach"
    >
      <g className="co-map-dots">
        {dots.map(([col, row]) => (
          <circle
            key={`${col}-${row}`}
            cx={col * STEP + STEP / 2}
            cy={row * STEP + STEP / 2}
            r={R}
            /* Both the resolve-in and the shimmer key off the column, so the
               map assembles and then pulses along the same west-east axis. */
            style={{ '--col': col }}
          />
        ))}
      </g>
    </svg>
  );
}

const COLS = 64;
const ROWS = 26;
const STEP = 14;
const R = 2.3;

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
