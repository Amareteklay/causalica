import { ReactNode } from "react";

export function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
      </header>

      {children && <section className="mt-10">{children}</section>}
    </main>
  );
}
