
// This service may be imported by client code. Avoid importing
// the server-only `@google/genai` at module top-level so the
// browser bundle doesn't try to include it.
export const getHolidayWisdom = async (brotherName: string = "Little Brother") => {
  // If we're running in the browser, call the serverless API instead
  // of importing the server-only SDK. The API will call Gemini.
  if (typeof window !== 'undefined') {
    try {
      const resp = await fetch(`/api/gemini?name=${encodeURIComponent(brotherName)}`);
      if (!resp.ok) throw new Error(`API responded ${resp.status}`);
      return await resp.json();
    } catch (err) {
      // Fallback when network/API unavailable
      // eslint-disable-next-line no-console
      console.warn('Falling back to local wisdom due to API error:', err);
      return {
        title: "Merry Christmas, Champ!",
        message: "You're the best little brother anyone could ask for. May your holiday be filled with magic and cookies!",
        advice: "Always remember: a kind heart is the brightest light of all."
      };
    }
  }

  // Server-side: dynamically import the Gemini SDK and call it.
  try {
    const { GoogleGenAI, Type } = await import('@google/genai');
    const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
    if (!apiKey) {
      throw new Error('Missing Gemini API key (GEMINI_API_KEY)');
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a heartwarming, short, and playful Christmas wish for a younger brother named ${brotherName}. Include a piece of "Santa's Wisdom" about being kind and following dreams.`,
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

    return JSON.parse(response.text);
  } catch (error) {
    // Provide a graceful fallback instead of breaking the app.
    // Keep the console.error server-side for debugging.
    // eslint-disable-next-line no-console
    console.error('Error fetching Gemini wisdom:', error);
    return {
      title: "Merry Christmas, Champ!",
      message: "You're the best little brother anyone could ask for. May your holiday be filled with magic and cookies!",
      advice: "Always remember: a kind heart is the brightest light of all."
    };
  }
};
