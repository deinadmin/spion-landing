
export default function DatenschutzPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-12">Datenschutz</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">1. Datenschutzerklärung</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              Wir freuen uns über Ihr Interesse an unserer App "Spion". Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachfolgend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">2. Verantwortliche Stelle</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              Verantwortlich für die Datenverarbeitung ist: Carl Steen
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">3. Datenerfassung in der App</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              Unsere App erfasst und speichert grundsätzlich keine personenbezogenen Daten. Alle Spielinformationen werden nur temporär während der Spielsitzung im Arbeitsspeicher Ihres Geräts gespeichert und nach Beendigung der App gelöscht.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">4. Foundation Models</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              Unsere App nutzt das Foundation Models Framework zum Generieren von Sammlungen. Dies unterliegt der Datenschutzbestimmung von Apple.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">5. Analytische Daten</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              Wir verwenden anonyme Analysedaten durch Firebase Analytics, um zu verstehen, wie unsere App genutzt wird (bspw. wie viele Nutzer die App verwenden und welche Funktionen besonders beliebt sind). Diese Daten enthalten keine personenbezogenen Informationen und dienen ausschließlich der Verbesserung der App.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">6. Ihre Rechte</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Da wir keine personenbezogenen Daten speichern, können diese Rechte in diesem Fall nicht ausgeübt werden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
