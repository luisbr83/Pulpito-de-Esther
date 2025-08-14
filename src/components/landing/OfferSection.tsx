import Image from 'next/image';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Check, Gift, ShieldCheck, Smartphone, Tablet, Monitor } from 'lucide-react';

export default function OfferSection() {
    return (
        <section id="offer" className="py-12 md:py-20 lg:py-24 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <Card className="shadow-2xl overflow-hidden border-2 border-accent">
                        <div className="p-6 md:p-8 flex flex-col items-center text-center">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Acceso completo al Método Esther</p>
                                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mt-2">Tu Plan de Ascenso al Púlpito</h2>
                                <div className="my-6">
                                    <p className="text-lg text-muted-foreground line-through">Precio Normal: US$ 97.00</p>
                                    <p className="text-5xl font-bold text-primary">Solo US$ 7.00</p>
                                    <p className="text-accent font-semibold">¡Oferta por tiempo limitado!</p>
                                </div>
                                <Button asChild size="lg" className="w-full max-w-md text-xl h-14" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                                    <a href="#">¡SÍ, QUIERO MI ACCESO AHORA!</a>
                                </Button>
                                <div className="mt-6 text-sm text-muted-foreground space-y-3 flex flex-col items-center">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="h-5 w-5 text-green-600" />
                                        <span>Garantía de Satisfacción de 7 Días</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-green-600" />
                                        <span>Pago 100% Seguro</span>
                                    </div>
                                     <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            <Monitor className="h-5 w-5 text-green-600" />
                                            <Tablet className="h-5 w-5 text-green-600" />
                                            <Smartphone className="h-5 w-5 text-green-600" />
                                        </div>
                                        <span>Acceso desde cualquier dispositivo</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-center text-muted-foreground/70 mt-4">Si no estás satisfecha, te devolvemos el 100% de tu inversión. Tu información está protegida.</p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}