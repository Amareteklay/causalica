"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";


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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = useMemo(() => {
    return (href: string) => pathname === href || (href !== "/" && pathname?.startsWith(href + "/"));
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <Image
            src="/logo.svg"
            alt="Causalica"
            width={34}
            height={34}
            priority
            className="shrink-0"
          />
          <span className="tracking-tight">Causalica</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cx(
                "rounded-xl px-3 py-2 text-sm font-medium transition",
                isActive(item.href)
                  ? "bg-mist text-ink"
                  : "text-muted hover:bg-mist hover:text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://textbook.causalica.com"
            className="ml-2 rounded-xl bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-soft hover:translate-y-[-1px] hover:shadow-md active:translate-y-0"
          >
            Textbook
          </a>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://textbook.causalica.com"
            className="rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium text-ink hover:bg-mist"
          >
            Textbook
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium text-ink hover:bg-mist"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-paper">
          <nav className="mx-auto max-w-6xl px-6 py-3">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "rounded-xl px-3 py-2 text-sm font-medium transition",
                    isActive(item.href)
                      ? "bg-mist text-ink"
                      : "text-muted hover:bg-mist hover:text-ink"
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
