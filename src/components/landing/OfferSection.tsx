import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Check, AlertTriangle, ShieldCheck, Lock } from 'lucide-react';

export default function OfferSection() {
    return (
        <section id="offer" className="py-12 md:py-20 lg:py-24 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">¿Cuál es el Precio de Desatar Tu Voz Profética?</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 text-lg">
                        <div className="bg-background/50 p-6 rounded-lg border">
                            <h3 className="font-bold text-muted-foreground">Programas de Mentoría Personalizada:</h3>
                            <p className="text-2xl font-bold text-primary">$100 USD o más</p>
                        </div>
                        <div className="bg-background/50 p-6 rounded-lg border">
                            <h3 className="font-bold text-muted-foreground">Cursos Avanzados de Predicación:</h3>
                            <p className="text-2xl font-bold text-primary">$497 USD como mínimo</p>
                        </div>
                    </div>

                    <Card className="shadow-2xl overflow-hidden border-2 border-accent mt-12">
                        <div className="p-6 md:p-8 flex flex-col items-center">
                            <p className="text-sm font-semibold uppercase tracking-wider text-primary">OFERTA EXCLUSIVA PARA MUJERES DE FE</p>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                                Por eso, te ofrezco acceso completo al <span className="font-bold text-primary">MÉTODO ESTHER</span>, Tu Plan de Ascenso al Púlpito, por el precio especial de lanzamiento de:
                            </p>
                            
                            <div className="my-6">
                                <p className="text-lg text-muted-foreground line-through">Precio Normal: US$ 97.00</p>
                                <p className="text-5xl md:text-6xl font-bold text-primary">Solo US$ 7.00</p>
                            </div>

                            <Button asChild size="lg" className="w-full max-w-md text-xl h-auto py-4" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                                <a href="https://pay.hotmart.com/Q101290557Q">¡SÍ, QUIERO MI ACCESO AHORA!</a>
                            </Button>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 w-full max-w-3xl text-sm text-primary text-center">
                                <div className="flex flex-col items-center gap-2">
                                    <Check className="h-6 w-6 text-green-600" />
                                    <span>Acceso Inmediato al Área de Miembros</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <ShieldCheck className="h-6 w-6 text-green-600" />
                                    <span>Garantía de Satisfacción Total por 7 Días</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 sm:col-span-1">
                                    <Lock className="h-6 w-6 text-green-600" />
                                    <span>Proceso de Pago 100% Seguro</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-yellow-100/50 border-t border-yellow-200 p-4">
                            <div className="flex items-center justify-center text-yellow-900">
                                <AlertTriangle className="h-5 w-5 mr-3 shrink-0" />
                                <p className="font-semibold text-center">
                                    <span className="font-bold">PRECIO PROMOCIONAL LIMITADO:</span> Esta oferta especial de $7.00 es por tiempo limitado. ¡No pierdas esta oportunidad de transformar tu ministerio!
                                </p>
                            </div>
                        </div>
                    </Card>

                    <p className="text-muted-foreground mt-8 text-lg">
                        Es menos de lo que gastas en un almuerzo, pero puede cambiar tu ministerio para siempre.
                    </p>
                </div>
            </div>
        </section>
    );
}
