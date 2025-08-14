import { Zap } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="py-12 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Zap className="h-12 w-12 mx-auto" />
          <h2 className="text-2xl md:text-3xl font-bold font-headline">
            ¿Sientes el llamado, pero te sientes invisible? No estás sola.
          </h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline text-accent tracking-tighter">
            82%
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80">
            de las mujeres cristianas sienten un llamado al ministerio, pero la abrumadora mayoría, un alarmante 93%, nunca da el paso por miedo, falta de preparación o por no sentirse dignas.
          </p>
          <p className="text-lg md:text-xl font-semibold">
            El Método Esther es el <span className="text-accent">MAPA ESTRATÉGICO</span> que te guiará del anonimato al púlpito.
          </p>
        </div>
      </div>
    </section>
  );
}
