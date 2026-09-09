import { useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, MSym } from "@/components/icons/material";
// @ts-expect-error - plain JS content file, no types alongside it
import { industries } from "@/content/home.js";


export function IndustriesSection() {
  const gridRef = useStaggerAnimation();

  return (
    <section id="industries" className="section-padding bg-card border-y border-border">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">{industries.title}</h2>
          <p className="text-lg lg:text-xl text-muted-foreground mt-2">
            {industries.intro}
          </p>
          <p className="section-description">
            {industries.note}
          </p>
        </div>

        {/* Industries Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.cards.map((industry) => {
            return (
              <div
                key={industry.name}
                className="group relative overflow-hidden rounded-2xl bg-muted/50 p-6 lg:p-8 cursor-pointer transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-primary min-h-[320px] flex flex-col hover:shadow-lg"
              >
                {/* Decorative background illustration */}
                <div className="absolute inset-0 opacity-70 transition-opacity duration-500 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="722" height="500" viewBox="0 0 722 500" className="w-full h-full dark:hidden" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <linearGradient id="bg" x1="0" y1="500" x2="722" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#b7cced" />
                        <stop offset="0.45" stopColor="#b7cced" />
                        <stop offset="0.75" stopColor="#b7cced" />
                        <stop offset="1" stopColor="#b7cced" />
                      </linearGradient>

                      <radialGradient id="glow" cx="560" cy="70" r="520" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
                        <stop offset="0.35" stopColor="#e9f1ff" stopOpacity="0.55" />
                        <stop offset="0.7" stopColor="#cfe0fb" stopOpacity="0.25" />
                        <stop offset="1" stopColor="#c6d7f2" stopOpacity="0" />
                      </radialGradient>

                      <linearGradient id="streak" x1="140" y1="40" x2="722" y2="210" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
                        <stop offset="0.25" stopColor="#ffffff" stopOpacity="0.55" />
                        <stop offset="0.55" stopColor="#eaf2ff" stopOpacity="0.75" />
                        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
                      </linearGradient>

                      <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1.4" />
                      </filter>
                    </defs>

                    <rect width="722" height="500" fill="url(#bg)" />

                    <rect width="722" height="500" fill="url(#glow)" />

                    <g fill="none" stroke="url(#streak)" strokeLinecap="round" filter="url(#soft)">
                      <path d="M 130 120 C 270 10, 520 -30, 740 90" strokeWidth="10" opacity="0.55" />
                      <path d="M 90 150  C 250 25, 520 0,   740 120" strokeWidth="7" opacity="0.45" />
                      <path d="M 60 175  C 240 45, 520 25,  740 150" strokeWidth="5" opacity="0.40" />
                      <path d="M 40 200  C 235 70, 520 50,  740 180" strokeWidth="3.5" opacity="0.35" />
                    </g>

                    <path
                      d="M -10 250
                         C 120 210, 270 215, 360 250
                         C 470 295, 610 310, 740 250
                         L 740 500
                         L -10 500 Z"
                      fill="#e9f1ff"
                      opacity="0.70"
                    />

                    <path
                      d="M -10 285
                         C 140 245, 285 255, 380 290
                         C 505 335, 615 340, 740 295
                         L 740 500
                         L -10 500 Z"
                      fill="#ffffff"
                      opacity="0.72"
                    />

                    <path
                      d="M -10 345
                         C 160 330, 285 350, 390 385
                         C 520 430, 610 435, 740 405
                         L 740 500
                         L -10 500 Z"
                      fill="#ffffff"
                      opacity="0.92"
                    />

                    <path
                      d="M -10 410
                         C 170 400, 305 420, 410 450
                         C 540 485, 640 485, 740 468"
                      fill="none"
                      stroke="#d6e4fb"
                      strokeWidth="3"
                      opacity="0.35"
                      filter="url(#soft)"
                    />

                    <g>
                      <circle cx="233.81" cy="39.22" r="1.64" fill="#ffffff" opacity="0.18" />
                      <circle cx="386.91" cy="95.08" r="0.69" fill="#ffffff" opacity="0.35" />
                      <circle cx="27.07" cy="112.75" r="0.71" fill="#ffffff" opacity="0.19" />
                      <circle cx="312.83" cy="238.89" r="1.55" fill="#ffffff" opacity="0.33" />
                      <circle cx="70.37" cy="60.82" r="1.74" fill="#ffffff" opacity="0.48" />
                      <circle cx="461.42" cy="52.04" r="1.17" fill="#ffffff" opacity="0.20" />
                      <circle cx="443.04" cy="217.37" r="0.74" fill="#ffffff" opacity="0.34" />
                      <circle cx="124.75" cy="154.33" r="1.96" fill="#ffffff" opacity="0.23" />
                      <circle cx="69.95" cy="223.27" r="2.11" fill="#ffffff" opacity="0.49" />
                      <circle cx="512.93" cy="113.36" r="1.11" fill="#ffffff" opacity="0.24" />
                      <circle cx="168.21" cy="15.87" r="1.36" fill="#ffffff" opacity="0.35" />
                      <circle cx="290.92" cy="67.86" r="1.97" fill="#ffffff" opacity="0.52" />
                      <circle cx="680.14" cy="93.75" r="1.09" fill="#ffffff" opacity="0.22" />
                      <circle cx="553.61" cy="209.58" r="1.73" fill="#ffffff" opacity="0.46" />
                      <circle cx="18.33" cy="46.57" r="1.77" fill="#ffffff" opacity="0.30" />
                      <circle cx="468.57" cy="18.28" r="1.11" fill="#ffffff" opacity="0.32" />
                      <circle cx="597.44" cy="156.55" r="1.33" fill="#ffffff" opacity="0.44" />
                      <circle cx="213.40" cy="156.40" r="1.14" fill="#ffffff" opacity="0.24" />
                      <circle cx="682.84" cy="27.73" r="1.77" fill="#ffffff" opacity="0.28" />
                      <circle cx="267.61" cy="16.98" r="1.52" fill="#ffffff" opacity="0.33" />
                      <circle cx="119.60" cy="234.73" r="1.10" fill="#ffffff" opacity="0.31" />
                      <circle cx="586.50" cy="17.78" r="1.49" fill="#ffffff" opacity="0.18" />
                      <circle cx="424.87" cy="249.40" r="0.79" fill="#ffffff" opacity="0.28" />
                      <circle cx="27.71" cy="206.45" r="1.31" fill="#ffffff" opacity="0.39" />
                      <circle cx="426.60" cy="246.51" r="2.09" fill="#ffffff" opacity="0.25" />
                      <circle cx="58.63" cy="101.74" r="1.63" fill="#ffffff" opacity="0.29" />
                      <circle cx="489.75" cy="82.26" r="1.63" fill="#ffffff" opacity="0.46" />
                      <circle cx="161.80" cy="242.46" r="1.04" fill="#ffffff" opacity="0.18" />
                      <circle cx="659.27" cy="184.06" r="1.16" fill="#ffffff" opacity="0.43" />
                      <circle cx="342.78" cy="63.04" r="1.10" fill="#ffffff" opacity="0.30" />
                      <circle cx="627.18" cy="118.47" r="0.87" fill="#ffffff" opacity="0.22" />
                      <circle cx="517.98" cy="35.56" r="1.30" fill="#ffffff" opacity="0.42" />
                      <circle cx="667.58" cy="196.03" r="1.68" fill="#ffffff" opacity="0.42" />
                      <circle cx="128.44" cy="122.88" r="1.25" fill="#ffffff" opacity="0.22" />
                      <circle cx="424.98" cy="113.30" r="1.37" fill="#ffffff" opacity="0.52" />
                      <circle cx="207.12" cy="109.24" r="0.88" fill="#ffffff" opacity="0.25" />
                      <circle cx="544.76" cy="210.22" r="1.08" fill="#ffffff" opacity="0.30" />
                      <circle cx="347.10" cy="214.84" r="1.77" fill="#ffffff" opacity="0.42" />
                      <circle cx="504.07" cy="30.49" r="2.08" fill="#ffffff" opacity="0.29" />
                      <circle cx="637.01" cy="78.87" r="1.20" fill="#ffffff" opacity="0.50" />
                      <circle cx="533.36" cy="4.22" r="1.60" fill="#ffffff" opacity="0.41" />
                      <circle cx="275.83" cy="104.42" r="1.54" fill="#ffffff" opacity="0.21" />
                      <circle cx="432.30" cy="40.64" r="0.95" fill="#ffffff" opacity="0.30" />
                      <circle cx="635.41" cy="238.87" r="1.86" fill="#ffffff" opacity="0.32" />
                      <circle cx="310.44" cy="49.08" r="1.95" fill="#ffffff" opacity="0.44" />
                      <circle cx="682.52" cy="189.20" r="1.51" fill="#ffffff" opacity="0.49" />
                      <circle cx="33.20" cy="10.62" r="1.15" fill="#ffffff" opacity="0.39" />
                      <circle cx="556.68" cy="115.33" r="0.71" fill="#ffffff" opacity="0.33" />
                      <circle cx="610.36" cy="204.34" r="1.48" fill="#ffffff" opacity="0.38" />
                      <circle cx="188.39" cy="47.03" r="1.85" fill="#ffffff" opacity="0.36" />
                      <circle cx="700.54" cy="126.43" r="1.17" fill="#ffffff" opacity="0.29" />
                      <circle cx="491.11" cy="238.45" r="1.50" fill="#ffffff" opacity="0.24" />
                      <circle cx="105.28" cy="176.08" r="1.63" fill="#ffffff" opacity="0.42" />
                      <circle cx="220.58" cy="247.78" r="1.71" fill="#ffffff" opacity="0.40" />
                      <circle cx="379.54" cy="145.15" r="2.00" fill="#ffffff" opacity="0.46" />
                      <circle cx="479.31" cy="164.93" r="0.78" fill="#ffffff" opacity="0.17" />
                      <circle cx="77.58" cy="18.30" r="1.82" fill="#ffffff" opacity="0.39" />
                      <circle cx="321.03" cy="34.86" r="1.47" fill="#ffffff" opacity="0.33" />
                      <circle cx="599.49" cy="86.94" r="2.02" fill="#ffffff" opacity="0.46" />
                      <circle cx="62.27" cy="141.64" r="0.88" fill="#ffffff" opacity="0.18" />
                      <circle cx="351.32" cy="246.54" r="1.14" fill="#ffffff" opacity="0.46" />
                      <circle cx="507.80" cy="63.05" r="2.05" fill="#ffffff" opacity="0.33" />
                      <circle cx="132.09" cy="203.78" r="1.49" fill="#ffffff" opacity="0.27" />
                      <circle cx="230.52" cy="191.41" r="1.32" fill="#ffffff" opacity="0.53" />
                      <circle cx="648.91" cy="19.98" r="1.33" fill="#ffffff" opacity="0.17" />
                      <circle cx="481.89" cy="200.33" r="1.76" fill="#ffffff" opacity="0.39" />
                      <circle cx="147.60" cy="87.33" r="0.86" fill="#ffffff" opacity="0.33" />
                      <circle cx="498.57" cy="132.05" r="1.22" fill="#ffffff" opacity="0.22" />
                      <circle cx="557.28" cy="243.38" r="1.58" fill="#ffffff" opacity="0.30" />
                      <circle cx="365.94" cy="118.77" r="1.90" fill="#ffffff" opacity="0.51" />
                      <circle cx="615.04" cy="142.55" r="1.21" fill="#ffffff" opacity="0.23" />
                      <circle cx="244.65" cy="214.75" r="1.71" fill="#ffffff" opacity="0.46" />
                      <circle cx="704.49" cy="18.55" r="1.65" fill="#ffffff" opacity="0.34" />
                      <circle cx="600.73" cy="231.70" r="1.31" fill="#ffffff" opacity="0.42" />
                      <circle cx="356.57" cy="6.49" r="1.59" fill="#ffffff" opacity="0.23" />
                      <circle cx="692.17" cy="66.65" r="1.28" fill="#ffffff" opacity="0.44" />
                      <circle cx="90.06" cy="245.21" r="1.59" fill="#ffffff" opacity="0.36" />
                      <circle cx="150.33" cy="15.57" r="1.51" fill="#ffffff" opacity="0.47" />
                      <circle cx="629.90" cy="42.42" r="1.78" fill="#ffffff" opacity="0.37" />
                    </g>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="722" height="500" viewBox="0 0 722 500" className="w-full h-full hidden dark:block" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <linearGradient id="bg" x1="0" y1="500" x2="722" y2="0">
                        <stop offset="0" stopColor="#031734" />
                        <stop offset="0.5" stopColor="#072A5A" />
                        <stop offset="1" stopColor="#0B3A7A" />
                      </linearGradient>

                      <radialGradient id="glow" cx="560" cy="70" r="520">
                        <stop offset="0" stopColor="#1E5AA8" stopOpacity="0.6" />
                        <stop offset="0.5" stopColor="#072A5A" stopOpacity="0.25" />
                        <stop offset="1" stopColor="#072A5A" stopOpacity="0" />
                      </radialGradient>

                      <linearGradient id="streak">
                        <stop offset="0" stopColor="#6FA8FF" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#9EC3FF" stopOpacity="0.6" />
                        <stop offset="1" stopColor="#6FA8FF" stopOpacity="0" />
                      </linearGradient>

                      <filter id="soft">
                        <feGaussianBlur stdDeviation="1.5" />
                      </filter>
                    </defs>

                    <rect width="722" height="500" fill="url(#bg)" />
                    <rect width="722" height="500" fill="url(#glow)" />

                    <g fill="none" stroke="url(#streak)" strokeLinecap="round" filter="url(#soft)">
                      <path d="M 130 120 C 270 10, 520 -30, 740 90" strokeWidth="9" opacity="0.45" />
                      <path d="M 90 150  C 250 25, 520 0,   740 120" strokeWidth="6" opacity="0.4" />
                      <path d="M 60 175  C 240 45, 520 25,  740 150" strokeWidth="4" opacity="0.35" />
                    </g>

                    <path
                      d="M -10 250
                         C 120 210, 270 215, 360 250
                         C 470 295, 610 310, 740 250
                         L 740 500 L -10 500 Z"
                      fill="#0A3470"
                      opacity="0.85"
                    />

                    <path
                      d="M -10 285
                         C 140 245, 285 255, 380 290
                         C 505 335, 615 340, 740 295
                         L 740 500 L -10 500 Z"
                      fill="#0E3E85"
                      opacity="0.75"
                    />

                    <path
                      d="M -10 345
                         C 160 330, 285 350, 390 385
                         C 520 430, 610 435, 740 405
                         L 740 500 L -10 500 Z"
                      fill="#124A9C"
                      opacity="0.9"
                    />

                    <g fill="#BFD9FF">
                      <circle cx="120" cy="80" r="1.6" opacity="0.6" />
                      <circle cx="260" cy="40" r="1.2" opacity="0.5" />
                      <circle cx="410" cy="120" r="1.8" opacity="0.7" />
                      <circle cx="540" cy="60" r="1.3" opacity="0.6" />
                      <circle cx="680" cy="100" r="1.5" opacity="0.55" />
                      <circle cx="300" cy="160" r="1.1" opacity="0.5" />
                      <circle cx="90" cy="200" r="1.7" opacity="0.65" />
                      <circle cx="520" cy="210" r="1.4" opacity="0.6" />
                    </g>
                  </svg>
                </div>
                <div className="relative z-10 flex flex-col h-full hover:scale-[1.04] transition-transform duration-200">
                  {/* Icon - no background */}
                  <div className="mb-6">
                  <MSym name={industry.icon} className="w-12 h-12 text-primary transition-colors duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3 transition-colors duration-500">
                    {industry.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-auto transition-colors duration-500">
                    {industry.description}
                  </p>

                  {/* Learn More Link */}
                  <a
                    href={industries.cardLinkHref}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-500 group-hover:gap-2.5 mt-6"
                  >
                    {industries.cardLinkLabel}
                    <ArrowRight className="w-4 h-4 origin-left transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-105" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Link */}
        <div className="text-center mt-10 lg:mt-14">
          <a href={industries.cta.href} className="btn-ghost group">
            {industries.cta.label}
            <ArrowRight className="w-4 h-4 origin-left transition-transform group-hover:translate-x-1 group-hover:scale-105" />
          </a>
        </div>
      </div>
    </section>
  );
}
