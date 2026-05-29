import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['blog', 'diy']).default('blog'),
    date: z.coerce.date(),
    emoji: z.string().default('🌱'),
  }),
});

export const collections = { blog };
