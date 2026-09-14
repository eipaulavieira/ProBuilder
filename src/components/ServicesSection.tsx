import { services } from "@/lib/data";
import { ServiceCard } from "./ServiceCard";

export default function ServicesSection({ id }: { id?: string }) {
  return (
    <section id={id}>
      <div className="section-heading-banner px-5">
        Transform Your Home
        <br className="hidden sm:block" /> with Services That Impress
      </div>

      <div className="bg-neutral-50 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              highlighted={service.badge === "orange"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
