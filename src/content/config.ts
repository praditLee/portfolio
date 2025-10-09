import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    imageUrl: z.string(), // ภาพปก
    gallery: z.array(z.string()).optional(),
    type: z.enum(['image', 'video']),
    videoUrl: z.string().optional(),
    // เราจะไม่เก็บ description ที่นี่ เพราะเราจะใช้เนื้อหาของไฟล์ Markdown แทน
  }),
});

export const collections = {
  'projects': projectCollection,
};