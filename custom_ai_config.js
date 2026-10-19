// Custom AI Provider Configuration for Commento
// ==============================================================
// How to configure:
// 1. Get your free API key from Groq: https://console.groq.com/keys
// 2. Paste your API key below into `apiKey` under groq (or use another supported provider).
// 3. Save this file and reload the extension in chrome://extensions.
// ==============================================================

(function (global) {
  global.CustomAiConfig = {
    // Active provider: "groq" | "gemini" | "openai" | "claude" | "ollama"
    provider: "groq",

    // Groq configuration (Default & Recommended - fast and free tier available)
    groq: {
      apiKey: "YOUR_GROQ_API_KEY_HERE",
      endpoint: "https://api.groq.com/openai/v1/chat/completions",
      model: "llama-3.3-70b-versatile", // Or "openai/gpt-oss-120b", "llama3-70b-8192"
      temperature: 0.7,
    },

    // Google Gemini configuration
    gemini: {
      apiKey: "YOUR_GEMINI_API_KEY_HERE",
      model: "gemini-1.5-flash",
      temperature: 0.7,
    },

    // OpenAI configuration
    openai: {
      apiKey: "YOUR_OPENAI_API_KEY_HERE",
      endpoint: "https://api.openai.com/v1/chat/completions",
      model: "gpt-4o-mini",
      temperature: 0.7,
    },

    // Anthropic Claude configuration
    claude: {
      apiKey: "YOUR_CLAUDE_API_KEY_HERE",
      model: "claude-3-5-haiku-20241022",
      temperature: 0.7,
    },

    // Local Ollama configuration
    ollama: {
      endpoint: "http://localhost:11434/api/generate",
      model: "llama3.2",
    },
  };
})(typeof window !== "undefined" ? window : globalThis);
