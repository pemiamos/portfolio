import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    medium: z.string(),
    themes: z.array(z.string()),
    cover: z.string(),
    summary: z.string(),
    collaborators: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

const themes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/themes' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    tagline: z.string(),
  }),
});

export const collections = { projects, themes };