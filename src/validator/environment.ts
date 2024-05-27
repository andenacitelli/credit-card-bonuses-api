import { z } from "zod";

export const environment = z
  .object({
    OPENAI_API_KEY: z.string().min(1),
    VALIDATOR_LLM: z.string().min(1).default("gpt-4o"),
  })
  .parse(process.env);
