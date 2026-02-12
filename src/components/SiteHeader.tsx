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

  useEffect(() => setOpen(false), [pathname]);

  const isActive = useMemo(() => {
    return (href: string) =>
      pathname === href || (href !== "/" && pathname?.startsWith(href + "/"));
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-4"
          aria-label="Causalica home"
        >
          <Image
            src="/logo.svg"
            alt=""
            width={36}
            height={36}
            priority
            className="shrink-0 relative -top-[1px]"
          />

          <span
            className={cx(
              "text-lg md:text-xl",
              "font-extrabold",
              "tracking-[-0.02em] leading-none",
              "text-ink"
            )}
          >
            Causalica
          </span>

        </Link>
        {/* Desktop */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cx(
                  "relative rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                  "text-muted hover:text-ink",
                  active ? "bg-brand/12" : "hover:bg-brand/8",
                  // underline indicator
                  "after:absolute after:left-3 after:right-3 after:-bottom-[2px] after:h-[3px] after:rounded-full after:bg-brand after:content-['']",
                  "after:origin-left after:transition-transform after:duration-200",
                  active
                    ? "after:scale-x-100 text-ink"
                    : "after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href="https://textbook.causalica.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-xl bg-[rgb(var(--brand))] px-3 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-[rgb(var(--brand-strong))] hover:translate-y-[-1px] hover:shadow-md active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand))]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Textbook
          </a>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className={cx(
              "rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium text-ink transition",
              "hover:bg-brand/6 hover:border-brand/25",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            )}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-paper md:hidden">
          <nav
            id="mobile-nav"
            className="mx-auto max-w-6xl px-6 py-3"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1">
              <a
                href="https://textbook.causalica.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[rgb(var(--brand))] px-3 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-[rgb(var(--brand-strong))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand))]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                Textbook
              </a>

              {nav.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cx(
                      "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-brand/12 text-ink"
                        : "text-muted hover:bg-brand/8 hover:text-ink"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
