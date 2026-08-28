import { useEffect, useRef } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Database,
  FileText,
  Factory,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const coverCards = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Advisory',
    description: 'Business-aligned AI direction with responsible governance.',
    icon: Target,
  },
  {
    id: 'applied-ai-ml',
    title: 'Applied AI & Machine Learning',
    description: 'Practical AI that runs inside real workflows.',
    icon: Brain,
  },
  {
    id: 'enterprise-analytics',
    title: 'Enterprise Analytics & Business Intelligence',
    description: 'Decision intelligence across roles and departments.',
    icon: BarChart3,
  },
  {
    id: 'data-platforms',
    title: 'Data Platforms & Insights',
    description: 'Structured data foundations for AI and analytics.',
    icon: Database,
  },
  {
    id: 'ai-document-intel',
    title: 'AI Document Intelligence',
    description: 'Turn unstructured documents into usable data.',
    icon: FileText,
  },
  {
    id: 'industry-4-0',
    title: 'Industry 4.0 & Smart Systems',
    description: 'Connected operations with predictive insights.',
    icon: Factory,
  },
  {
    id: 'dpp-ai',
    title: 'Digital Product Passport (AI-Enabled)',
    description: 'AI-enabled compliance, traceability, and audit confidence.',
    icon: ShieldCheck,
  },
];

const capabilitySections = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Advisory',
    subtitle: 'Defining a Responsible, Business-Aligned AI Direction',
    description:
      'AI adoption succeeds when it is aligned with business priorities, governance and readiness. We support leadership teams in defining where AI makes sense and how it should scale responsibly.',
    focus: [
      'AI readiness and maturity assessment',
      'Business-aligned AI roadmap',
      'Use-case prioritization',
      'Governance, risk and ethical considerations',
    ],
    outcome: [
      'Clear AI direction aligned with enterprise objectives',
      'Reduced risk of fragmented or ungoverned AI initiatives',
    ],
    ctas: [
      { label: 'Talk to an AI Strategy Expert', href: '#contact' },
      { label: 'Request an AI Readiness Discussion', href: '#contact' },
    ],
    icon: Target,
  },
  {
    id: 'applied-ai-ml',
    title: 'Applied AI & Machine Learning',
    subtitle: 'Practical AI Embedded into Real Business Workflows',
    description:
      'We design AI and machine learning capabilities that operate inside enterprise processes, supporting automation and decision-making where it matters.',
    focus: [
      'Predictive and prescriptive analytics',
      'Intelligent automation',
      'Pattern recognition and anomaly detection',
      'Decision-support systems',
    ],
    outcome: [
      'Faster, data-driven decisions',
      'Reduced manual effort',
      'Improved operational efficiency',
    ],
    ctas: [
      { label: 'Explore Applied AI Use Cases', href: '#contact' },
      { label: 'Talk to an AI Solutions Expert', href: '#contact' },
    ],
    icon: Brain,
  },
  {
    id: 'enterprise-analytics',
    title: 'Enterprise Analytics & Business Intelligence',
    subtitle: 'From Static Reporting to Decision Intelligence',
    description:
      'Enterprises need visibility that goes beyond reports. We enable real-time, role-based analytics that support operational and strategic decisions.',
    focus: [
      'Executive and operational dashboards',
      'Cross-system analytics',
      'Performance and KPI monitoring',
      'Financial and operational intelligence',
    ],
    outcome: [
      'Single source of truth',
      'Improved decision confidence across departments',
    ],
    ctas: [
      { label: 'Explore Enterprise Analytics Capabilities', href: '#contact' },
      { label: 'See Analytics Across Business Systems', href: '#contact' },
    ],
    icon: BarChart3,
  },
  {
    id: 'data-platforms',
    title: 'Data Platforms & Insights',
    subtitle: 'Building the Data Foundation for Intelligence',
    description:
      'AI and analytics depend on structured, trusted data. We design data platforms that unify enterprise information into analytics- and AI-ready foundations.',
    focus: [
      'Enterprise data architecture',
      'Data integration and modeling',
      'Structured data pipelines',
      'Governance-ready data design',
    ],
    outcome: [
      'Reliable enterprise data',
      'Faster analytics and AI deployment',
    ],
    ctas: [
      { label: 'Explore Data Platform Architecture', href: '#contact' },
      { label: 'Talk to a Data & Analytics Expert', href: '#contact' },
    ],
    icon: Database,
  },
  {
    id: 'ai-document-intel',
    title: 'AI Document Intelligence',
    subtitle: 'Turning Unstructured Documents into Actionable Data',
    description:
      'Organizations manage large volumes of documents - invoices, contracts, certificates, reports. We apply AI to extract structure, meaning, and insight from unstructured content.',
    focus: [
      'Intelligent document classification',
      'Data extraction and validation',
      'Workflow automation',
      'Audit-ready document processing',
    ],
    outcome: [
      'Reduced manual processing',
      'Faster document workflows',
      'Improved compliance and accuracy',
    ],
    ctas: [
      { label: 'See Document Intelligence in Action', href: '#contact' },
      { label: 'Explore Document Intelligence Platform', href: '#contact' },
    ],
    icon: FileText,
  },
  {
    id: 'industry-4-0',
    title: 'Industry 4.0 & Smart Systems',
    subtitle: 'Intelligence for Connected Industrial Operations',
    description:
      'We apply AI and data intelligence to industrial environments to enable smarter, more connected operations.',
    focus: [
      'Production analytics',
      'Operational visibility',
      'Predictive insights',
      'Smart factory enablement',
    ],
    outcome: [
      'Improved efficiency and yield',
      'Better production control',
      'Data-driven industrial decisions',
    ],
    ctas: [
      { label: 'Explore Smart Industry Solutions', href: '#contact' },
      { label: 'View Manufacturing Use Cases', href: '#contact' },
    ],
    icon: Factory,
  },
];

