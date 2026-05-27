import { GoogleGenAI } from "@google/genai";

// Inicializa o cliente do Gemini usando a nova variável de ambiente
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Chama o modelo gratuito mais rápido do Google (gemini-2.5-flash)
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: body.message,
    });

    return Response.json({
      reply: response.text,
    });
  } catch (error: unknown) {
    console.error(error);

    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";

    return Response.json(
      {
        error: errorMessage,
      },
      {
        status: 500,
      }
    );
  }
}
