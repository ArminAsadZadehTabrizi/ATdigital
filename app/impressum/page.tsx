import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="max-w-3xl mx-auto py-24 px-6 space-y-6 text-foreground">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground transition-colors mb-4"
      >
        <span aria-hidden="true">&larr;</span> Zurück zur Startseite
      </Link>
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>

      <section className="space-y-1">
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Angaben gemäß § 5 TMG:
        </h2>
        <p>Armin Tabrizi</p>
        <p>Gurlittstraße 18</p>
        <p>40223 Düsseldorf</p>
      </section>

      <section className="space-y-1">
        <h2 className="text-2xl font-semibold mt-10 mb-4">Kontakt:</h2>
        <p>Telefon: 0177 612 4793</p>
        <p>
          E-Mail:{" "}
          <a
            href="mailto:Armin.Tabrizi@atdigital-design.de"
            className="underline hover:text-primary transition-colors"
          >
            Armin.Tabrizi@atdigital-design.de
          </a>
        </p>
      </section>

      <section className="space-y-1">
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Umsatzsteuer-ID:
        </h2>
        <p>
          Befindet sich aktuell in Gründung. Als Kleinunternehmer im Sinne von §
          19 Abs. 1 UStG wird keine Umsatzsteuer berechnet.
        </p>
      </section>

      <section className="space-y-1">
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        </h2>
        <p>Armin Tabrizi</p>
        <p>Gurlittstraße 18</p>
        <p>40223 Düsseldorf</p>
      </section>
    </main>
  );
}
