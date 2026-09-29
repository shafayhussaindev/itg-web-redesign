import { whoWeAre } from "@/data/site/home.js";


export function WhoWeAreSection() {

  return (
    <section id="company" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-background/75" />
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            {whoWeAre.title}
          </h2>
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
