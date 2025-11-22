"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Search, ArrowLeft } from "lucide-react";

const quotes = [
  "Diese Seite ist so geheim, dass selbst wir sie nicht finden können.",
  "Ein Spion hat diese Seite wohl verschwinden lassen.",
  "404: Der Spion war schneller als du.",
  "Hier gibt es nichts zu sehen. Bitte gehen Sie weiter!",
  "Mission fehlgeschlagen: Zielort unbekannt."
];

export default function NotFound() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center pt-32 pb-20">
      <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-8 animate-pulse">
        <Search className="w-12 h-12 text-muted-foreground" />
      </div>

      <h1 className="text-9xl font-extrabold tracking-tighter text-primary/20 select-none">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">
        Seite nicht gefunden
      </h2>

      <p className="text-xl text-muted-foreground max-w-md mx-auto mb-12 min-h-[3rem]">
        {quote}
      </p>

      <Button asChild size="lg" className="rounded-full">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Basis
        </Link>
      </Button>
    </div>
  );
}
