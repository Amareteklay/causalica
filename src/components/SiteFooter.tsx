import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <div className="text-sm font-semibold tracking-tight">Causalica</div>
            <p className="text-sm text-muted">
              Practical causal inference — a modern hub for learning and applying causal thinking.
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="font-semibold tracking-tight">Explore</div>
            <div className="flex flex-col gap-1">
              <Link className="text-muted hover:text-ink underline decoration-transparent hover:decoration-border" href="/start">
                Start here
              </Link>
              <Link className="text-muted hover:text-ink underline decoration-transparent hover:decoration-border" href="/tools">
                Tools
              </Link>
              <Link className="text-muted hover:text-ink underline decoration-transparent hover:decoration-border" href="/about">
                About
              </Link>
              <Link className="text-muted hover:text-ink underline decoration-transparent hover:decoration-border" href="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="font-semibold tracking-tight">Textbook</div>
            <div className="flex flex-col gap-1">
              <a className="text-muted hover:text-ink underline decoration-transparent hover:decoration-border" href="https://textbook.causalica.com">
                Open textbook
              </a>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="font-semibold tracking-tight">Status</div>
            <p className="text-muted">
              Building in public. Shipping site + tooling milestones alongside the textbook.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Causalica</div>
          <div className="flex gap-4">
            <Link className="hover:text-ink underline decoration-transparent hover:decoration-border" href="/about">
              About
            </Link>
            <Link className="hover:text-ink underline decoration-transparent hover:decoration-border" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
