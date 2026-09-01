import { useEffect, type ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLenis } from "@/hooks/useLenis";

export type LegalSection = {
  heading: string;
  /** Paragraphs, in order. */
  body: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
};

type LegalPageProps = {
  title: string;
  /** One-line summary under the title. */
  intro: string;
  effective: string;
  sections: LegalSection[];
  children?: ReactNode;
};

/**
 * Shared layout for the policy documents. Long-form reading measure, the site
 * header and footer, and numbered sections — Terms and Privacy both render
 * through this so a change to one lands on both.
 */
export function LegalPage({ title, intro, effective, sections, children }: LegalPageProps) {
  useLenis();

  useEffect(() => {
    document.title = `${title} — ITG Technologies`;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [title]);

  return (
    <>
      <Header />

      {/* pt clears the fixed header */}
      <main className="pt-32 lg:pt-40 pb-20 lg:pb-28 bg-background">
        <div className="section-container">
          <div className="max-w-[760px]">
            <p className="text-xs font-semibold tracking-[0.13em] uppercase text-[color:var(--brand-accent)]">
              Legal
            </p>
            <h1 className="mt-3 text-3xl lg:text-[44px] font-bold tracking-tight text-foreground leading-[1.15]">
              {title}
            </h1>
            <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed">{intro}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Effective date: <span className="font-medium text-foreground">{effective}</span>
            </p>

            {children}

            <ol className="mt-12 space-y-10">
              {sections.map((section, i) => (
                <li key={section.heading}>
                  <h2 className="text-lg lg:text-xl font-semibold text-foreground">
                    <span className="text-[color:var(--brand-accent)] mr-2">{i + 1}.</span>
                    {section.heading}
                  </h2>
                  {section.body.map((para) => (
                    <p key={para.slice(0, 40)} className="mt-3 text-[15px] leading-[1.75] text-muted-foreground">
                      {para}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-3 space-y-2">
                      {section.bullets.map((point) => (
                        <li
                          key={point.slice(0, 40)}
                          className="relative pl-5 text-[15px] leading-[1.75] text-muted-foreground
                                     before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5
                                     before:rounded-full before:bg-[color:var(--teal)]"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
