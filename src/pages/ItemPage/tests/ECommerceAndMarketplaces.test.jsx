import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import { itemPages } from '@/data/items/item-pages.js';
import { menus } from '@/data/navigation/navigation.js';
import ItemPage from '@/pages/ItemPage/ItemPage';

const path = '/custom-solutions/e-commerce-and-marketplaces';

it('renders the E-commerce & Marketplaces page in place of the standard sections', () => {
  const page = itemPages.find(page => page.path === path);
  expect(page).toBeDefined();
  const document = new DOMParser().parseFromString(renderToStaticMarkup(<ItemPage page={page} />), 'text/html');
  expect(document.querySelector('.t3-tagline')?.textContent).toContain('high-throughput commerce engines');
  expect(document.querySelector('#included')).toBeNull();
  expect(document.querySelectorAll('#challenge aside li')).toHaveLength(4);
  expect(document.querySelectorAll('#capabilities article')).toHaveLength(5);
  expect(document.querySelectorAll('#comparison tbody tr')).toHaveLength(5);
  expect(document.querySelectorAll('#comparison thead th')).toHaveLength(3);
  expect(document.querySelectorAll('#delivery ol > li')).toHaveLength(5);
  expect(document.querySelectorAll('#outcomes article')).toHaveLength(4);
  expect(document.querySelectorAll('#case-study article')).toHaveLength(1);
  const cta = document.querySelector('#contact .sd-actions a');
  expect(cta?.textContent).toContain('Schedule an Architecture Review');
  expect(cta?.getAttribute('href')).toBe('/contact?topic=project&about=E-Commerce+%26+Marketplaces');
});

it('keeps the short line in the menu and related lists', () => {
  const solutions = menus.find(menu => menu.key === 'solutions');
  const child = solutions.items.flatMap(item => item.children).find(child => child.href === path);
  expect(child.description).toBe('Build commerce experiences that connect to operations.');
});
