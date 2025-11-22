"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav
        className={cn(
          "flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border border-border/50 shadow-lg supports-[backdrop-filter]:bg-background/75"
            : "bg-transparent border-transparent shadow-none"
        )}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/app-icon.jpg"
              alt="Spion App Icon"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">Spion</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/kontakt" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Kontakt
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild className="rounded-full px-6 font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            <a href="https://apps.apple.com/de/app/spion/id6636494657" target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
