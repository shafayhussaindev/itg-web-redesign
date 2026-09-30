import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import { itemPages } from '@/data/items/item-pages.js';
import ItemPage from '@/pages/ItemPage/ItemPage';

it('renders enterprise web and desktop engineering on the existing custom solution route', () => {
  const page = itemPages.find(page => page.path === '/custom-solutions/desktop-and-web-app-development');
  expect(page).toBeDefined();
  const document = new DOMParser().parseFromString(renderToStaticMarkup(<ItemPage page={page} />), 'text/html');
  expect(document.querySelector('h1')?.textContent).toBe('Desktop & Web App Development');
  expect(document.querySelectorAll('.t3-applied article')).toHaveLength(5);
  expect(document.querySelector('#included')?.textContent).toContain('Windows, macOS and Linux');
  expect(document.body.textContent).toContain('full intellectual property transfer');
  expect(document.body.textContent).toContain('DSAR');
  expect(document.body.textContent).toContain('24/7 dedicated engineering support');
  expect([...document.querySelectorAll('#approach h3')].map(node => node.textContent)).toEqual(['On-premises', 'Air-gapped', 'Hybrid cloud']);
  expect(document.querySelector('#contact a')?.getAttribute('href')).toContain('/contact');
});
