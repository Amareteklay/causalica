import { PageShell } from "@/components/PageShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

const tracks = [
  {
    title: "Track A: Fundamentals",
    desc: "Build intuition: causality, counterfactuals, DAGs, identification.",
  },
  {
    title: "Track B: Applied methods",
    desc: "DiD, IV, matching, synthetic controls, and sensitivity checks.",
  },
  {
    title: "Track C: Practice & workflow",
    desc: "Diagnostics, assumptions, robustness, and reproducible analysis.",
  },
];

export default function StartPage() {
  return (
    <PageShell
      title="Start here"
      subtitle="A structured way to learn causal inference: intuition → identification → implementation."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {tracks.map((t) => (
          <Card key={t.title}>
            <CardHeader>
              <CardTitle>{t.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">{t.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="https://textbook.causalica.com" variant="primary">
          Open the textbook
        </ButtonLink>
        <ButtonLink href="/tools" variant="secondary">
          Browse tools
        </ButtonLink>
      </div>
    </PageShell>
  );
}
