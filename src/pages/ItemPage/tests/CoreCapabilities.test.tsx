import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import { solutionPages } from '@/data/solutions/solutionPages';
import { itemPages } from '@/data/itemPages';
import ItemPage from '@/pages/ItemPage/ItemPage';

// Every solution item written with `coreCapabilities` (AI, Enterprise, ESG).
const items = solutionPages.flatMap(parent => parent.capabilities
  .filter(item => item.coreCapabilities)
  .map(item => [`/${parent.id}/${item.id}`, item] as const));

it('covers the AI, Enterprise and ESG items', () => expect(items).toHaveLength(18));

it.each(items)('renders the overview and core capabilities for %s', (path, item) => {
  const page = itemPages.find(page => page.path === path);
  expect(page).toBeDefined();
  const document = new DOMParser().parseFromString(renderToStaticMarkup(<ItemPage page={page!} />), 'text/html');
  expect(document.querySelector('#overview')?.textContent).toContain(item.description);
  expect(document.querySelector('.sd-hero-description')).toBeNull();
  expect(document.querySelectorAll('.t3-applied article')).toHaveLength(6);
  for (const capability of item.coreCapabilities!) {
    expect(document.querySelector('.t3-applied')?.textContent).toContain(capability.title);
    expect(document.querySelector('.t3-applied')?.textContent).toContain(capability.body);
  }
  expect(page!.focus).toEqual(item.coreCapabilities!.map(core => core.title));
  expect(page!.outcomes).toEqual(item.outcome);
});
