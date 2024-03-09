import { z } from "zod";

export const environment = z
  .object({
    OPENAI_API_KEY: z.string().min(1),
  })
  .parse(process.env);
