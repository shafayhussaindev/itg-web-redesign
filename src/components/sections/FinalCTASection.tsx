import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from "@/components/icons/material";
// @ts-expect-error - plain JS content file, no types alongside it
import { finalCta } from "@/content/home.js";


export function FinalCTASection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="contact" className="section-padding relative overflow-hidden wave-gradient">
      <div ref={sectionRef} className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title text-[hsl(var(--foreground))]">
            {finalCta.title}
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground mb-8 lg:mb-10">
            {finalCta.body}
          </p>
          <a href={finalCta.cta.href} className="btn-cyan group">
            {finalCta.cta.label}
            <ArrowRight className="w-4 h-4 origin-left transition-transform group-hover:translate-x-1 group-hover:scale-105" />
          </a>
        </div>
      </div>
    </section>
  );
}
