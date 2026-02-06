export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-slate-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Causalica
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Causal inference, made practical.
          </h1>

          <p className="max-w-2xl text-lg text-slate-600">
            Notes, tools, and explanations for modern causal reasoning — from fundamentals to applied workflows.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://textbook.causalica.com"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Read the textbook
            </a>
            <a
              href="/about"
              className="rounded-xl border px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              About Causalica
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            { title: "Foundations", desc: "Core concepts, assumptions, and causal graphs." },
            { title: "Applied workflows", desc: "DiD, IV, matching, synthetic controls, and more." },
            { title: "Tooling", desc: "Reusable templates, code patterns, and sanity checks." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border p-6 shadow-sm">
              <h2 className="text-lg font-semibold">{c.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>

        <footer className="mt-20 border-t pt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Causalica
        </footer>
      </div>
    </main>
  );
}
