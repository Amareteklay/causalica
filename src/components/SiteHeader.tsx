import Link from "next/link";

const nav = [
  { href: "/start", label: "Start here" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            C
          </span>
          <span>Causalica</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://textbook.causalica.com"
            className="ml-2 rounded-xl bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Textbook
          </a>
        </nav>

        {/* Mobile: keep it simple for Milestone 1 */}
        <a
          href="https://textbook.causalica.com"
          className="md:hidden rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
        >
          Textbook
        </a>
      </div>
    </header>
  );
}
