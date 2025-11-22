import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col items-start space-y-8 text-left">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              Jetzt verfügbar für iOS
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl">
              Finde den <span className="text-primary">Spion</span> unter deinen Freunden
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Das ultimative Wort-Ratespiel für jede Party.
              Spannung, Spaß und Täuschung garantiert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="rounded-full text-lg px-8 h-14 shadow-xl shadow-primary/20">
                <a href="https://apps.apple.com/de/app/spion/id6636494657" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  App Laden
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8 h-14">
                <a href="/#features">
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
              <div className="flex -space-x-2">
                {['M', 'L', 'K', 'J'].map((letter, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[10px] font-bold">
                    {letter}
                  </div>
                ))}
              </div>
              <p>Von vielen Freundesgruppen empfohlen</p>
            </div>
          </div>

          <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-[300px] lg:max-w-[340px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-[#2ED158]/30 rounded-[3rem] blur-3xl -z-10 transform rotate-6 scale-110 opacity-60 dark:opacity-40"></div>
            <div className="relative rounded-[2.5rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/10">
              <Image
                src="/screenshot-light.png"
                alt="Spion App Gameplay Light"
                width={400}
                height={866}
                className="w-full h-auto block dark:hidden"
                priority
              />
              <Image
                src="/screenshot-dark.png"
                alt="Spion App Gameplay Dark"
                width={400}
                height={866}
                className="w-full h-auto hidden dark:block"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[100px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#2ED158]/20 blur-[80px]"></div>
      </div>
    </section>
  );
}
