import { expect, test } from 'vitest';
import { existsSync } from 'node:fs';
import { heroImages } from './hero-images.js';
import { itemPages } from '@/data/items/item-pages.js';

// Every listed photo exists, and every item page ends up with a new hero photo.
test('hero photos exist and cover every item page', () => {
  const missing = Object.values(heroImages).filter(src => !existsSync(`public${src}`));
  expect(missing).toEqual([]);
  const old = itemPages.filter(page => !page.image.startsWith('/images/hero/')).map(page => page.path);
  expect(old).toEqual([]);
});
