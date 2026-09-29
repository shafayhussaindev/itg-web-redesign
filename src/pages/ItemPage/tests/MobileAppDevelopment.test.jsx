import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import { itemPages } from '@/data/itemPages';
import ItemPage from '@/pages/ItemPage/ItemPage';

it('renders the mobile service metrics, pillars, stack and lifecycle on its route', () => {
  const page = itemPages.find(page => page.path === '/custom-solutions/mobile-apps');
  expect(page).toBeDefined();
  const document = new DOMParser().parseFromString(renderToStaticMarkup(<ItemPage page={page} />), 'text/html');
  expect(document.querySelector('h1')?.textContent).toBe('Mobile App Development');
  expect(document.querySelector('h1')?.nextElementSibling?.className).toBe('t3-hero-metrics');
  expect([...document.querySelectorAll('.t3-hero-metrics dd')].map(node => node.textContent)).toEqual(['99.9%', '50+', '4.8★', '40%']);
  expect(document.querySelectorAll('.sd-outcome')).toHaveLength(4);
  expect(document.querySelectorAll('.t3-applied article')).toHaveLength(5);
  expect(document.querySelectorAll('#approach li')).toHaveLength(5);
  expect(document.body.textContent).toContain('30–90 days');
  expect(document.body.textContent).not.toContain('App Center');
  expect(itemPages.find(page => page.path === '/custom-solutions/enterprise-web')?.metrics).toBeUndefined();
});
