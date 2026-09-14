import { quickQuestions } from "@/lib/data";

export default function QuickAnswer() {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-neutral-900 sm:text-3xl">
          Quick Answer...
        </h2>

        <div className="mt-10 space-y-4">
          {quickQuestions.map((q) => (
            <div
              key={q}
              className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange text-sm font-extrabold text-white">
                ?
              </span>
              <p className="pt-0.5 text-sm text-neutral-700 sm:text-base">{q}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
