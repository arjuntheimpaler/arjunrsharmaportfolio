import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Use YYYY-MM-DD in frontmatter; Astro parses to Date.
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Optional cover image path relative to /public, e.g. /blog/my-post/cover.jpg
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = { blog };
