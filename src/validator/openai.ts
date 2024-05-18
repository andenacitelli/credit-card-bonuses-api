import OpenAI from "openai";
import { environment } from "@/validator/environment.js";

export const openai = new OpenAI({ apiKey: environment.OPENAI_API_KEY });
