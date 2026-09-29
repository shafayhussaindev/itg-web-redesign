import { solutionCategories } from '@/data/solutions/landing-page.js';
import CategoryCards from '@/components/sections/CategoryCards.jsx';

/* The six solution cards. The grid itself is shared with /platforms. */
export default function SolutionCategories() {
  return (
    <CategoryCards
      title="Solution Categories"
      items={solutionCategories.map((cat) => ({
        id: cat.id,
        title: cat.title,
        sub: cat.sub,
        body: cat.body,
        image: cat.image,
        href: `/${cat.id}`,
      }))}
    />
  );
}
