import { trust } from "@/data/shared/home.js";


export function TrustSection() {

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-card border-y border-border">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            {trust.title}
          </h2>
          <p className="mt-6 text-muted-foreground text-md sm:text-base lg:text-lg">
            {trust.body}
          </p>
        </div>
      </div>
    </section>
  );
}