export default function AIIntelligence() {
  const heroRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const capabilityRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dppRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.animate-item'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
      );
    }

    if (coverRef.current) {
      gsap.fromTo(
        coverRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: coverRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    }

    capabilityRefs.current.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      }
    });

    [dppRef, ctaRef].forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section
          ref={heroRef}
          className="section-padding bg-gradient-to-b from-surface-hero to-background pt-32 lg:pt-40 relative overflow-hidden"
        >
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="section-container relative">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="animate-item section-label">AI & INTELLIGENCE</span>
                <h1 className="animate-item mt-4">AI & Intelligence</h1>
                <h2 className="animate-item mt-3 mb-6 text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
                  Embedding Intelligence Across Enterprise Systems, Data and Operations
                </h2>
                <div className="animate-item space-y-4 text-lg lg:text-xl text-muted-foreground max-w-2xl">
                  <p>
                    AI & Intelligence at ITG is not positioned as experimentation or isolated innovation.
                    It is designed as a foundational enterprise capability - embedded into systems, data and workflows to support better decisions, automation and regulatory readiness.
                  </p>
                  <p>
                    AI at ITG works with existing enterprise platforms and evolves with business needs.
                  </p>
                </div>

                <div className="animate-item flex flex-wrap items-center gap-4 mt-8">
                  <Button size="lg" className="btn-primary gap-2 group" asChild>
                    <a href="#ai-capabilities">
                      Explore Capabilities
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 group" asChild>
                    <a href="#contact">
                      Talk to an Expert
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="animate-item card-enterprise p-6 lg:p-8 border border-primary/10 hover:border-primary/30 transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-5">We help organizations:</h3>
                  <ul className="space-y-4">
                    {[
                      'Move from fragmented data to connected intelligence',
                      'Apply AI where it delivers measurable operational value',
                      'Prepare for compliance, traceability and audit confidence',
                      'Modernize operations through intelligent automation',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What This Solution Covers */}
        <section id="ai-capabilities" ref={coverRef} className="section-padding bg-surface-subtle">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="mb-4">What This Solution Covers</h2>
              <p className="text-lg text-muted-foreground">
                A full spectrum of AI, data and intelligence services designed for enterprise scale.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverCards.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.id}
                    href={`#${card.id}`}
                    className="card-enterprise p-6 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                        <p className="text-sm text-muted-foreground">{card.description}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Capability Sections */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="space-y-12 lg:space-y-16">
              {capabilitySections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.id}
                    id={section.id}
                    ref={(el) => (capabilityRefs.current[index] = el)}
                    className="card-enterprise p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-72">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">{section.title}</h3>
                        <p className="text-sm uppercase tracking-wider text-muted-foreground">Solution Focus</p>
                      </div>

                      <div className="flex-1">
                        <p className="text-xl font-semibold text-primary mb-3">{section.subtitle}</p>
                        <p className="text-base lg:text-lg text-muted-foreground mb-6">{section.description}</p>

                        <div className="grid lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Focus</h4>
                            <ul className="space-y-3">
                              {section.focus.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Outcome</h4>
                            <ul className="space-y-3">
                              {section.outcome.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 mt-8">
                          <Button className="btn-primary gap-2 group" asChild>
                            <a href={section.ctas[0].href}>
                              {section.ctas[0].label}
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                          </Button>
                          <Button variant="outline" className="gap-2 group" asChild>
                            <a href={section.ctas[1].href}>
                              {section.ctas[1].label}
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Digital Product Passport (AI-Enabled) */}
        <section id="dpp-ai" ref={dppRef} className="section-padding bg-surface-subtle">
          <div className="section-container">
            <div className="max-w-5xl mx-auto card-enterprise p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">Digital Product Passport (AI-Enabled)</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Build compliance, traceability and audit confidence through AI-enabled product intelligence that integrates with enterprise systems.
                  </p>
                  <Button className="btn-primary gap-2 group" asChild>
                    <a href="#contact">
                      Explore DPP Enablement
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" ref={ctaRef} className="section-padding bg-gradient-to-b from-background to-surface-subtle">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6">Ready to Operationalize AI Across Your Enterprise?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Talk with ITG about AI strategy, applied intelligence, and systems that scale with your business.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" className="btn-primary gap-2 group" asChild>
                  <a href="/company">
                    Talk to an AI Expert
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 group" asChild>
                  <a href="/company">
                    Request a Readiness Discussion
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
