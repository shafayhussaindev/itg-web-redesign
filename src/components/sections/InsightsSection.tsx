import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

export function InsightsSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="insights" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/insights-light-bg.jpeg')] dark:bg-[url('/insights-dark-bg.jpeg')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute " />
      <div ref={sectionRef} className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="section-title">Perspectives, Research and Real-World Outcomes</h2>
            <p className="text-lg lg:text-xl text-muted-foreground mt-2">
              Insights at ITG provide executive perspectives, research depth and proof of outcomes - designed to inform decision-makers, not market trends.
            </p>
            <p className="text-muted-foreground text-base lg:text-lg mb-6 lg:mb-8">
              Thought leadership and evidence-based guidance for enterprise leaders navigating transformation.
            </p>
            <a href="#" className="btn-ghost group">
              Explore Insights
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Insight Cards Preview */}
          <div className="space-y-3 lg:space-y-4">
            {[
              {
                category: 'Thought Leadership',
                title: 'Executive Perspectives on Enterprise AI Adoption',
              },
              {
                category: 'Case Studies',
                title: 'Operational Transformation with Enterprise Platforms',
              },
              {
                category: 'Research and Publications',
                title: 'Data Governance and Compliance in Multi-Entity Organizations',
              },
              {
                category: 'News and Media',
                title: 'ITG Platform Initiatives and Industry Updates',
              },
            ].map((insight) => (
              <div
                key={insight.title}
                className="group p-4 lg:p-5 rounded-xl bg-card border border-border hover:border-[hsl(var(--brand-secondary))]/60 hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-2 lg:gap-3 mb-2">
                  <span className="text-xs font-medium text-primary bg-[hsl(var(--brand-secondary))]/20 px-2 py-0.5 lg:py-1 rounded">
                    {insight.category}
                  </span>
                </div>
                <h4 className="text-sm lg:text-base font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                  {insight.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
