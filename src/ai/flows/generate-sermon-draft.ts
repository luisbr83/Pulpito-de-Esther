'use server';

/**
 * @fileOverview A sermon draft generation AI agent.
 *
 * - generateSermonDraft - A function that generates a sermon draft.
 * - GenerateSermonDraftInput - The input type for the generateSermonDraft function.
 * - GenerateSermonDraftOutput - The return type for the generateSermonDraft function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSermonDraftInputSchema = z.object({
  headline: z.string().describe('The headline of the sermon.'),
  subheadline: z.string().describe('The subheadline of the sermon.'),
  benefits: z.array(z.string()).describe('A list of key benefits of the sermon.'),
  additionalContext: z.string().optional().describe('Any additional context or information to guide the sermon generation.'),
});
export type GenerateSermonDraftInput = z.infer<typeof GenerateSermonDraftInputSchema>;

const GenerateSermonDraftOutputSchema = z.object({
  sermonDraft: z.string().describe('The generated sermon draft.'),
});
export type GenerateSermonDraftOutput = z.infer<typeof GenerateSermonDraftOutputSchema>;

export async function generateSermonDraft(input: GenerateSermonDraftInput): Promise<GenerateSermonDraftOutput> {
  return generateSermonDraftFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSermonDraftPrompt',
  input: {schema: GenerateSermonDraftInputSchema},
  output: {schema: GenerateSermonDraftOutputSchema},
  prompt: `You are an AI assistant designed to help pastors and preachers generate sermon drafts quickly.

  Given the following information, generate a compelling sermon draft:

  Headline: {{{headline}}}
  Subheadline: {{{subheadline}}}
  Key Benefits:
  {{#each benefits}}
  - {{{this}}}
  {{/each}}

  {{#if additionalContext}}
  Additional Context: {{{additionalContext}}}
  {{/if}}

  Sermon Draft:
  `,
});

const generateSermonDraftFlow = ai.defineFlow(
  {
    name: 'generateSermonDraftFlow',
    inputSchema: GenerateSermonDraftInputSchema,
    outputSchema: GenerateSermonDraftOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
