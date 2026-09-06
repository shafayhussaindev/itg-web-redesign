import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

export function FinalCTASection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="contact" className="section-padding relative overflow-hidden wave-gradient">
      <div ref={sectionRef} className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title text-[hsl(var(--foreground))]">
            Engineering What’s Next — Together
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground mb-8 lg:mb-10">
            Partner with ITG to modernize systems, deploy scalable platforms, and unlock intelligent enterprise performance.
          </p>
          <a href="/company" className="btn-cyan group">
            Speak with an ITG Solution Architect
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
