// @ts-expect-error - plain JS content file, no types alongside it
import { footer } from "@/content/site.js";

/**
 * The four link columns were written out four times, so adding a link meant
 * copying a block of markup. They are one loop now, and every word, link and
 * heading lives in content/site.js.
 */
export function Footer() {
  return (
    <footer className="bg-[color:var(--navy)] border-t border-white/10 text-white">
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo_white.png" alt="ITG Technologies" className="h-8 lg:h-10 w-auto" />
            </a>
            <p className="text-white/75 text-sm leading-relaxed max-w-xs">{footer.tagline}</p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.heading}>
              <h4 className="text-sm font-semibold text-white mb-3 lg:mb-4">{column.heading}</h4>
              <ul className="space-y-2 lg:space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs lg:text-sm text-white/75 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 lg:mt-12 pt-6 lg:pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <p className="text-xs lg:text-sm text-white/75">
              © {new Date().getFullYear()} {footer.copyrightHolder}
            </p>
            {/* The policies sit here as well as in the Legal column: this is
                where visitors look for them. */}
            <nav className="flex items-center gap-3 sm:gap-4" aria-label="Legal">
              {footer.bottomLinks.map((link, i) => (
                <span key={link.label} className="flex items-center gap-3 sm:gap-4">
                  {i > 0 && <span aria-hidden="true" className="text-white/30">·</span>}
                  <a
                    href={link.href}
                    className="text-xs lg:text-sm text-white/75 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <a
              target="_blank"
              rel="noreferrer"
              href={footer.linkedin}
              className="tap-target inline-flex items-center justify-center text-white/75 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
