import { GoogleGenAI, Type } from '@google/genai';

// Vercel will run this server-side. Expects env var GEMINI_API_KEY.
export default async function handler(req, res) {
  const name = (req.method === 'POST' ? req.body?.name : req.query?.name) || 'Little Brother';
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Missing GEMINI_API_KEY environment variable' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a heartwarming, short, and playful Christmas wish for a younger brother named ${name}. Include a piece of "Santa's Wisdom" about being kind and following dreams.`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            message: { type: Type.STRING },
            advice: { type: Type.STRING }
          },
          required: ['title', 'message', 'advice']
        }
      }
    });

    const parsed = JSON.parse(response.text);
    return res.status(200).json(parsed);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Gemini API error:', error);
    return res.status(200).json({
      title: 'Merry Christmas, Champ!',
      message: "You're the best little brother anyone could ask for. May your holiday be filled with magic and cookies!",
      advice: 'Always remember: a kind heart is the brightest light of all.'
    });
  }
}
