import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "subtext": z.string(),
        "cta": z.string()
      }),
      "features": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "description": z.string()
        }))
      }),
      "info": z.object({
        "heading": z.string(),
        "body": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        })),
        "cta": z.string()
      })
    })
  }
};
export type Schemas = typeof schemas;