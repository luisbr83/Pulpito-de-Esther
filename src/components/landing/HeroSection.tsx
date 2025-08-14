import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Crea sermones impactantes en 30 minutos, incluso si nunca lo has hecho antes.",
  "Domina el pánico escénico y predica con confianza inquebrantable.",
  "Sé reconocida como una mujer de Dios llena de autoridad e influencia.",
  "Profundiza tu conexión espiritual y experimenta una intimidad real con Dios.",
  "Impacta vidas y transforma entornos con el poder de tu voz ungida."
];

export default function HeroSection() {
  return (
    <section id="hero" className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline tracking-tight text-primary">
              ¿El llamado de Dios te consume, pero el miedo te paraliza? Desbloquea Tu Voz Profética y Predica con Autoridad
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              De Mujer Común a Predicadora Influyente (Sin Años de Estudio). Transforma tu llamado en acción con el Método Esther.
            </p>
          </div>
          <Card className="shadow-2xl rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-0">
               <Image
                  src="https://i.imgur.com/cN757Bi.png"
                  alt="Mujer orando o predicando con confianza"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint="woman praying"
                />
              <div className="p-6">
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                 <div className="flex justify-center mt-6">
                     <Button asChild size="lg" className="text-lg w-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                    <a href="#offer">¡ACTIVA TU ACCESO AHORA!</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
