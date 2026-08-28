import { useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Brain, Building2, Cloud, Globe, TrendingUp } from 'lucide-react';

const solutions = [
  {
    icon: Brain,
    title: 'Intelligence & AI',
    description: 'Embedded intelligence that automates decisions and drives predictive performance.',
  },
  {
    icon: Building2,
    title: 'Business Platforms',
    description: 'Core operational systems engineered for governance and scale.',
  },
  {
    icon: Cloud,
    title: 'Automation & Cloud',
    description: 'Secure infrastructure modernization with integrated workflow automation.',
  },
];

export function SolutionsSection() {
  const cardsRef = useStaggerAnimation();

  return (
    <section id="solutions" className="section-padding bg-surface-subtle">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Enterprise Solutions Designed for Real-World Complexity</h2>
          <p className="text-lg lg:text-xl text-muted-foreground mt-2">
           Modern enterprises must manage fragmented systems, rising compliance demands, sustainability expectations, distributed operations and faster customer cycles. ITG brings these challenges into one digital operating model, creating visibility where decisions are made.
          </p>
        </div>

        {/* Solutions Grid */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`card-enterprise p-5 lg:p-6 group cursor-pointer ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <solution.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3 group-hover:text-primary transition-colors duration-300">
                {solution.title}
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center mt-8 lg:mt-12">
          <a href="/solutions" className="btn-ghost group">
            Explore All Solutions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
