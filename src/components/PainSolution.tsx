import { services } from "@/lib/data";
import { ServiceCardCompact } from "./ServiceCard";
import PaymentIcons from "./PaymentIcons";

export default function PainSolution() {
  return (
    <section id="estimate" className="bg-gradient-to-b from-[#0B6CF2] to-[#0A4FC4] py-16">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <p className="text-lg text-white sm:text-xl">
          If you answered <span className="font-extrabold">YES</span> to any
          of these questions... I have good news: I can help you with
          practical, fast, and high-quality solutions in remodeling and
          maintenance, focusing on:
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCardCompact key={service.slug} service={service} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-sm text-blue-100 sm:text-base">
          I work with commitment, meet deadlines, and deliver high-quality
          finishes. Estimates provided directly by email.
        </p>

        <a href="#contact" className="btn-yellow mt-6">
          Free Estimate
        </a>

        <div className="mt-5 flex justify-center">
          <PaymentIcons />
        </div>
      </div>
    </section>
  );
}
