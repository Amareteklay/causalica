"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const nav = [
  { href: "/start", label: "Start here" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = useMemo(() => {
    return (href: string) => pathname === href || (href !== "/" && pathname?.startsWith(href + "/"));
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            C
          </span>
          <span>Causalica</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cx(
                "rounded-xl px-3 py-2 text-sm font-medium transition",
                isActive(item.href)
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              )}
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

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://textbook.causalica.com"
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Textbook
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="mx-auto max-w-6xl px-6 py-3">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "rounded-xl px-3 py-2 text-sm font-medium transition",
                    isActive(item.href)
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
