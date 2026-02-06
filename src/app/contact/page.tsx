import { PageShell } from "@/components/PageShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      subtitle="For collaboration, questions, or consulting inquiries."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Email</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              Add your preferred contact email here.
            </p>
            <p className="mt-4">
              <a
                className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                href="mailto:hello@causalica.com"
              >
                hello@causalica.com
              </a>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Links</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              Add GitHub / socials when ready.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#">
                  GitHub (soon)
                </a>
              </li>
              <li>
                <a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500" href="#">
                  X / Twitter (soon)
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
