import SolutionDetail from './SolutionDetail';
import { solutionPages } from '../../data/solutions/solutionPages';

export default function AIIntelligence() {
  return <SolutionDetail page={solutionPages.find(page => page.id === 'artificial-intelligence')} />;
}
