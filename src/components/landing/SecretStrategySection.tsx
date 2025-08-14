import { XCircle } from 'lucide-react';

const wrongPaths = [
    { text: '"Inscríbete en un curso de oratoria"', subtext: 'Técnicas vacías sin el poder del Espíritu Santo.' },
    { text: '"Estudia teología durante 5 años"', subtext: 'Demasiada teoría y una eternidad de espera.' },
    { text: '"Busca sermones prefabricados en internet"', subtext: 'Palabras sin la chispa de tu alma.' },
    { text: '"Practica hasta que lo logres"', subtext: 'Un camino lleno de traumas y frustración, no de unción.' }
];

export default function SecretStrategySection() {
    return (
        <section id="secret-strategy" className="pt-12 pb-12 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <p className="text-xl text-primary font-semibold">Tu obstáculo no es la falta de unción divina.</p>
                    <p className="text-xl text-primary font-semibold">No se trata de una fe débil.</p>
                    <p className="text-2xl md:text-3xl font-bold font-headline text-primary">
                        El verdadero problema es que te ha faltado el <span className="text-accent">MAPA ESTRATÉGICO</span> probado para navegar este camino.
                    </p>
                    <p className="text-lg text-muted-foreground">
                        Mientras otras mujeres se alzan con confianza en el púlpito, tú sigues posponiendo, esperando ese "momento perfecto" que nunca llega. Pero no es porque ellas tengan un don superior... es porque ellas han descubierto la <span className="font-bold text-primary">ESTRATEGIA SECRETA</span> que tú aún ignoras.
                    </p>
                    <h3 className="text-2xl font-bold font-headline text-primary pt-8">Deja de seguir caminos que no te llevan a ningún lado:</h3>
                    <div className="space-y-4 text-left">
                        {wrongPaths.map((item, index) => (
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
                        <p>Si estos métodos dieran resultados, ya estarías desatando tu poder en el púlpito. La verdad es que necesitas una revelación más profunda, una conexión más espiritual, una estrategia más <span className="font-bold text-primary">efectiva.</span></p>
                    </div>
                    <p className="text-xl font-bold text-primary">
                        Necesitas el método ancestral revelado en la Biblia.
                    </p>
                    <div className="pt-8">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                            El Secreto Milenario Revelado: <br/>El Plan de Ascenso de la Reina Ester
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Cuando Ester fue llamada a liberar a su pueblo, no se lanzó al vacío sin preparación. Ella siguió un plan divino de 4 fases que la catapultó de una joven ordinaria a una líder influyente que cambió el curso de la historia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
