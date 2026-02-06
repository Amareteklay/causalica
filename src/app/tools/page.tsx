import { PageShell } from "@/components/PageShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const sections = [
  {
    title: "Templates",
    items: ["Study checklist (coming soon)", "Reproducible project skeleton (coming soon)"],
  },
  {
    title: "Diagnostics",
    items: ["Assumption checklist (coming soon)", "Common failure modes (coming soon)"],
  },
  {
    title: "Visualization",
    items: ["DAG patterns (coming soon)", "Interpretation helpers (coming soon)"],
  },
];

export default function ToolsPage() {
  return (
    <PageShell
      title="Tools"
      subtitle="Curated templates and checklists for doing causal work the careful way. We’ll fill this in as we ship."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {sections.map((s) => (
          <Card key={s.title}>
            <CardHeader>
              <CardTitle>{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
