import { PageShell } from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell
      title="About"
      subtitle="Causalica is a professional home for practical causal inference — with a textbook, tools, and workflows."
    >
      <div className="max-w-3xl space-y-4 text-slate-700">
        <p>
          The goal is simple: make causal inference easier to learn, easier to apply, and harder to misuse.
        </p>
        <p>
          The main textbook lives at{" "}
          <a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="https://textbook.causalica.com">
            textbook.causalica.com
          </a>
          .
        </p>
      </div>
    </PageShell>
  );
}
