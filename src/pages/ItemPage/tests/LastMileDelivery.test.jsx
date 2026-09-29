import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import { itemPages } from '@/data/itemPages';
import ItemPage from '@/pages/ItemPage/ItemPage';

it('renders GCC last-mile context on the correct industry route', () => {
  const page = itemPages.find(page => page.path === '/logistics-supply-chain-operations/transportation-fleet');
  expect(page).toBeDefined();
  const document = new DOMParser().parseFromString(renderToStaticMarkup(<ItemPage page={page} />), 'text/html');
  expect(document.querySelector('h1')?.textContent).toBe('Last-Mile Delivery');
  for (const text of ['$16.2 billion', '$28.8 billion', '8.6%', '53%', '15%', '40%', 'Makani', 'QNAS', 'PACI', 'D33']) {
    expect(document.body.textContent).toContain(text);
  }
  expect(document.querySelectorAll('.t3-applied article')).toHaveLength(4);
  expect(document.body.textContent).not.toContain('Driver tracking and proof of delivery');
  expect(itemPages.find(page => page.path === '/logistics-supply-chain-operations/last-mile')?.title).toBe('Ocean Logistics Intelligence');
});
