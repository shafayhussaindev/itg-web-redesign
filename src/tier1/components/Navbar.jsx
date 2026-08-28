import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { nav } from '../data/content.js';

const routes = {
  Solutions: '/solutions',
  Products: '/products',
  Services: '/services',
  Industries: '/industries',
  Company: '/company',
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`nav-wrap${scrolled ? ' scrolled' : ''}`}>
      <nav>
        <Link className="nav-logo-slot" to="/" aria-label="ITG Technologies home">
          {/* White logo is used throughout: the nav always carries a navy tint */}
          <img className="nav-logo-white" src="/assets/logo-white.png" alt="ITG Technologies" />
        </Link>
        <div className="navlinks">
          {nav.links.map((link) => (
            <NavLink
              key={link}
              to={routes[link]}
              className={({ isActive }) => isActive ? 'active' : undefined}
            >
              {link}
            </NavLink>
          ))}
        </div>
        <div className="navright">
          <span className="navicon" aria-hidden="true">&#8B2A32;</span>
          <span className="navicon" aria-hidden="true">&#9728;</span>
          <Link className="navcta" to="/company">{nav.cta}</Link>
        </div>
      </nav>
    </div>
  );
}
