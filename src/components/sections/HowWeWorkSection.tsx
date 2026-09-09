import { useStaggerAnimation } from '@/hooks/useScrollAnimation';
// @ts-expect-error - plain JS content file, no types alongside it
import { howWeWork } from "@/content/home.js";

import { ArrowUpRight, DraftingCompass, Hammer, Layers } from "@/components/icons/material";

const steps = [
  {
    icon: ArrowUpRight,
    title: 'Understand',
    description: 'Business structure, regulatory context and operational challenges.',
  },
  {
    icon: DraftingCompass,
    title: 'Design',
    description: 'Secure, scalable architectures aligned with enterprise governance.',
  },
  {
    icon: Hammer,
    title: 'Build',
    description: 'Implement platforms with quality control and integration discipline.',
  },
  {
    icon: Layers,
    title: 'Evolve',
    description: 'Continuously optimize performance, automation and intelligence.',
  },
];

export function HowWeWorkSection() {
  const stepsRef = useStaggerAnimation();

  return (
    <section className="section-padding bg-surface-subtle relative overflow-hidden">
      <div className="absolute inset-0 hidden dark:block bg-[url('/bg-last-section.webp')] bg-cover bg-center bg-no-repeat opacity-25 pointer-events-none" />
      <div className="absolute inset-0 hidden dark:block bg-background/70 pointer-events-none" />
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">{howWeWork.title}</h2>
          <p className="text-lg lg:text-xl text-muted-foreground mt-2">
            {howWeWork.intro}
          </p>
        </div>

        {/* Process Steps */}
        <div ref={stepsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Step card */}
              <div className="relative p-5 lg:p-6 rounded-xl bg-card border border-border h-full">
                {/* Step number */}
                <div className="absolute -top-2.5 -left-2.5 lg:-top-3 lg:-left-3 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[hsl(var(--brand-secondary))] flex items-center justify-center text-primary text-xs lg:text-sm font-bold">
                  {index + 1}
                </div>
                
                <step.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary mb-3 lg:mb-4" />
                <h3 className="text-lg lg:text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm lg:text-base text-muted-foreground">{step.description}</p>
              </div>

              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
