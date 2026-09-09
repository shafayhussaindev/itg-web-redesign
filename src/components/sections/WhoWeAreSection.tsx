import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// @ts-expect-error - plain JS content file, no types alongside it
import { whoWeAre } from "@/content/home.js";


export function WhoWeAreSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="company" className="section-padding relative overflow-hidden">
      {/* Disabled by design. If re-enabled, keep preload="none" + the poster:
          this section is below the fold and must not fetch video up front.
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/whoWeAre-poster.jpg"
      >
        <source src="/whoWeAre-bg.mp4" type="video/mp4" />
      </video> */}
      <div className="absolute inset-0 bg-background/75" />
      <div ref={sectionRef} className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            {whoWeAre.title}
          </h2>
          {/* <p className="mt-3 text-lg sm:text-xl lg:text-2xl font-medium text-muted-foreground">
            A Global Technology Partner for Intelligent Transformation
          </p> */}
          <div className="mt-6 space-y-4 text-base sm:text-lg lg:text-xl text-muted-foreground">
            {whoWeAre.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
