import Image from 'next/image';
import { Check, Gift } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const features = [
    "Una estructura clara para crear mensajes con fluidez e impacto.",
    "Consejos para conectar cada punto del sermón con la Palabra de Dios.",
    "Métodos para mantener la atención de la iglesia de principio a fin.",
    "Ejemplos y modelos listos para que los adaptes y uses de inmediato.",
    "Estrategias para que nunca más te bloquees al preparar una predicación."
];

export default function BonusSection() {
    return (
        <section id="bonus" className="py-12 md:py-20 lg:py-24 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-4 mb-10">
                    <div className="inline-block bg-accent/10 text-accent p-3 rounded-full">
                        <Gift className="h-8 w-8" />
                    </div>
                    <p className="text-accent font-semibold uppercase tracking-wider">Bono Exclusivo</p>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Guía de Preparación de Sermones</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
                    <div className="space-y-6">
                        <p className="text-lg text-muted-foreground">
                            Imagina que, además del Método Esther, tengas en tus manos una guía práctica y espiritual que te muestre paso a paso cómo preparar sermones impactantes que toquen profundamente el corazón de tu audiencia.
                        </p>
                        
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-bold text-primary mb-4 text-lg">Lo que encontrarás en esta guía:</h3>
                                <ul className="space-y-3">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 mr-3 mt-1 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        
                        <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                            <p className="font-bold text-primary mb-2 text-lg">💡 ¿Por qué este bono es tan valioso?</p>
                            <p className="text-muted-foreground">
                                Muchas mujeres que reciben el llamado a predicar todavía se sienten inseguras al preparar su contenido, y eso frena todo el proceso. Con esta guía, no solo sabrás qué decir, sino cómo decirlo con unción y claridad.
                            </p>
                        </div>

                        <p className="text-center font-bold text-lg text-primary bg-yellow-100 p-3 rounded-md">
                            Hoy, al activar tu acceso al Método Esther, lo recibes completamente GRATIS.
                        </p>
                    </div>
                     <div className="flex items-center justify-center">
                        <Image
                            src="https://i.imgur.com/0J72exD.png"
                            alt="Guía de Preparación de Sermones"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                            data-ai-hint="book guide"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
