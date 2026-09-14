import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center">
        <Logo light />
        <p className="text-xs text-neutral-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
