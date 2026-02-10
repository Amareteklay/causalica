import { ButtonLink } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const pillars = [
  { title: "Foundations", desc: "Assumptions, causal graphs, identification, estimation." },
  { title: "Applied workflows", desc: "DiD, IV, matching, synthetic controls, and more." },
  { title: "Tooling", desc: "Templates, checklists, and sanity checks you’ll reuse." },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-mist to-paper">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {/* Brand glow */}
          <div className="absolute -top-24 left-1/2 h-72 w-[900px] -translate-x-1/2 rounded-full bg-brand/14 blur-3xl" />
          {/* Secondary subtle glow (optional, adds depth without noise) */}
          <div className="absolute -top-12 left-1/3 h-56 w-56 rounded-full bg-brand2/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted">
              <span className="h-2 w-2 rounded-full bg-brand" />
              A professional home for causal inference
            </div>

            <h1 className="font-[var(--font-serif)] text-4xl font-semibold tracking-tight sm:text-6xl">
              Causal inference, made practical.
            </h1>

            <p className="text-lg text-muted sm:text-xl">
              Causalica is a modern hub for learning and applying causal thinking — with a textbook,
              tools, and workflows that keep you honest.
            </p>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href="https://textbook.causalica.com" variant="primary" size="lg">
                Read the textbook
              </ButtonLink>
              <ButtonLink href="/start" variant="secondary" size="lg">
                Start here
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <Card key={p.title}>
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="border-t border-border bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 shadow-soft md:flex-row md:items-center">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold tracking-tight text-ink">Follow the learning path</h2>
              <p className="text-sm text-muted">
                A structured way to go from intuition → identification → implementation.
              </p>
            </div>

            <ButtonLink href="/start" variant="primary">
              Go to Start here
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
