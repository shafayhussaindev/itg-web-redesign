import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from "@/components/icons/material";
// @ts-expect-error - plain JS content file, no types alongside it
import { insights } from "@/content/home.js";


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
            <h2 className="section-title">{insights.title}</h2>
            <p className="text-lg lg:text-xl text-muted-foreground mt-2">
              {insights.intro}
            </p>
            <p className="text-muted-foreground text-base lg:text-lg mb-6 lg:mb-8">
              {insights.body}
            </p>
            <a href={insights.cta.href} className="btn-ghost group">
              {insights.cta.label}
              <ArrowRight className="w-4 h-4 origin-left transition-transform group-hover:translate-x-1 group-hover:scale-105" />
            </a>
          </div>

          {/* Insight Cards Preview */}
          <div className="space-y-3 lg:space-y-4">
            {insights.cards.map((insight) => (
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
