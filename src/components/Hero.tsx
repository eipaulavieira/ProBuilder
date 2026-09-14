import Image from "next/image";
import PaymentIcons from "./PaymentIcons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-gradient-to-b from-[#0B6CF2] to-[#0A4FC4] pb-16 pt-12 sm:pt-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Drywall, Flooring, and Landscaping Solutions to Make Your Home
            the Way You Deserve
          </h1>
          <p className="mt-5 max-w-md text-sm text-blue-100 sm:text-base">
            Put your project in the hands of professionals who work with
            responsibility, care, and commitment.
          </p>

          <a href="#estimate" className="btn-yellow mt-7">
            Free Estimate
          </a>

          <div className="mt-5">
            <PaymentIcons />
          </div>
        </div>

        <div className="relative">
          <button
            aria-label="Play video"
            className="group relative block aspect-[4/3] w-full overflow-hidden shadow-2xl ring-1 ring-white/10"
          >
            <Image
              src="/images/VIDEO-IMG.png"
              alt="Drywall installation in progress"
              fill
              priority
              className="object-cover transition-transform group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 500px, 100vw"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
