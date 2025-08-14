import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="font-headline text-xl font-bold text-primary">
          Púlpito de Esther
        </a>
        <Button asChild style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
          <a href="#offer">¡ACTIVA TU ACCESO AHORA!</a>
        </Button>
      </div>
    </header>
  );
}
