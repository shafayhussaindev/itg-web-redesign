import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import { itemPages } from '@/data/itemPages';
import ItemPage from '@/pages/ItemPage/ItemPage';

it('replaces the Svitch route content with the supplied overview and five modules', () => {
  const page = itemPages.find(page => page.path === '/supplier-info-risk-management/svitch');
  expect(page).toBeDefined();
  const document = new DOMParser().parseFromString(renderToStaticMarkup(<ItemPage page={page} />), 'text/html');
  expect(document.querySelector('h1')?.textContent).toBe('Svitch');
  expect(document.querySelector('.t3-tagline')?.textContent).toBe('For the World We Hand Back');
  expect(document.querySelectorAll('#value-propositions article')).toHaveLength(3);
  for (const id of ['risk-analysis', 'supplier-mapping', 'supplier-onboarding', 'regulatory-compliance', 'risk-mitigation']) {
    expect(document.querySelector(`#${id}`)).not.toBeNull();
  }
  expect(document.querySelector('#supplier-onboarding')?.textContent).toContain('Invited, Responded or Not Invited');
  expect(document.body.textContent).not.toContain('CSRD reporting readiness');
  expect(document.body.textContent).not.toContain('A clear path from scope to adoption');
  expect(document.querySelector('#contact a')?.getAttribute('href')).toContain('/contact');
});
