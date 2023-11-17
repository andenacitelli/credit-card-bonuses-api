import OpenAI from "openai";
import { z } from "zod";

const apiKey = z.string().safeParse(process.env.OPENAI_API_KEY);
if (!apiKey.success) throw new Error("OPENAI_API_KEY is not set");

export const openai = new OpenAI({ apiKey: apiKey.data });