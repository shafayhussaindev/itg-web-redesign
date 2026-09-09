import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
// @ts-expect-error - plain JS content file, no types alongside it
import { trust } from "@/content/home.js";


export function TrustSection() {
  const sectionRef = useScrollAnimation();
  const counters = [
    { end: 20, suffix: '+', label: 'Enterprise Clients' },
    { end: 7, label: 'Countries' },
    { end: 15, suffix: '+', label: 'Years Industry Experience' },
    { end: 99.9, suffix: '%', label: 'System Uptime', decimals: 1 },
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-card border-y border-border">
      <div ref={sectionRef} className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            {trust.title}
          </h2>
          {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            TRUST AND CREDIBILITY
          </h2> */}
          <p className="mt-6 text-muted-foreground text-md sm:text-base lg:text-lg">
            {trust.body}
          </p>
          {/* <p className="mt-3 text-lg sm:text-xl lg:text-2xl font-medium text-muted-foreground">
            Enterprise-Ready Platforms Built for the Long Term
          </p>
          <p className="mt-6 text-muted-foreground text-sm sm:text-base lg:text-lg">
            ITG delivers enterprise technology designed for security, scalability, governance and performance -
            supporting organizations operating in complex, regulated and multi-entity environments.
          </p> */}
        </div>

        {/* <div className="mt-10 md:mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 md:grid-cols-4">
          {counters.map((counter) => {
            const { ref, displayValue } = useCounterAnimation({
              end: counter.end,
              duration: 2,
              suffix: counter.suffix ?? '',
              prefix: '',
            });

            return (
              <div
                key={counter.label}
                ref={ref}
                className="card-enterprise bg-background/70 backdrop-blur-sm p-5 md:p-6 text-left flex flex-col justify-center min-h-[120px]"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight">
                  {counter.decimals
                    ? `${(Number(displayValue.replace(/[^\d.]/g, '')) || 0).toFixed(counter.decimals)}${counter.suffix ?? ''}`
                    : displayValue}
                </div>
                <div className="mt-2 text-sm sm:text-base text-muted-foreground">
                  {counter.label}
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
