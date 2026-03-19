import { GoogleGenAI } from "@google/genai";
import { agentInstructions } from "./instructions.js";
import { buildKnowledgeContext } from "./knowledge.js";

export async function chatWithNataliaAgent(message: string){
    // Read the API key at request time, after dotenv has already been loaded in app.ts.
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        throw new Error(
        "Missing GEMINI_API_KEY. Add it to agent-server/.env and restart the server."
        );
    }

    // Create the Gemini client using the API key explicitly.
    const ai = new GoogleGenAI({ apiKey });
    const context = buildKnowledgeContext();
    const prompt = `
    System Instructions: 
    ${agentInstructions}
    Approved Knowledge Base:
    ${context}
    User Message:
    ${message}

    Answer as Natalia AI.
    `.trim();
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash", 
        contents: prompt,
    });

    return response.text ?? "Sorry, I couldn't generate a response.";
}