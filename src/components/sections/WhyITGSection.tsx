import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check } from "@/components/icons/material";
// @ts-expect-error - plain JS content file, no types alongside it
import { whyItg } from "@/content/home.js";


export function WhyITGSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section-padding bg-surface-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/Background_Why_ITG.webp')] bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-background/80 pointer-events-none " />
      <div ref={sectionRef} className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          <div className="self-start">
            <div className="border-l-2 lg:border-l-[5px] border-primary pl-5 lg:pl-6 lg:mt-7">
              <h2 className="section-title">{whyItg.eyebrow}</h2>
              <p className="text-lg lg:text-xl text-muted-foreground mt-2 mb-6 lg:mb-8">
                {whyItg.title}
              </p>
              <p className="text-muted-foreground text-base lg:text-lg">
                {whyItg.body}
              </p>
            </div>
          </div>

          <div className="self-start grid sm:grid-cols-2 gap-4">
            {whyItg.reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-xl p-4 lg:p-5 flex items-start gap-3 bg-background/75 backdrop-blur-sm  transition-all duration-300 min-h-[150px]"
                // shadow-card hover:shadow-card-hover "
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm lg:text-base font-semibold text-foreground">{reason.title}</h3>
                  <p className="text-xs lg:text-sm text-muted-foreground mt-1">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
