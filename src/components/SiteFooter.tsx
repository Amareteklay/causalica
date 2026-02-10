import Link from "next/link";

export function SiteFooter() {
  const linkBase =
    "text-muted underline decoration-transparent underline-offset-4 transition " +
    "hover:text-brand hover:decoration-brand/30";

  return (
    <footer className="border-t border-border bg-paper bg-gradient-to-r from-brand/0 via-brand/25 to-brand/0">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <div className="text-sm font-semibold tracking-tight text-brandDark">Causalica</div>
            <p className="text-sm text-muted">
              Practical causal inference — a modern hub for learning and applying causal thinking.
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="font-semibold tracking-tight text-ink">Explore</div>
            <div className="flex flex-col gap-1">
              <Link className={linkBase} href="/start">
                Start here
              </Link>
              <Link className={linkBase} href="/tools">
                Tools
              </Link>
              <Link className={linkBase} href="/about">
                About
              </Link>
              <Link className={linkBase} href="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="font-semibold tracking-tight text-ink">Textbook</div>
            <div className="flex flex-col gap-1">
              <a className={linkBase} href="https://textbook.causalica.com">
                Open textbook
              </a>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="font-semibold tracking-tight text-ink">Status</div>
            <p className="text-muted">
              Building in public. Shipping site + tooling milestones alongside the textbook.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-brand/15 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Causalica</div>

          <div className="flex gap-4">
            <Link className={linkBase} href="/about">
              About
            </Link>
            <Link className={linkBase} href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
