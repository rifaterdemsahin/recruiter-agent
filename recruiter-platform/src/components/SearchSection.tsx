"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Tag, ChevronRight, FileText, Briefcase, Shield, Bot, Building } from "lucide-react";
import { searchCv, allTags, faqs, type FaqItem } from "@/lib/cv-data";

function getIconForType(type: string) {
  switch (type) {
    case "Profile": return <Briefcase className="w-4 h-4" />;
    case "Competency": return <Shield className="w-4 h-4" />;
    case "Experience": return <Building className="w-4 h-4" />;
    case "Skills": return <Tag className="w-4 h-4" />;
    case "FAQ": return <FileText className="w-4 h-4" />;
    default: return <ChevronRight className="w-4 h-4" />;
  }
}

export default function SearchSection() {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const searchResults = useMemo(() => {
    if (!query.trim() && selectedTags.length === 0) return [];
    const results = query.trim() ? searchCv(query) : [];
    if (selectedTags.length === 0) return results;
    return results.filter((r) => selectedTags.some((t) => r.tags.includes(t)));
  }, [query, selectedTags]);

  const filteredFaqs = useMemo(() => {
    if (!query.trim() && selectedTags.length === 0) return faqs;
    return faqs.filter((f) => {
      const matchesQuery = !query.trim() || f.question.toLowerCase().includes(query.toLowerCase()) || f.answer.toLowerCase().includes(query.toLowerCase());
      const matchesTags = selectedTags.length === 0 || selectedTags.some((t) => f.tags.includes(t));
      return matchesQuery && matchesTags;
    });
  }, [query, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  return (
    <section id="search" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight mb-3 flex items-center gap-3">
          <Search className="w-7 h-7 text-emerald-600" />
          Search & Explore
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Search across the full CV, filter by tags, or browse pre-answered recruiter questions.
        </p>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search skills, companies, technologies, questions..."
          className="w-full pl-12 pr-12 py-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base"
        />
        {query && (
          <button onClick={() => setQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.slice(0, 24).map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedTags.includes(tag)
                ? "bg-emerald-600 text-white"
                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            }`}
          >
            {tag}
          </button>
        ))}
        {selectedTags.length > 0 && (
          <button
            onClick={() => setSelectedTags([])}
            className="px-3 py-1.5 rounded-full text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Bot className="w-5 h-5 text-emerald-600" />
            AI-Powered Results {searchResults.length > 0 && <span className="text-sm font-normal text-zinc-500">({searchResults.length})</span>}
          </h3>
          <AnimatePresence>
            {searchResults.length === 0 && query.trim() && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500 text-sm">
                No exact matches. Try browsing the FAQs or ask the AI Agent below.
              </motion.div>
            )}
            {searchResults.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2 text-emerald-700 dark:text-emerald-400 font-semibold text-sm">
                  {getIconForType(result.type)}
                  {result.type} — {result.title}
                </div>
                <div className="text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-line">{result.content}</div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {result.tags.slice(0, 6).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-xs text-zinc-600 dark:text-zinc-400">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600" />
            Pre-Answered Recruiter Questions {filteredFaqs.length > 0 && <span className="text-sm font-normal text-zinc-500">({filteredFaqs.length})</span>}
          </h3>
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <span className="font-medium text-sm pr-4">{faq.question}</span>
                  <ChevronRight className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform ${activeFaq === idx ? "rotate-90" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-line">{faq.answer}</div>
                      <div className="px-4 pb-4 flex flex-wrap gap-1">
                        {faq.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950 text-xs text-emerald-700 dark:text-emerald-300">{t}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
