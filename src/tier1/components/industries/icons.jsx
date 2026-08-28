/**
 * Line icons for the Industries page.
 *
 * Same 24x24 grid and 1.5 stroke as `services/icons.jsx` and the Why ITG set,
 * so the two pages read as one system. Subjects match the badge icons on the
 * live Industries page (office block, factory, cart, truck, crane, medical
 * cross, briefcase, globe) — only the drawing style changes.
 *
 * Paths only; the wrapping <svg> lives in `Icon`.
 */
const paths = {
  building: (
    <>
      <path d="M4 21V6.5L12 3v18" />
      <path d="M12 9.5 20 12v9" />
      <path d="M4 21h16" />
      <path d="M7.5 9v.01M7.5 13v.01M7.5 17v.01M16 15v.01M16 18v.01" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V11l6 4V11l6 4V7l6 3v11z" />
      <path d="M3 21h18" />
      <path d="M17.5 14v.01M17.5 17.5v.01" />
    </>
  ),
  cart: (
    <>
      <circle cx="9.5" cy="19.5" r="1.4" />
      <circle cx="17" cy="19.5" r="1.4" />
      <path d="M3 4h2.2l2.3 11h11l2-8H6.4" />
    </>
  ),
  truck: (
    <>
      <path d="M3 16.5V6h11v10.5" />
      <path d="M14 9.5h3.6L21 13v3.5h-2" />
      <path d="M8.5 16.5h4" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="17.5" cy="17.5" r="1.8" />
    </>
  ),
  crane: (
    <>
      <path d="M4 21V9.5l8-3.5v15" />
      <path d="M12 12.5 20 15v6" />
      <path d="M3 21h18" />
      <path d="M12 6V3h7" />
      <path d="M16 3v3.5" />
    </>
  ),
  health: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9M7.5 12h9" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2.5" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
      <path d="M10.5 12.5v1.5h3v-1.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.4 2.6 3.6 5.4 3.6 8.5s-1.2 5.9-3.6 8.5c-2.4-2.6-3.6-5.4-3.6-8.5S9.6 6.1 12 3.5z" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
};

export default function Icon({ name, className = '', size = 24 }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {d}
    </svg>
  );
}
