export default function BonusBanner() {
  return (
    <section className="bg-gradient-to-r from-brand-orange to-[#D8460A] py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:text-left">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/15">
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zm0 2h12l1.5 2h-15L6 4zM5 8h14v12H5V8zm5 2v2a2 2 0 0 0 4 0v-2h-2v2a0 0 0 1 1 0 0v-2h-2z" />
          </svg>
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-orange-100">
            Limited-Time Bonus
          </p>
          <h3 className="mt-1 text-lg font-extrabold text-white sm:text-xl">
            Clients who book 2 or more services get a FREE SITE VISIT!
          </h3>
          <p className="mt-1 text-sm text-orange-50">
            <span className="font-semibold">
              80% of our clients combine multiple services on the same project
            </span>{" "}
            (more savings + less hassle)
          </p>
        </div>
      </div>
    </section>
  );
}
