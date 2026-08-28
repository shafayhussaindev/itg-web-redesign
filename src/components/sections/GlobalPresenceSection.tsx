import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Globe } from 'lucide-react';

export function GlobalPresenceSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section-padding bg-card border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/global-presence-bg.jpeg')] bg-cover bg-center bg-no-repeat opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-background/60 pointer-events-none" />
      <div ref={sectionRef} className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-primary/10 mb-4 lg:mb-6">
            <Globe className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
          </div>
          <h2 className="section-title">
            Global Reach with Local Understanding
          </h2>
          <p className="section-description">
            With teams and partners across regions, ITG delivers platforms aligned with local business needs and global enterprise standards.
          </p>

          {/* Region indicators */}
          <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3 mt-8 lg:mt-10">
            {['Middle East', 'Europe', 'Asia'].map((region) => (
              <div
                key={region}
                className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-background border border-border text-xs lg:text-sm font-medium text-foreground"
              >
                {region}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
