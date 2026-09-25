import { solutionCategories } from '@/content/tier1/solutions.js';
import CategoryCards from '@/pages/tier1/shared/CategoryCards.jsx';

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
