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
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              A professional home for causal inference
            </div>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Causal inference, made practical.
            </h1>

            <p className="text-lg text-slate-600 sm:text-xl">
              Causalica is a modern hub for learning and applying causal thinking — with a
              textbook, tools, and workflows that keep you honest.
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
                  <p className="text-sm text-slate-600">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="border-b border-border bg-gradient-to-b from-mist to-paper">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-8 md:flex-row md:items-center">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold tracking-tight">Follow the learning path</h2>
              <p className="text-sm text-slate-600">
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
