import { Users, Smartphone, Smile, Zap, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Für Gruppen gemacht",
    description: "Perfekt für 4 bis 12 Spieler. Egal ob kleine Runde oder große Party.",
  },
  {
    icon: Sparkles,
    title: "Apple Intelligence",
    description: "Erstelle eigene Wortsammlungen zu jedem Thema. Dank KI ist der Spielspaß endlos.",
  },
  {
    icon: Smartphone,
    title: "Nur ein Gerät",
    description: "Kein lästiges Einrichten. Ein Handy reicht für die ganze Gruppe.",
  },
  {
    icon: Smile,
    title: "Endloser Spaß",
    description: "Hunderte von Begriffen und Kategorien sorgen für immer neue Runden.",
  },
  {
    icon: Zap,
    title: "Schneller Einstieg",
    description: "Einfache Regeln, die direkt in der App erklärt werden. Sofort loslegen!",
  },
  {
    icon: Shield,
    title: "Keine Werbung",
    description: "Konzentriert euch auf das Spiel, nicht auf nervige Unterbrechungen.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Warum <span className="text-primary">Spion</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Alles was du für einen gelungenen Spieleabend brauchst.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-background rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
