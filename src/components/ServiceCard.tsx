import Image from "next/image";
import type { Service } from "@/lib/data";

export function ServiceCard({
  service,
  highlighted = false,
}: {
  service: Service;
  highlighted?: boolean;
}) {
  const badgeClasses =
    service.badge === "orange"
      ? "bg-brand-orange text-white"
      : "bg-brand-yellow text-neutral-900";

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg ${
        highlighted ? "sm:-translate-y-2 sm:shadow-lg" : ""
      }`}
    >
      <div className={`py-3 text-center text-lg font-extrabold ${badgeClasses}`}>
        {service.title}
      </div>

      <div className="relative aspect-[16/10] w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 360px, 100vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-6 py-6">
        <ul className="space-y-2 text-sm text-neutral-700">
          {service.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-0.5 text-neutral-900">✔</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <p className="text-sm text-neutral-500">{service.description}</p>

        <a href="#estimate" className="btn-yellow mt-2">
          Free Estimate
        </a>
      </div>
    </div>
  );
}

export function ServiceCardCompact({ service }: { service: Service }) {
  const badgeClasses =
    service.badge === "orange"
      ? "bg-brand-orange text-white"
      : "bg-brand-yellow text-neutral-900";

  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm">
      <div className={`py-3 text-center text-base font-extrabold ${badgeClasses}`}>
        {service.title}
      </div>
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 360px, 100vw"
        />
      </div>
      <div className="px-5 py-5">
        <p className="text-sm text-neutral-600">{service.shortDescription}</p>
      </div>
    </div>
  );
}
