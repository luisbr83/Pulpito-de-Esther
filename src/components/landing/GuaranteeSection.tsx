import Image from 'next/image';
import { Button } from '../ui/button';
import { ShieldCheck } from 'lucide-react';

export default function GuaranteeSection() {
    return (
        <section id="guarantee" className="py-12 md:py-20 lg:py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="text-center md:text-left space-y-4">
                        <ShieldCheck className="h-12 w-12 mx-auto md:mx-0 text-accent" />
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Sua Satisfação ou Seu Dinheiro de Volta - Risco Zero!</h2>
                        <p className="text-lg text-primary-foreground/80">
                            Temos tanta confiança no poder transformador do Método Esther que oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não sentir que este é o programa certo para você, basta nos enviar um e-mail e nós reembolsaremos 100% do seu investimento. Sem perguntas, sem burocracia.
                        </p>
                        <div className="pt-4">
                            <Button asChild size="lg" className="text-lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                                <a href="#offer">QUERO MEU ACESSO COM GARANTIA</a>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="https://i.imgur.com/g806s22.png"
                            alt="Selo de Garantia de 7 dias"
                            width={350}
                            height={350}
                            className="rounded-full"
                            data-ai-hint="guarantee seal"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
