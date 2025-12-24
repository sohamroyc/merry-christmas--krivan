
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHolidayWisdom = async (brotherName: string = "Little Brother") => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a heartwarming, short, and playful Christmas wish for a younger brother named ${brotherName}. Include a piece of "Santa's Wisdom" about being kind and following dreams.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            message: { type: Type.STRING },
            advice: { type: Type.STRING }
          },
          required: ["title", "message", "advice"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error fetching Gemini wisdom:", error);
    return {
      title: "Merry Christmas, Champ!",
      message: "You're the best little brother anyone could ask for. May your holiday be filled with magic and cookies!",
      advice: "Always remember: a kind heart is the brightest light of all."
    };
  }
};
