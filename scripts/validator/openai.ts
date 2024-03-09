import OpenAI from "openai";
import { environment } from "scripts/validator/environment";

export const openai = new OpenAI({ apiKey: environment.OPENAI_API_KEY });
