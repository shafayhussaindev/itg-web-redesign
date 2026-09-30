import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import { itemPages } from '@/data/items/item-pages.js';
import ItemPage from '@/pages/ItemPage/ItemPage';

it('renders the Business Process Re-engineering page in place of the standard sections', () => {
  const page = itemPages.find(page => page.path === '/custom-solutions/business-process-re-engineering');
  expect(page).toBeDefined();
  const document = new DOMParser().parseFromString(renderToStaticMarkup(<ItemPage page={page} />), 'text/html');
  expect(document.querySelector('h1')?.textContent).toBe('Business Process Re-engineering');
  expect(document.querySelector('.t3-tagline')?.textContent).toBe('Redesign processes around measurable outcomes.');
  expect(document.querySelector('#included')).toBeNull();
  expect(document.querySelectorAll('#challenge aside li')).toHaveLength(5);
  expect(document.querySelectorAll('#framework ol > li')).toHaveLength(5);
  expect(document.querySelectorAll('#outcomes article')).toHaveLength(5);
  expect(document.querySelectorAll('#case-studies article')).toHaveLength(2);
  expect(document.querySelectorAll('#why-itg article')).toHaveLength(3);
  expect(document.querySelector('#contact h2')?.textContent).toBe('Ready to Radicalize Your Operations?');
  const cta = document.querySelector('#contact .sd-actions a');
  expect(cta?.textContent).toContain('Request a Process Audit');
  expect(cta?.getAttribute('href')).toBe('/contact?topic=project&about=Business+Process+Re-engineering');
});
