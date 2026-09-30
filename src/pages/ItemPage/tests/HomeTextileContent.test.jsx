import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import { itemPages } from '@/data/items/item-pages.js';
import ItemPage from '@/pages/ItemPage/ItemPage';

it('renders the Home Textile brief on the existing industry route', () => {
  const page = itemPages.find(page => page.path === '/manufacturing-industries/home-textile');
  expect(page).toBeDefined();
  const document = new DOMParser().parseFromString(renderToStaticMarkup(<ItemPage page={page} />), 'text/html');
  expect(document.querySelector('h1')?.textContent).toBe('Home Textile');
  expect(document.querySelector('.t3-tagline')?.textContent).toContain('bed linen and towels');
  expect(document.querySelectorAll('#regulatory-coverage article')).toHaveLength(4);
  expect(document.querySelectorAll('#consumer-dpp article')).toHaveLength(4);
  expect(document.querySelectorAll('#case-profile tbody tr')).toHaveLength(6);
  expect(document.querySelector('#case-profile')?.textContent).toContain('UFLPA');
  expect(document.querySelector('#production')?.textContent).toContain('weaving, dyeing, cutting, sewing and packaging');
  expect(document.querySelectorAll('#commercial-outcomes article')).toHaveLength(4);
  expect(document.querySelector('#contact a')?.getAttribute('href')).toContain('/contact');
});
