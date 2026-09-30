import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import { itemPages } from '@/data/items/item-pages.js';
import ItemPage from '@/pages/ItemPage/ItemPage';

it('renders Aullect address intelligence on its published route', () => {
  const page = itemPages.find(page => page.path === '/supply-chain/aullect');
  expect(page).toBeDefined();
  const document = new DOMParser().parseFromString(renderToStaticMarkup(<ItemPage page={page} />), 'text/html');
  expect(document.querySelector('h1')?.textContent).toBe('Aullect');
  expect(document.querySelector('.t3-tagline')?.textContent).toContain('GCC deliveries');
  expect([...document.querySelectorAll('#approach h3')].map(node => node.textContent)).toEqual(['Understand', 'Route', 'Learn']);
  expect(document.querySelector('#overview')?.textContent).toContain('Per-customer data isolation');
  expect(document.querySelector('#overview')?.textContent).toContain('optional shared-learning');
  expect(document.querySelectorAll('.t3-applied article')).toHaveLength(4);
  expect(document.body.textContent).not.toContain('spinning mills ERP');
  expect(document.body.textContent).not.toContain('A clear path from scope to adoption');
  expect(document.querySelector('#contact a')?.getAttribute('href')).toContain('/contact');
  expect(itemPages.find(page => page.path === '/supply-chain/cgi-industrial-erp')?.title).toBe('CGI Industrial ERP');
});
