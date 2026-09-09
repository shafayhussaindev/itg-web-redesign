import { useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, MSym } from "@/components/icons/material";
// @ts-expect-error - plain JS content file, no types alongside it
import { platforms } from "@/content/home.js";


export function PlatformsSection() {
  const cardsRef = useStaggerAnimation();

  return (
    <section id="platforms" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className='w-full h-full'>
            <h2 className="section-title lg:mt-16">{platforms.title}</h2>
            <p className="text-lg lg:text-xl text-muted-foreground mt-2 mb-4">
              {platforms.intro}
            </p>
            <p className="text-muted-foreground text-base lg:text-lg mb-6 lg:mb-8">
              {platforms.body}
            </p>
            <a href={platforms.cta.href} className="btn-ghost group">
              {platforms.cta.label}
              <ArrowRight className="w-4 h-4 origin-left transition-transform group-hover:translate-x-1 group-hover:scale-105" />
            </a>
          </div>

          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {platforms.cards.map((platform) => {
              return (
                <div
                  key={platform.title}
                  className="card-enterprise p-5 lg:p-6 group hover:border-[hsl(var(--brand-secondary))]/60 transition-colors duration-300"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--brand-secondary))]/20 transition-colors">
                    <MSym name={platform.icon} className="w-5 h-5 lg:w-6 lg:h-6 text-primary group-hover:text-[hsl(var(--brand-secondary))] transition-colors" />
                  </div>
                  <h3 className="text-base lg:text-lg font-semibold text-foreground">{platform.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
