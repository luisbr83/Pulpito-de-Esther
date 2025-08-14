
'use server';

import { z } from 'zod';
import { generateSermonDraft, type GenerateSermonDraftInput } from '@/ai/flows/generate-sermon-draft';

const SermonDraftSchema = z.object({
  headline: z.string().min(1, 'El título es obligatorio.'),
  subheadline: z.string().min(1, 'El subtítulo es obligatorio.'),
  benefits: z.array(z.string().min(1, 'El beneficio no puede estar vacío.')).min(1, 'Se requiere al menos un beneficio.'),
  additionalContext: z.string().optional(),
});

export type SermonArchitectState = {
  sermonDraft?: string;
  error?: string | null;
  fieldErrors?: {
    headline?: string[];
    subheadline?: string[];
    benefits?: string[];
    additionalContext?: string[];
  };
};

export async function createSermon(prevState: SermonArchitectState, formData: FormData): Promise<SermonArchitectState> {
  const benefits = formData.getAll('benefits').map(String).filter(b => b.trim() !== '');

  const validatedFields = SermonDraftSchema.safeParse({
    headline: formData.get('headline'),
    subheadline: formData.get('subheadline'),
    benefits: benefits,
    additionalContext: formData.get('additionalContext'),
  });

  if (!validatedFields.success) {
    return {
      error: 'Por favor, revisa los errores en el formulario.',
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateSermonDraft(validatedFields.data as GenerateSermonDraftInput);
    if (result && result.sermonDraft) {
        return { sermonDraft: result.sermonDraft };
    } else {
        return { error: 'La respuesta de la IA no contiene un borrador de sermón.' };
    }
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'Un error desconocido ocurrió.';
    return { error: `Falló la generación del sermón: ${errorMessage}` };
  }
}
