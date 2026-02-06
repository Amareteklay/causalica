import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-2">
            <div className="text-sm font-semibold">Causalica</div>
            <p className="text-sm text-slate-600">
              Practical causal inference — a modern hub for learning and applying causal thinking.
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="font-semibold">Explore</div>
            <div className="flex flex-col gap-1">
              <Link className="text-slate-600 hover:text-slate-900" href="/start">
                Start here
              </Link>
              <Link className="text-slate-600 hover:text-slate-900" href="/tools">
                Tools
              </Link>
              <Link className="text-slate-600 hover:text-slate-900" href="/about">
                About
              </Link>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="font-semibold">Textbook</div>
            <div className="flex flex-col gap-1">
              <a className="text-slate-600 hover:text-slate-900" href="https://textbook.causalica.com">
                Go to textbook
              </a>
              <a className="text-slate-600 hover:text-slate-900" href="https://textbook.causalica.com">
                Foundations
              </a>
              <a className="text-slate-600 hover:text-slate-900" href="https://textbook.causalica.com">
                Applied methods
              </a>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="font-semibold">Contact</div>
            <div className="flex flex-col gap-1">
              <Link className="text-slate-600 hover:text-slate-900" href="/contact">
                Contact page
              </Link>
              {/* Add real links later */}
              <a className="text-slate-600 hover:text-slate-900" href="#">
                GitHub (soon)
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Causalica</div>
          <div className="flex gap-4">
            <Link className="hover:text-slate-700" href="/about">
              About
            </Link>
            <Link className="hover:text-slate-700" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
