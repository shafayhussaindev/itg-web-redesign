import { solutionCategories } from '@/data/solutions/index-content.js';
import CategoryCards from '@/components/common/tier1/CategoryCards.jsx';

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
