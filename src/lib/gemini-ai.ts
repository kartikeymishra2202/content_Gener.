import { GoogleGenerativeAI } from "@google/generative-ai";

const apikey = `${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`;
const genAI = new GoogleGenerativeAI(apikey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const GenerationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig: GenerationConfig,
  history: [],
});
