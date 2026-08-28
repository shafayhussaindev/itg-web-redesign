import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function WhoWeAreSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="company" className="section-padding relative overflow-hidden">
      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/whoWeAre-bg.mp4" type="video/mp4" />
      </video> */}
      <div className="absolute inset-0 bg-background/75" />
      <div ref={sectionRef} className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            A Global Technology Partner for Intelligent Transformation
          </h2>
          {/* <p className="mt-3 text-lg sm:text-xl lg:text-2xl font-medium text-muted-foreground">
            A Global Technology Partner for Intelligent Transformation
          </p> */}
          <div className="mt-6 space-y-4 text-base sm:text-lg lg:text-xl text-muted-foreground">
            <p>
              ITG Technologies helps enterprises convert complexity into connected digital systems by combining AI, structured data, platform engineering and deep operational understanding.
            </p>
            <p>
              We work beyond software delivery. Our teams design digital foundations that connect people, processes, data and decisions, enabling organizations to modernize faster while protecting governance, compliance and long-term adaptability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
