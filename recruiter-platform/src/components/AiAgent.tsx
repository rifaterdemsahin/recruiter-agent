"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, User, Loader2, Sparkles, Copy, Check, Wand2 } from "lucide-react";
import { getCvText } from "@/lib/cv-data";

interface Message {
  role: "user" | "model";
  text: string;
}

export default function AiAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Hello! I am the recruiter agent for **Rifat Erdem Sahin**. I can answer questions about his experience, skills, availability, security clearances, and more. You can also paste a job description and I will match it against his profile. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [provider, setProvider] = useState<"gemini" | "xai" | "fallback">("gemini");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const geminiKey = typeof window !== "undefined" ? process.env.NEXT_PUBLIC_GEMINI_API_KEY || "" : "";
  const xaiKey = typeof window !== "undefined" ? process.env.NEXT_PUBLIC_XAI_API_KEY || "" : "";

  const callGemini = async (prompt: string): Promise<string | null> => {
    if (!geminiKey) return null;
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.3, maxOutputTokens: 2048 },
        }),
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
  };

  const callXai = async (prompt: string): Promise<string | null> => {
    if (!xaiKey) return null;
    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${xaiKey}`,
      },
      body: JSON.stringify({
        model: "grok-2-latest",
        messages: [
          { role: "system", content: "You are a helpful recruiter agent for Rifat Erdem Sahin. Use the provided CV data to answer accurately and concisely." },
          { role: "user", content: prompt },
        ],
        temperature: 0.3,
        max_tokens: 2048,
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.choices?.[0]?.message?.content || null;
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userText = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setLoading(true);

    try {
      const cvContext = getCvText();
      const prompt = `You are a helpful recruiter agent for Rifat Erdem Sahin. Use the following CV data to answer the recruiter's question accurately and concisely. If the question asks about a role match, compare the job requirements to Rifat's skills and provide a suitability score with reasoning. If you do not have enough information, say so honestly.

CV DATA:
${cvContext}

RECRUITER QUESTION:
${userText}

Provide a helpful, professional answer. Use markdown formatting.`;

      let reply: string | null = null;
      let usedProvider: "gemini" | "xai" | "fallback" = "fallback";

      // Try Gemini first
      reply = await callGemini(prompt);
      if (reply) {
        usedProvider = "gemini";
      } else {
        // Fallback to xAI
        reply = await callXai(prompt);
        if (reply) {
          usedProvider = "xai";
        }
      }

      if (!reply) {
        reply = `I am operating in fallback mode because no AI provider is available. Here is what I know from the CV data about your question:

**Question:** ${userText}

I have access to Rifat's full CV including his work at IBM (2025), Goldman Sachs (2024), Ypsomed (2023), Cushman & Wakefield (2022), Emerson (2021), and Microsoft (2016). He specializes in DevOps, AI/ML, Cloud Architecture (Azure/AWS/GCP), Kubernetes, Terraform, and holds UK SC and NATO security clearances.

To enable full AI responses, configure a Gemini or xAI API key in the environment variables.`;
        usedProvider = "fallback";
      }

      setProvider(usedProvider);
      setMessages((prev) => [...prev, { role: "model", text: reply }]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: `I encountered an error while connecting to the AI service: ${err.message || "Unknown error"}. Please check your API key and network connection.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const copyLast = () => {
    const lastModel = [...messages].reverse().find((m) => m.role === "model");
    if (lastModel) {
      navigator.clipboard.writeText(lastModel.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const providerLabel = provider === "gemini" ? "Gemini" : provider === "xai" ? "xAI (Grok)" : "Fallback";

  return (
    <section id="ai-agent" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight mb-3 flex items-center gap-3">
          <Sparkles className="w-7 h-7 text-emerald-600" />
          Active AI Agent
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Ask any question about Rifat’s background, paste a job description for instant role matching, or request a tailored summary.
        </p>
      </div>

      <div className="max-w-4xl mx-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg overflow-hidden flex flex-col" style={{ height: "640px" }}>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex gap-3 max-w-[85%] ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === "user" ? "bg-emerald-600 text-white" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"}`}>
                    {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${m.role === "user" ? "bg-emerald-600 text-white rounded-br-none" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-bl-none"}`}>
                    {m.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {loading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                <Bot className="w-4 h-4 text-zinc-500" />
              </div>
              <div className="px-4 py-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 rounded-bl-none">
                <Loader2 className="w-4 h-4 animate-spin text-zinc-500" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
          <div className="flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Ask a question or paste a job description..."
              className="flex-1 resize-none rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 min-h-[56px] max-h-[160px]"
              rows={1}
            />
            <div className="flex flex-col gap-2">
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="h-12 w-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
              <button
                onClick={copyLast}
                title="Copy last response"
                className="h-8 w-12 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2 text-xs text-zinc-500">
            <Wand2 className="w-3 h-3" />
            <span>Powered by {providerLabel}. {geminiKey ? "Gemini key configured." : ""} {xaiKey ? "xAI key configured." : ""}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
