/**
 * Line icons for the Company page.
 *
 * Same 24x24 grid and 1.5 stroke as `services/icons.jsx` and
 * `industries/icons.jsx`, so all four pages read as one system. Subjects match
 * the badge icons on the live Company page.
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
  shield: (
    <>
      <path d="M12 3.5 5 6.2v5.4c0 4.2 2.8 7.6 7 8.9 4.2-1.3 7-4.7 7-8.9V6.2L12 3.5z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  nodes: (
    <>
      <rect x="9.5" y="3" width="5" height="5" rx="1.4" />
      <rect x="3" y="16" width="5" height="5" rx="1.4" />
      <rect x="16" y="16" width="5" height="5" rx="1.4" />
      <path d="M12 8v4M5.5 16v-2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2" />
    </>
  ),
  institution: (
    <>
      <path d="M3.5 9.5 12 4.5l8.5 5" />
      <path d="M5.5 9.5v8M10 9.5v8M14 9.5v8M18.5 9.5v8" />
      <path d="M3 20.5h18" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.4a3.2 3.2 0 0 1 0 6.2" />
      <path d="M17.5 14.6a5.5 5.5 0 0 1 3 4.9" />
    </>
  ),
  book: (
    <>
      <path d="M12 6.5C10.5 5.2 8.5 4.5 6 4.5H3.5v13H6c2.5 0 4.5.7 6 2" />
      <path d="M12 6.5c1.5-1.3 3.5-2 6-2h2.5v13H18c-2.5 0-4.5.7-6 2" />
      <path d="M12 6.5v15" />
    </>
  ),
  scales: (
    <>
      <path d="M12 4v16M7 20h10" />
      <path d="M4 8h16M8 8 5 14h6L8 8zM16 8l-3 6h6l-3-6z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.4 2.6 3.6 5.4 3.6 8.5s-1.2 5.9-3.6 8.5c-2.4-2.6-3.6-5.4-3.6-8.5S9.6 6.1 12 3.5z" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6.5" r="2.5" />
      <circle cx="18" cy="17.5" r="2.5" />
      <path d="M8.5 6.5h4.5a3.5 3.5 0 0 1 0 7h-2a3.5 3.5 0 0 0 0 7h4.5" />
    </>
  ),
  handshake: (
    <>
      <path d="m3.5 12 3-3 3.5 3 2-1.5 2 1.5 3.5-3 3 3" />
      <path d="M6.5 9V7.5h4L12 8.5l1.5-1h4V9" />
      <path d="m10 13.5 2.5 2.5 2-2 2 2" />
      <path d="M3.5 12v3.5l4 4h9l4-4V12" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
      <path d="M12 14.5v2.5" />
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
  leaf: (
    <>
      <path d="M4.5 19.5C3 15 5 9 9.5 6.5c3-1.7 7-1.5 10-1.5.4 3.6-.2 7.6-2.2 10.3-2.8 3.8-8.3 4.8-12.8 4.2z" />
      <path d="M9 15c1.8-3.2 4.6-5.6 8-7" />
    </>
  ),
  news: (
    <>
      <path d="M4 5.5h12v13a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2v-13z" />
      <path d="M16 9h4v9.5a2 2 0 0 1-2 2" />
      <path d="M7 9h6M7 12.5h6M7 16h4" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 10v4a1.5 1.5 0 0 0 1.5 1.5H8l7 4.5V5.5L8 10H5.5A1.5 1.5 0 0 0 4 10z" />
      <path d="M18 9.5a3.5 3.5 0 0 1 0 5" />
      <path d="M8 15.5v4" />
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
