"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-center text-2xl font-extrabold text-neutral-900 sm:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 divide-y divide-neutral-200 rounded-xl border border-neutral-200">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-neutral-900 sm:text-base"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span
                    className={`shrink-0 text-brand-orange transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    ›
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm text-neutral-600">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
