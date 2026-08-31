import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
  solutions: [
    { label: 'Intelligence & AI', href: '/ai-intelligence' },
    { label: 'Business Platforms', href: '#' },
    { label: 'Automation & Cloud', href: '#' },
    { label: 'Digital Experience', href: '#' },
    { label: 'Growth & Commerce', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Insights', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  resources: [
    { label: 'Case Studies', href: '#' },
    { label: 'Research', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Events', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[color:var(--navy)] border-t border-white/10 text-white">
      <div className="section-container py-12 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src={'/logo_white.png'} alt="ITG Innovators" className="h-8 lg:h-10 w-auto" />
              {/* <span className="text-lg lg:text-xl font-semibold text-foreground">Innovators</span> */}
            </a>
            <p className="text-white/75 text-sm leading-relaxed max-w-xs">
              Engineering intelligent digital platforms for modern enterprises.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 lg:mb-4">Solutions</h4>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.solutions.map((link) => (
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

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 lg:mb-4">Company</h4>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.company.map((link) => (
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

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 lg:mb-4">Resources</h4>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.resources.map((link) => (
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

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 lg:mb-4">Legal</h4>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.legal.map((link) => (
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
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 lg:mt-12 pt-6 lg:pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs lg:text-sm text-white/75">
            © {new Date().getFullYear()} ITG Technologies .Co . All rights reserved.
          </p>
          <div className="flex items-center gap-4 lg:gap-6">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/itgtechnologiescompany/posts/?feedView=all"
              className="text-white/75 hover:text-white transition-colors duration-200"
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
