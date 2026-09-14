import { testimonials } from "@/lib/data";

const avatarColors = ["bg-orange-200", "bg-blue-200", "bg-amber-200", "bg-emerald-200"];

function Stars() {
  return (
    <div className="text-sm text-brand-yellow" aria-label="5 out of 5 stars">
      {"★★★★★"}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center text-2xl font-extrabold text-neutral-900 sm:text-3xl">
          See Some Real Results
          <br className="hidden sm:block" /> from Our Work
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="flex gap-4 rounded-xl border border-neutral-100 bg-neutral-50 p-6"
            >
              <div
                className={`h-10 w-10 shrink-0 rounded-full ${avatarColors[i % avatarColors.length]}`}
                aria-hidden
              />
              <div>
                <h3 className="font-bold text-neutral-900">{t.title}</h3>
                <Stars />
                <p className="mt-2 text-sm text-neutral-600">{t.quote}</p>
                <p className="mt-3 text-xs font-semibold text-neutral-500">
                  {t.name} <span className="font-normal">— {t.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
