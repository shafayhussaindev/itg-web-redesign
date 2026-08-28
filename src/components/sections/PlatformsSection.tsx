import { useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Brain, Layers, Palette, ShieldCheck, Wrench } from 'lucide-react';

const platforms = [
  {
    title: 'Enterprise Business Systems Core operational and financial backbone platforms.',
    icon: Layers,
  },
  {
    title: 'Sustainability & Regulatory Systems Integrated ESG, compliance and traceability layers',
    icon: ShieldCheck,
  },
  {
    title: 'Asset & Operations Intelligence Automation across physical and digital infrastructure.',
    icon: Wrench,
  },
  {
    title: 'AI & Decision Intelligence Embedded analytics and predictive optimization engines.',
    icon: Brain,
  },
];

export function PlatformsSection() {
  const cardsRef = useStaggerAnimation();

  return (
    <section id="platforms" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className='w-full h-full'>
            <h2 className="section-title lg:mt-16">Enterprise Platforms Built for Control, Intelligence and Scale</h2>
            <p className="text-lg lg:text-xl text-muted-foreground mt-2 mb-4">
              ITG platforms become the digital backbone for enterprise performance, connecting workflows, documents, approvals, analytics, compliance evidence and AI-assisted decision support.
            </p>
            <p className="text-muted-foreground text-base lg:text-lg mb-6 lg:mb-8">
              Each platform is engineered to integrate with existing systems, support regional and industry regulations, and scale across entities without compromising security, governance or operational clarity.
            </p>
            <a href="/products" className="btn-ghost group">
              Explore Platforms
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <div
                  key={platform.title}
                  className="card-enterprise p-5 lg:p-6 group hover:border-[hsl(var(--brand-secondary))]/60 transition-colors duration-300"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--brand-secondary))]/20 transition-colors">
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary group-hover:text-[hsl(var(--brand-secondary))] transition-colors" />
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
