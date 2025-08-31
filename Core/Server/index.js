import express from "express";
import { buildPrompt } from "../prompt/style_prompt_builder.js";
import { callGemini } from "../generator/gemini_api_caller.js";

const app = express();
app.use(express.json());

app.post("/generate", async (req, res) => {
  const { name, description, style } = req.body;
  const prompt = buildPrompt({ name, description, style });
  const modelData = await callGemini(prompt);
  res.json(modelData);
});

app.listen(3000, () => {
  console.log("🧠 MonsterForge Core API listening on http://localhost:3000");
});