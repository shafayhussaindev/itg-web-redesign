import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import { itemPages } from '@/data/items/item-pages.js';
import ItemPage from '@/pages/ItemPage/ItemPage';

it('renders the Generative Media Production page on the shared capability layout', () => {
  const page = itemPages.find(page => page.path === '/custom-solutions/generative-media-production');
  expect(page).toBeDefined();
  const document = new DOMParser().parseFromString(renderToStaticMarkup(<ItemPage page={page} />), 'text/html');
  expect(document.querySelector('.t3-tagline')?.textContent).toContain('Industrialize creative velocity');
  expect(document.querySelector('#included')).toBeNull();
  expect(document.querySelectorAll('#challenge aside li')).toHaveLength(4);
  expect(document.querySelectorAll('#capabilities article')).toHaveLength(5);
  expect(document.querySelectorAll('#capabilities .t3-use-cases-label')).toHaveLength(5);
  expect(document.querySelectorAll('#comparison tbody tr')).toHaveLength(5);
  expect(document.querySelectorAll('#delivery ol > li')).toHaveLength(5);
  expect(document.querySelectorAll('#outcomes article')).toHaveLength(4);
  expect([...document.querySelectorAll('#case-study dt')].map(dt => dt.textContent)).toEqual(['Client Scenario', 'The ITG Solution', 'Impact']);
  const cta = document.querySelector('#contact .sd-actions a');
  expect(cta?.textContent).toContain('Request a Generative Media Demo');
  expect(cta?.getAttribute('href')).toBe('/contact?topic=project&about=Generative+Media+Production');
});
