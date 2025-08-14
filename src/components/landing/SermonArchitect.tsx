'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { createSermon, type SermonArchitectState } from '@/app/actions';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Bot, Plus, Trash2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full" style={{ backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}>
      {pending ? 'Generando...' : 'Generar Borrador de Sermón'}
    </Button>
  );
}

export default function SermonArchitect() {
  const initialState: SermonArchitectState = {};
  const [state, formAction] = useFormState(createSermon, initialState);
  const { toast } = useToast();
  const [benefits, setBenefits] = useState(['']);

  useEffect(() => {
    if (state.error) {
      toast({
        title: 'Error',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast]);
  
  const handleAddBenefit = () => {
    setBenefits([...benefits, '']);
  };

  const handleBenefitChange = (index: number, value: string) => {
    const newBenefits = [...benefits];
    newBenefits[index] = value;
    setBenefits(newBenefits);
  };
  
  const handleRemoveBenefit = (index: number) => {
    if (benefits.length > 1) {
      const newBenefits = benefits.filter((_, i) => i !== index);
      setBenefits(newBenefits);
    }
  };

  return (
    <section id="sermon-architect" className="py-12 md:py-20 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-10">
          <Bot className="h-12 w-12 mx-auto text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Arquitecto de Sermones con IA</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experimenta el poder de la IA para crear la base de tu próximo sermón en minutos. Ingresa tus ideas y deja que la tecnología te ayude a estructurar el mensaje que Dios puso en tu corazón.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-lg">
             <form action={formAction}>
                <CardHeader>
                  <CardTitle>Crea tu Borrador</CardTitle>
                  <CardDescription>Completa los campos para generar tu sermón.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="headline">Título Principal</Label>
                    <Input id="headline" name="headline" placeholder="Ej: Venciendo al gigante interior" required />
                    {state.fieldErrors?.headline && <p className="text-destructive text-sm">{state.fieldErrors.headline}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subheadline">Subtítulo</Label>
                    <Input id="subheadline" name="subheadline" placeholder="Ej: 5 claves para derrotar el miedo" required />
                    {state.fieldErrors?.subheadline && <p className="text-destructive text-sm">{state.fieldErrors.subheadline}</p>}
                  </div>
                  <div className="space-y-2">
                     <Label>Beneficios o Puntos Clave</Label>
                     {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Input
                                name="benefits"
                                value={benefit}
                                onChange={(e) => handleBenefitChange(index, e.target.value)}
                                placeholder={`Beneficio #${index + 1}`}
                                required
                            />
                            <Button type="button" variant="ghost" size="icon" onClick={() => handleRemoveBenefit(index)} disabled={benefits.length <= 1}>
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                     ))}
                     <Button type="button" variant="outline" size="sm" onClick={handleAddBenefit}>
                        <Plus className="h-4 w-4 mr-2" /> Añadir Beneficio
                     </Button>
                     {state.fieldErrors?.benefits && <p className="text-destructive text-sm">{state.fieldErrors.benefits}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="additionalContext">Contexto Adicional (Opcional)</Label>
                    <Textarea id="additionalContext" name="additionalContext" placeholder="Versículos bíblicos clave, historias personales, audiencia específica..." />
                  </div>
                </CardContent>
                <CardFooter>
                  <SubmitButton />
                </CardFooter>
            </form>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Borrador Generado</CardTitle>
              <CardDescription>Aquí aparecerá el borrador de tu sermón.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none h-96 overflow-y-auto bg-white/50 p-4 rounded-md border">
                {state.sermonDraft ? (
                  <pre className="whitespace-pre-wrap font-body text-sm">{state.sermonDraft}</pre>
                ) : (
                  <p className="text-muted-foreground">Tu borrador aparecerá aquí...</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
