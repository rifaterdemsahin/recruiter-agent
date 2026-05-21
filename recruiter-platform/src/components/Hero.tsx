"use client";

import { motion } from "framer-motion";
import { Bot, Search, ClipboardPaste, FileText, Download, Sparkles, ChevronDown, Handshake } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Recruiter Platform
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Recruiter Agent for{" "}
            <span className="text-emerald-600">Rifat Erdem Sahin</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
            Ask questions, search the CV, paste a role for instant matching, generate reference letters, and download official documents — all in one place.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a
              href="#search"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <Search className="w-4 h-4" />
              Search CV
            </a>
            <a
              href="#ai-agent"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm"
            >
              <Bot className="w-4 h-4" />
              Ask AI Agent
            </a>
            <a
              href="/rtr"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-100 font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors shadow-sm"
            >
              <Handshake className="w-4 h-4" />
              Right to Represent
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Search, label: "Search & Tags" },
              { icon: Bot, label: "Active AI Agent" },
              { icon: ClipboardPaste, label: "Role Matcher" },
              { icon: Handshake, label: "Right to Represent" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <item.icon className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center mt-12"
        >
          <a href="#search" className="animate-bounce text-zinc-400 hover:text-zinc-600">
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
