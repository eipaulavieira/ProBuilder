const REPEATS = 10;

function RibbonStrip({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`h-14 w-full overflow-hidden sm:h-20 md:h-24 ${className}`}>
      <div className="flex h-full w-max animate-marquee items-center">
        {Array.from({ length: REPEATS }).map((_, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt={i === 0 ? alt : ""}
            aria-hidden={i === 0 ? undefined : true}
            draggable={false}
            className="h-full w-auto shrink-0 select-none"
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Decorative ribbon effect meant to float, with a transparent background,
 * straddling the seam between the Hero and the section right after it.
 * Rendered by <Hero /> as an absolutely positioned overlay.
 */
export default function RibbonBanner() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex translate-y-1/2 flex-col"
    >
      <RibbonStrip
        src="/images/EFEITOSUBERIOR.png"
        alt="Drywall, Flooring, Landscaping"
        className="relative z-10 -mb-5 sm:-mb-8 md:-mb-10"
      />
      <RibbonStrip src="/images/EFEITOINFERIRO.png" alt="" className="relative -mt-3 sm:-mt-4" />
    </div>
  );
}
