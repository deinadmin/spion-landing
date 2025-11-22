import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Carl Steen. Alle Rechte vorbehalten.
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/datenschutz" className="hover:underline">
            Datenschutz
          </Link>
          <Link href="/kontakt" className="hover:underline">
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
}
