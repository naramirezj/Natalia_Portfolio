# Natalia Portfolio Agent Server

This backend powers the AI agent on Natalia's portfolio website.

## What it does
- Accepts chat messages from the React frontend
- Loads Natalia's curated knowledge files
- Sends instructions + knowledge + user message to Gemini
- Returns a recruiter-friendly response

## Folder structure

- `src/app.ts` → Express app setup
- `src/server.ts` → starts the server
- `src/routes/chat.ts` → chat API route
- `src/agent/instructions.ts` → behavior rules/system prompt
- `src/agent/knowledge.ts` → reads markdown knowledge files
- `src/agent/chatWithAgent.ts` → sends the prompt to Gemini
- `knowledge/` → markdown files about Natalia

## Local development

```bash
cd agent-server
npm install
npm run dev