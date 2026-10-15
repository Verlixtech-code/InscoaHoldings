"use client";

import type { GalleryItem } from "@/data/divisions";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface ProjectGalleryProps {
  items: GalleryItem[];
  heading?: string;
}

/**
 * Bento-style gallery. On desktop the layout repeats every 4 items:
 *   row 1 → [   wide   ][ narrow ]
 *   row 2 → [ narrow ][   wide   ]
 * On mobile every card is full width.
 */
const SPAN_PATTERN = [
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
];

const SEE_MORE =
  "inline-flex items-center gap-1 rounded-full border border-white/80 px-3 py-1 text-[11px] text-white transition-colors hover:bg-white hover:text-[#1B4F8C]";

/** Cover image first, then the project's extra photos (no duplicates). */
function photosOf(item: GalleryItem): string[] {
  return Array.from(new Set([item.image, ...(item.images ?? [])]));
}

export default function ProjectGallery({
  items,
  heading = "Project Gallery",
}: ProjectGalleryProps) {
  if (!items.length) return null;

  return (
    <div>
      <h3 className="text-center font-Headings text-2xl font-semibold text-gray-900 sm:text-3xl">
        {heading}
      </h3>

      <GalleryGrid items={items} />
    </div>
  );
}

function GalleryGrid({ items }: { items: GalleryItem[] }) {
  // Which project's popup is open (null = closed)
  const [openProject, setOpenProject] = useState<number | null>(null);

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
        {items.map((item, i) => {
          const count = photosOf(item).length;
          return (
            <article
              key={`${item.title}-${i}`}
              className={`group relative h-72 overflow-hidden rounded-2xl bg-gray-200 sm:h-80 md:h-[340px] lg:h-[420px] ${SPAN_PATTERN[i % 4]}`}
            >
              <Image
                src={item.image}
                alt={item.alt ?? item.title}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* dark fade so the white text stays readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {count > 1 && (
                <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] text-white backdrop-blur-sm">
                  {count} photos
                </span>
              )}

              <div className="absolute bottom-0 left-0 p-4 md:p-5">
                <h4 className="mb-2 max-w-xs text-sm font-medium leading-snug text-white md:text-[15px]">
                  {item.title}
                </h4>

                {item.href ? (
                  <Link href={item.href} className={SEE_MORE}>
                    See More <ArrowRight size={12} />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => setOpenProject(i)}
                    className={SEE_MORE}
                  >
                    See More <ArrowRight size={12} />
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {openProject !== null && (
        <ProjectViewer
          key={openProject}
          item={items[openProject]}
          onClose={() => setOpenProject(null)}
        />
      )}
    </>
  );
}

/**
 * Popup that rolls through the photos of ONE project only.
 * Sits under the navbar (navbar is z-50, this is z-40) so the menu stays visible.
 */
function ProjectViewer({
  item,
  onClose,
}: {
  item: GalleryItem;
  onClose: () => void;
}) {
  const photos = useMemo(() => photosOf(item), [item]);
  const [index, setIndex] = useState(0);
  // Real width/height ratio of each photo, measured when it loads
  const [ratios, setRatios] = useState<Record<string, number>>({});
  const ratio = ratios[photos[index]] ?? 4 / 3;
  const touchStartX = useRef<number | null>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const many = photos.length > 1;

  const step = useCallback(
    (dir: number) =>
      setIndex((i) => (i + dir + photos.length) % photos.length),
    [photos.length],
  );

  // Esc / arrow keys, and stop the page scrolling while the popup is open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, step]);

  // Keep the selected thumbnail in view
  useEffect(() => {
    thumbRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [index]);

  const arrowClass =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/80 bg-[#1B2A5C]/90 text-white shadow-lg transition hover:bg-[#1B4F8C] sm:h-12 sm:w-12";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (many && Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
        touchStartX.current = null;
      }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/60 px-4 pb-6 pt-24 backdrop-blur-md"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-24 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25"
      >
        <X size={20} />
      </button>

      {/* Main photo with arrows beside it */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-3 sm:gap-10"
      >
        {many && (
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous photo"
            className={arrowClass}
          >
            <ChevronLeft size={22} strokeWidth={1.5} />
          </button>
        )}

        {/* Box takes the photo's own shape, so the whole photo shows (no cropping) */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          style={{
            aspectRatio: ratio,
            width: `min(76vw, 1100px, calc(min(66vh, 700px) * ${ratio}))`,
          }}
        >
          <Image
            key={photos[index]}
            src={photos[index]}
            alt={`${item.alt ?? item.title} – photo ${index + 1}`}
            fill
            sizes="(min-width: 640px) 1100px, 76vw"
            className="object-contain"
            onLoad={(e) => {
              const img = e.currentTarget;
              if (img.naturalWidth && img.naturalHeight) {
                const r = img.naturalWidth / img.naturalHeight;
                setRatios((prev) =>
                  prev[photos[index]] === r
                    ? prev
                    : { ...prev, [photos[index]]: r },
                );
              }
            }}
          />
        </div>

        {many && (
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next photo"
            className={arrowClass}
          >
            <ChevronRight size={22} strokeWidth={1.5} />
          </button>
        )}
      </div>

      {/* Thumbnails of this project's photos */}
      {many && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="mt-5 flex max-w-full gap-3 overflow-x-auto px-1 py-1 [scrollbar-width:none] sm:max-w-[820px]"
        >
          {photos.map((src, i) => (
            <button
              key={src}
              ref={(el) => {
                thumbRefs.current[i] = el;
              }}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === index}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-none border-2 transition sm:h-24 sm:w-24 ${
                i === index
                  ? "border-white"
                  : "border-transparent hover:border-white/50"
              }`}
            >
              <Image src={src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
