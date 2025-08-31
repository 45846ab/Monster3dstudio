import axios from 'axios';

export async function callGemini(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  const endpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=" + apiKey;

  const body = {
    contents: [{
      role: "user",
      parts: [{ text: prompt }]
    }]
  };

  const headers = { "Content-Type": "application/json" };

  const res = await axios.post(endpoint, body, { headers });
  return res.data;
}