import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().default('Rofix Service Team'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    readTime: z.string().default('5 min read'),
  }),
});

export const collections = { blog };