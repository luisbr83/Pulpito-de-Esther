'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana López, México",
    initials: "ML",
    testimonial: "'Durante años sentí el llamado, pero el miedo me paralizaba. ¡Con el Método Esther, en solo dos semanas estaba predicando con confianza! Mi pastor no podía creerlo.'"
  },
  {
    name: "Rosa María Gutiérrez, Colombia",
    initials: "RG",
    testimonial: "'Pensaba que necesitaba años de estudio teológico para predicar. Este método me reveló que ya tenía todo lo necesario dentro de mí. ¡Ahora predico cada domingo!'"
  },
  {
    name: "Carmen Rodríguez, España",
    initials: "CR",
    testimonial: "'Mi primera predicación después de aplicar el método fue tan poderosa que varias personas entregaron sus vidas a Cristo. ¡Toda la gloria sea para Dios!'"
  },
  {
    name: "Ana Patricia Silva, Argentina",
    initials: "AS",
    testimonial: "'El módulo sobre cómo dominar los nervios cambió mi vida por completo. Antes temblaba al hablar, ahora predico con autoridad y unción divina.'"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Escucha los Testimonios de Mujeres Transformadas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mujeres como tú que decidieron activar su llamado y hoy están impactando vidas.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                       <Avatar>
                        <AvatarImage src={`https://placehold.co/40x40.png`} alt={item.name} />
                        <AvatarFallback>{item.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base font-semibold">{item.name}</CardTitle>
                         <div className="flex items-center gap-0.5 text-yellow-500">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                         </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-muted-foreground italic">"{item.testimonial}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
