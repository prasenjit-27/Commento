# 🚀 Commento — AI LinkedIn Engagement Booster

> An open-source Chrome extension that generates smart, context-aware comments on LinkedIn posts using LLMs (powered by Groq, Gemini, OpenAI, Claude, or local Ollama).

---

## 📋 Table of Contents
- [Features](#-features)
- [Prerequisites & Getting Your Groq API Key](#-prerequisites--getting-your-groq-api-key)
- [Quick Start / Installation](#-quick-start--installation)
- [Configuring Your API Key](#-configuring-your-api-key)
- [Supported AI Providers](#-supported-ai-providers)
- [Project Structure](#-project-structure)
- [Troubleshooting](#-troubleshooting)
- [Security Notice](#-security-notice)
- [License](#-license)

---

## ✨ Features
- ⚡ **Ultra-Fast Generation**: Uses Groq LPU inference for instantaneous comment generation.
- 🎯 **Context-Aware**: Reads the post content and author context to craft insightful responses.
- 🔄 **Multiple AI Providers**: Native support for **Groq**, **Google Gemini**, **OpenAI**, **Anthropic Claude**, and **Ollama** (offline/local).
- 🛠️ **Customizable**: Tweak prompts, temperature, and models easily.

---

## 🔑 Prerequisites & Getting Your Groq API Key

Commento uses **Groq** by default for lightning-fast, high-quality responses with free tier access.

### How to get a free Groq API key:
1. Go to the [Groq Console](https://console.groq.com/).
2. Sign in or create a free account (with Google, GitHub, or email).
3. Navigate to **API Keys** in the left sidebar (or visit [console.groq.com/keys](https://console.groq.com/keys)).
4. Click **Create API Key**.
5. Give your key a name (e.g., `Commento-Extension`) and copy the generated key (it starts with `gsk_...`).
   > ⚠️ **Important**: Copy your key immediately; it won't be shown again on Groq!

---

## 🚀 Quick Start / Installation

Because this is a pre-bundled Chrome Extension (Manifest V3), you can run it directly in Developer Mode without needing to compile code:

1. **Clone or Download** this repository:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```
2. **Configure your API Key** (see next section).
3. Open Google Chrome (or any Chromium browser: Brave, Edge, Opera, etc.) and navigate to:
   ```text
   chrome://extensions
   ```
4. In the top-right corner, toggle **Developer mode** to **ON**.
5. Click the **Load unpacked** button in the top-left corner.
6. Select the folder containing `manifest.json` (this repository's root directory).
7. The extension **Commento — AI Booster for LinkedIn** is now installed and active!

---

## ⚙️ Configuring Your API Key

### Step 1: Add your key to `custom_ai_config.js`
Open [`custom_ai_config.js`](custom_ai_config.js) in any text editor and replace `YOUR_GROQ_API_KEY_HERE` with your Groq API key:

```javascript
(function (global) {
  global.CustomAiConfig = {
    provider: "groq",

    groq: {
      apiKey: "gsk_your_actual_groq_api_key_here", // <-- Paste your key here
      endpoint: "https://api.groq.com/openai/v1/chat/completions",
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
    },
    // ...
  };
})(typeof window !== "undefined" ? window : globalThis);
```

### Step 2: Reload the Extension
Whenever you update `custom_ai_config.js`:
1. Go to `chrome://extensions`.
2. Click the 🔄 **Refresh** icon on the **Commento** extension card.
3. Refresh your LinkedIn page (`https://www.linkedin.com/`).

---

## 🤖 Supported AI Providers

You can switch the `provider` property in [`custom_ai_config.js`](custom_ai_config.js) to any of the following:

| Provider | `provider` Setting | Recommended Model | API Key Link |
| :--- | :--- | :--- | :--- |
| **Groq (Default)** | `"groq"` | `llama-3.3-70b-versatile` | [Groq Console](https://console.groq.com/keys) |
| **Google Gemini** | `"gemini"` | `gemini-1.5-flash` | [Google AI Studio](https://aistudio.google.com/app/apikey) |
| **OpenAI** | `"openai"` | `gpt-4o-mini` | [OpenAI Platform](https://platform.openai.com/api-keys) |
| **Anthropic Claude** | `"claude"` | `claude-3-5-haiku-20241022` | [Anthropic Console](https://console.anthropic.com/settings/keys) |
| **Ollama (Local)** | `"ollama"` | `llama3.2` | Runs locally (no key required, default port `11434`) |

---

## 📂 Project Structure

```text
├── manifest.json            # Chrome Extension Manifest (V3)
├── custom_ai_config.js      # AI provider & API key configuration
├── content.js               # Content script injected into LinkedIn
├── popup.html               # Extension popup UI
├── popup.js                 # Popup application logic
├── popup.css                # Styles for popup UI
├── iziToast.min.css         # Toast notification library styling
├── icon16.png - icon128.png # Extension icons in standard resolutions
├── assets/                  # UI assets (logos, badges, indicators)
├── static/                  # Extension background service workers
├── .env.example             # Environment variables reference template
├── .gitignore               # Ignored files (secrets, OS files, builds)
└── README.md                # Documentation and setup guide
```

---

## ❓ Troubleshooting

- **Extension says "Please configure your GROQ API Key in custom_ai_config.js"**:
  - Open `custom_ai_config.js` and ensure `apiKey` has your actual Groq key and does not contain `YOUR_`.
  - Reload the extension in `chrome://extensions` and refresh LinkedIn.
- **Groq API Error 401**:
  - Verify that your Groq API key is valid and has not expired or been revoked.
- **Comments not inserting on LinkedIn**:
  - Make sure you are on `https://www.linkedin.com/feed/` and that the LinkedIn page has fully loaded.
  - Refresh the page to re-initialize the content script.

---

## 🔒 Security Notice
- **Never commit your actual API keys to GitHub!**
- Before committing or pushing code, ensure [`custom_ai_config.js`](custom_ai_config.js) contains placeholder values (`YOUR_GROQ_API_KEY_HERE`) or use a local private branch.
- `.env` is included in [`.gitignore`](.gitignore) to prevent accidental credential leakage.

---

## 📄 License
Distributed under the MIT License. Feel free to fork, customize, and contribute!

