export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
      <span className={light ? "text-white" : "text-neutral-900"}>Pro</span>
      <span className={light ? "text-white/70" : "text-neutral-500"}>
        Builder
      </span>
    </span>
  );
}
