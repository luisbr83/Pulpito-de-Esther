import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "¿Qué son los 3 módulos transformadores?",
        answer: "El Método Esther se divide en tres módulos principales: 1) Identidad y Llamado: Para afirmar quién eres en Dios. 2) Sanidad y Unción: Para liberarte del pasado y conectar con el Espíritu Santo. 3) Estructura y Entrega: Para aprender las herramientas prácticas de la predicación efectiva."
    },
    {
        question: "¿Necesito experiencia previa o estudios teológicos?",
        answer: "Absolutamente no. El Método Esther está diseñado específicamente para mujeres que sienten el llamado pero no saben por dónde empezar. Te llevamos de la mano desde cero hasta el púlpito, sin necesidad de estudios formales previos."
    },
    {
        question: "¿Cómo accedo al contenido?",
        answer: "Una vez que realizas el pago, recibirás acceso inmediato a nuestra plataforma en línea. Puedes acceder al contenido 24/7 desde cualquier dispositivo con conexión a internet: tu computadora, tablet o celular."
    },
    {
        question: "¿Qué pasa si el método no funciona para mí?",
        answer: "¡Tu inversión está 100% protegida! Tienes una garantía de satisfacción total de 7 días. Si sientes que el método no es para ti, simplemente nos contactas y te devolvemos el 100% de tu dinero, sin preguntas."
    },
    {
        question: "¿Por qué el precio es tan bajo?",
        answer: "Nuestro principal objetivo es equipar a la mayor cantidad de mujeres posible para que cumplan su llamado. Este precio promocional es una oferta de lanzamiento por tiempo limitado para hacerlo accesible a todas. El precio subirá pronto."
    }
]

export default function FaqSection() {
    return (
        <section id="faq" className="py-12 md:py-20 lg:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center space-y-4 mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Preguntas Frecuentes</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Aclarando tus dudas para que puedas dar el paso con total confianza.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                             <AccordionItem value={`item-${index+1}`} key={index}>
                                <AccordionTrigger className="text-left font-semibold text-lg">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base">
                                   {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
