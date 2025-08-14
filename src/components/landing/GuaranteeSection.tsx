import { Card, CardContent } from '../ui/card';
import { CheckCircle, Clock, Shield } from 'lucide-react';

export default function GuaranteeSection() {
    return (
        <section id="guarantee" className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-6">
                    <div className="relative inline-block">
                        <div className="bg-yellow-400 rounded-full p-6">
                            <Shield className="h-12 w-12 text-white" />
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                            GARANTÍA
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                        Garantía Incondicional de 7 Días
                    </h2>

                    <Card className="w-full max-w-3xl shadow-lg border">
                        <CardContent className="p-8 text-left">
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <Clock className="h-6 w-6 text-primary" />
                                <h3 className="text-xl font-bold text-primary tracking-wide">PRUEBA SIN RIESGO</h3>
                            </div>
                            <p className="text-center text-muted-foreground text-lg mb-6">
                                Estoy tan segura de que el <span className="font-bold text-primary">Método Esther</span> transformará tu ministerio, que te doy una garantía total de 7 días.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                                    <span>Si no sientes más confianza para predicar en 7 días...</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                                    <span>Si no superas tus miedos al púlpito en 7 días...</span>
                                </li>
                                 <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                                    <span>Si no ves resultados prácticos en tu predicación en 7 días...</span>
                                </li>
                            </ul>
                            <div className="bg-yellow-100 border border-yellow-200 text-yellow-900 rounded-lg p-4 text-center">
                                <p className="font-bold text-lg">Te devolvemos el 100% de tu dinero, sin preguntas.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
