import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import { itemPages } from '@/data/itemPages';
import ItemPage from '@/pages/ItemPage/ItemPage';

it('renders CGI on its published route with the product journey and reporting pipeline', () => {
  const page = itemPages.find(page => page.path === '/sourcing/consumer-goods-intelligence');
  expect(page).toBeDefined();
  const document = new DOMParser().parseFromString(renderToStaticMarkup(<ItemPage page={page} />), 'text/html');
  expect(document.querySelector('h1')?.textContent).toBe('Consumer Goods Intelligence');
  expect(document.querySelector('.t3-tagline')?.textContent).toContain('turn demand into real sales');
  expect(document.querySelectorAll('#included article')).toHaveLength(6);
  expect(document.querySelectorAll('#approach ol li')).toHaveLength(6);
  expect(document.querySelectorAll('#sourcing-protocol ol li')).toHaveLength(3);
  expect(document.querySelectorAll('#sustainability ol li')).toHaveLength(3);
  expect(document.body.textContent).toContain('Scope 1, 2 and 3');
  expect(document.querySelector('a[href="mailto:info@itginnovators.com"]')).not.toBeNull();
  expect(document.querySelector('#contact a')?.getAttribute('href')).toContain('/contact');
});
