import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const knowledgeDir = path.resolve(__dirname, "../../knowledge");

export function readFileSafe(filename: string): string {
    const filePath = path.join(knowledgeDir, filename);
    if(!fs.existsSync(filePath)){
        return "";
    }
    return fs.readFileSync(filePath, "utf-8");
}

export function loadKnowledgeBase() {
  return {
    bio: readFileSafe("bio.md"),
    experience: readFileSafe("experience.md"),
    projects: readFileSafe("projects.md"),
    skills: readFileSafe("skills.md"),
    faq: readFileSafe("faq.md"),
    personality: readFileSafe("personality.md"),
    conversation_style: readFileSafe("conversation_style.md"),
  };
}

export function buildKnowledgeContext() {
  const kb = loadKnowledgeBase();

  return `
    [Bio]
    ${kb.bio}

    [Experience]
    ${kb.experience}

    [Projects]
    ${kb.projects}

    [Skills]
    ${kb.skills}

    [FAQ]
    ${kb.faq}

    [Personality]
    ${kb.personality}

    [Conversation Style]
    ${kb.conversation_style}
    `.trim();
}