'use client';

import Image from "next/image";

type LogoItem = {
  name: string;
  image: string;
};

const row1: LogoItem[] = [
  { name: "MarqueesImg01", image: "logos/image 52.svg" },
  { name: "MarqueesImg02", image: "logos/image 42.svg" },
  { name: "MarqueesImg03", image: "logos/image 43.svg" },
  { name: "MarqueesImg04", image: "logos/image 49.svg" },
  { name: "MarqueesImg05", image: "logos/image 45.svg" },
  { name: "MarqueesImg06", image: "logos/image 33.svg" },
];

const row2: LogoItem[] = [
  { name: "MarqueesImg07", image: "logos/image 48.svg" },
  { name: "MarqueesImg08", image: "logos/image 44.svg" },
  { name: "MarqueesImg09", image: "logos/image 51.svg" },
  { name: "MarqueesImg10", image: "logos/image 53.svg" },
  { name: "MarqueesImg11", image: "logos/image 54.svg" },
  { name: "MarqueesImg12", image: "logos/image 55.svg" },
  { name: "MarqueesImg13", image: "logos/image 56.svg" },
  { name: "MarqueesImg14", image: "logos/image 57.svg" },
];

// Combine both rows
const allLogos: LogoItem[] = [...row1, ...row2];

export default function PartnersMarquees() {
  return (
    <section className="w-full bg-background overflow-hidden md:py-10">
      <div className="w-full">

        {/* Desktop View - Horizontal Marquees */}
        <div className="hidden md:block space-y-2">
          {/* First Bar - Left to Right */}
          <div className="relative w-full overflow-hidden rounded-lg border-[#9C9C9C] bg-muted/30 py-2">
            <div className="flex w-max animate-marquee-left will-change-transform">
              <div className="flex gap-2 pr-2">
                {allLogos.map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center w-60 h-28 bg-muted  border-border border-2 rounded-lg border-[#9C9C9C] hover:border-accent transition-colors duration-300 flex-shrink-0 p-4"
                  >
                    <Image 
                      src={logo.image} 
                      alt={logo.name}
                      width={120}
                      height={60}
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-2 pr-2">
                {allLogos.map((logo, idx) => (
                  <div
                    key={`duplicate-${idx}`}
                    className="flex items-center justify-center w-60 h-28 bg-muted border-border border-2 rounded-lg border-[#9C9C9C] hover:border-accent transition-colors duration-300 flex-shrink-0 p-4"
                  >
                    <Image 
                      src={logo.image} 
                      alt={logo.name}
                      width={120}
                      height={60}
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Bar - Right to Left */}
          <div className="relative w-full overflow-hidden rounded-lg border-[#9C9C9C] bg-muted/30 py-2">
            <div className="flex w-max animate-marquee-right will-change-transform">
              <div className="flex gap-2 pr-2">
                {allLogos.map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center w-60 h-28 bg-muted border-border border-2 rounded-lg border-[#9C9C9C] hover:border-accent transition-colors duration-300 flex-shrink-0 p-4"
                  >
                    <Image 
                      src={logo.image} 
                      alt={logo.name}
                      width={120}
                      height={60}
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="flex gap-2 pr-2">
                {allLogos.map((logo, idx) => (
                  <div
                    key={`duplicate-${idx}`}
                    className="flex items-center justify-center w-60 h-28 bg-muted border-border border-2 rounded-lg border-[#9C9C9C] hover:border-accent transition-colors duration-300 flex-shrink-0 p-4"
                  >
                    <Image 
                      src={logo.image} 
                      alt={logo.name}
                      width={120}
                      height={60}
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical Marquees */}
        <div className="md:hidden flex gap-4 max-w-7xl mx-auto px-4 pt-6">
          {/* First Bar - Top to Bottom */}
          <div className="flex-1">
            <div className="relative h-96 w-full overflow-hidden rounded-lg border-[#9C9C9C] bg-muted/30">
              <div className="flex flex-col h-max animate-marquee-vertical will-change-transform">
                <div className="flex flex-col gap-4 pb-4">
                  {allLogos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center w-full h-20 bg-muted border-border border-2 rounded-lg border-[#9C9C9C] hover:border-accent transition-colors duration-300 flex-shrink-0 p-2"
                    >
                      <Image 
                        src={logo.image} 
                        alt={logo.name}
                        width={100}
                        height={50}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4 pb-4">
                  {allLogos.map((logo, idx) => (
                    <div
                      key={`duplicate-${idx}`}
                      className="flex items-center justify-center w-full h-20 bg-muted border-border border-2 rounded-lg border-[#9C9C9C] hover:border-accent transition-colors duration-300 flex-shrink-0 p-2"
                    >
                      <Image 
                        src={logo.image} 
                        alt={logo.name}
                        width={100}
                        height={50}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Second Bar - Bottom to Top */}
          <div className="flex-1">
            <div className="relative h-96 w-full overflow-hidden rounded-lg border-[#9C9C9C] bg-muted/30">
              <div className="flex flex-col h-max animate-marquee-vertical-reverse will-change-transform">
                <div className="flex flex-col gap-4 pb-4">
                  {allLogos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center w-full h-20 bg-muted border-border border-2 rounded-lg border-[#9C9C9C] hover:border-accent transition-colors duration-300 flex-shrink-0 p-2"
                    >
                      <Image 
                        src={logo.image} 
                        alt={logo.name}
                        width={100}
                        height={50}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4 pb-4">
                  {allLogos.map((logo, idx) => (
                    <div
                      key={`duplicate-${idx}`}
                      className="flex items-center justify-center w-full h-20 bg-muted border-border border-2 rounded-lg border-[#9C9C9C] hover:border-accent transition-colors duration-300 flex-shrink-0 p-2"
                    >
                      <Image 
                        src={logo.image} 
                        alt={logo.name}
                        width={100}
                        height={50}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}