"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Mail, Building, User, ClipboardCopy, Check } from "lucide-react";
import { generateReferenceLetter } from "@/lib/cv-data";

export default function ReferenceLetterGenerator() {
  const [recruiterName, setRecruiterName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [context, setContext] = useState("");
  const [letter, setLetter] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const l = generateReferenceLetter(recruiterName, company, role, context);
    setLetter(l);
  };

  const copy = () => {
    if (letter) {
      navigator.clipboard.writeText(letter);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="reference" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight mb-3 flex items-center gap-3">
          <FileText className="w-7 h-7 text-emerald-600" />
          Reference Letter Generator
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Generate a tailored professional reference letter in seconds. Fill in the details and copy or download the result.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5 flex items-center gap-2">
              <User className="w-4 h-4 text-zinc-500" /> Recruiter / Hiring Manager Name
            </label>
            <input
              type="text"
              value={recruiterName}
              onChange={(e) => setRecruiterName(e.target.value)}
              placeholder="e.g., Jane Smith"
              className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 flex items-center gap-2">
              <Building className="w-4 h-4 text-zinc-500" /> Company
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g., Acme Corp"
              className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 flex items-center gap-2">
              <Mail className="w-4 h-4 text-zinc-500" /> Role Title
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g., Senior DevOps Engineer"
              className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Additional Context (optional)</label>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Any specific project, relationship, or context to include in the letter..."
              className="w-full h-24 resize-none rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button
            onClick={generate}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Generate Reference Letter
          </button>
        </div>

        <div>
          <AnimatePresence>
            {letter && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg overflow-hidden"
              >
                <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-semibold text-sm">Generated Reference Letter</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={copy}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <ClipboardCopy className="w-3.5 h-3.5" />}
                      {copied ? "Copied" : "Copy"}
                    </button>
                    <a
                      href={`data:text/plain;charset=utf-8,${encodeURIComponent(letter)}`}
                      download={`reference-rifat-erdem-sahin-${role?.toLowerCase().replace(/\s+/g, "-") || "role"}.txt`}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </a>
                  </div>
                </div>
                <div className="p-5 max-h-[600px] overflow-y-auto">
                  <pre className="text-sm whitespace-pre-wrap font-sans text-zinc-700 dark:text-zinc-300 leading-relaxed">{letter}</pre>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!letter && (
            <div className="rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 p-10 text-center">
              <FileText className="w-10 h-10 text-zinc-300 mx-auto mb-4" />
              <p className="text-zinc-500 text-sm">
                Fill in the details and click <strong>Generate Reference Letter</strong> to create a tailored reference.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
