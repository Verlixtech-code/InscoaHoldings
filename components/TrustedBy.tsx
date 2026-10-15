'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const supplyLogos: string[] = [
  "1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp",
  "10.webp", "11.webp", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png",
  "19.png", "20.png", "21.jpg", "22.png", "23.jpg", "24.jpg", "25.jpg", "26.png", "27.jpg",
  "28.jpg", "29.png", "30.png",
].map((file) => `/Supply & Services/${file}`);

const partnerLogos: string[] = [
  "image 52.svg", "image 42.svg", "image 43.svg", "image 49.svg", "image 45.svg",
  "image 33.svg", "image 48.svg", "image 44.svg", "image 51.svg", "image 53.svg",
  "image 54.svg", "image 55.svg", "image 56.svg", "image 57.svg",
].map((file) => `/logos/${file}`);

const allLogos: string[] = [...partnerLogos, ...supplyLogos];

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Collapsed: 3 rows on desktop (6 columns), 4 rows on smaller screens (3 columns).
const DESKTOP_VISIBLE = 18;
const MOBILE_VISIBLE = 12;

export default function TrustedBy({ includePartnerLogos = false }: { includePartnerLogos?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const source = includePartnerLogos ? allLogos : supplyLogos;
  const [logos, setLogos] = useState<string[]>(source);

  // Shuffle after mount (not during render) so server and client markup match.
  useEffect(() => {
    setLogos(shuffle(source));
  }, [source]);

  return (
    <div>
      {/* Logos */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-6">
        {logos.map((src, index) => {
          let visibility = "flex";
          if (!expanded) {
            if (index >= DESKTOP_VISIBLE) visibility = "hidden";
            else if (index >= MOBILE_VISIBLE) visibility = "hidden lg:flex";
          }

          return (
            <div
              key={src}
              className={`${visibility} h-20 items-center justify-center rounded-xl border border-gray-200 bg-white p-2 transition-shadow duration-200 hover:shadow-md sm:h-28 sm:p-4`}
            >
              <Image
                src={src}
                alt={`Partner logo ${index + 1}`}
                width={160}
                height={80}
                className="h-auto max-h-full w-auto max-w-full object-contain"
              />
            </div>
          );
        })}
      </div>

      {/* View more / less */}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className={`inline-flex items-center gap-2 rounded-xl bg-[#1B4F8C] px-7 py-3 text-white shadow-lg shadow-blue-900/20 transition duration-300 hover:bg-[#163D70] ${
            expanded ? "" : "animate-bounce hover:animate-none"
          }`}
        >
          {expanded ? "View Less" : "View More"}
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>
    </div>
  );
}
