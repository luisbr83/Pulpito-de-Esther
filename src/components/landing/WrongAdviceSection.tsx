import { XCircle } from 'lucide-react';

const wrongAdvice = [
    { text: '"Haz un curso de oratoria"', subtext: 'Técnica vacía sin poder espiritual' },
    { text: '"Estudia teología por 5 años"', subtext: 'Demasiado tarde, demasiada teoría' },
    { text: '"Busca mensajes en internet"', subtext: 'Palabras sin alma' },
    { text: '"Practica hasta que te salga"', subtext: 'El camino del trauma, no del llamado' }
];

export default function WrongAdviceSection() {
    return (
        <section id="wrong-advice" className="py-12 md:py-20 lg:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                        Basta de seguir los consejos equivocados:
                    </h2>
                    <div className="space-y-4 text-left">
                        {wrongAdvice.map((item, index) => (
                            <div key={index} className="bg-red-100/50 border-l-4 border-red-400 p-4 rounded-r-lg flex items-center">
                                <XCircle className="h-6 w-6 text-red-500 mr-4 shrink-0" />
                                <div>
                                    <p className="font-semibold text-red-900">{item.text}</p>
                                    <p className="text-red-800/90">– {item.subtext}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-lg text-primary/80">
                        <p>Si estos métodos funcionaran, ya estarías predicando con confianza. La verdad es que necesitas algo más profundo, más espiritual, más <span className="font-bold text-primary">estratégico.</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
