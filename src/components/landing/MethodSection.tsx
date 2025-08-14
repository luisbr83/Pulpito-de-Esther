import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SelectionIcon } from "../icons/SelectionIcon";
import { PurificationIcon } from "../icons/PurificationIcon";
import { AnointingIcon } from "../icons/AnointingIcon";
import { DeliveryIcon } from "../icons/DeliveryIcon";

const phases = [
  {
    icon: SelectionIcon,
    title: "Fase 1: Selección",
    description: "Descubre y afirma tu llamado único. Entenderás por qué Dios te eligió a ti para este tiempo específico."
  },
  {
    icon: PurificationIcon,
    title: "Fase 2: Purificación",
    description: "Libérate del miedo, la duda y el síndrome del impostor. Sanaremos heridas para que prediques desde un lugar de plenitud."
  },
  {
    icon: AnointingIcon,
    title: "Fase 3: Unción",
    description: "Aprende a conectar con el Espíritu Santo para recibir revelación fresca y sermones que brotan del corazón de Dios."
  },
  {
    icon: DeliveryIcon,
    title: "Fase 4: Entrega",
    description: "Domina técnicas prácticas de comunicación y estructura de sermones para entregar el mensaje con poder, claridad y autoridad."
  }
]

export default function MethodSection() {
  return (
    <section id="method" className="pt-12 md:pt-20 lg:pt-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Tu Plan de Ascenso al Púlpito: El Método Esther</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Te presentamos las 4 fases del plan estratégico que te llevarán de sentir el llamado a vivirlo con plenitud y autoridad divina.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <Card key={index} className="text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 rounded-full p-4 mb-4">
                  <phase.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl text-primary">{phase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{phase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
