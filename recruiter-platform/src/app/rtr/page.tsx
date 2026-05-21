"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, Mail, Building, User, CheckCircle, Send, AlertCircle, ArrowLeft, Copy, Check } from "lucide-react";

export default function RtrPage() {
  const [email, setEmail] = useState("");
  const [recruiterName, setRecruiterName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/rtr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, recruiterName, company, role }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setResult({ error: err.message || "Request failed" });
    } finally {
      setLoading(false);
    }
  };

  const copyResponse = () => {
    if (!result?.message) return;
    navigator.clipboard.writeText(
      `${result.message}\n\n${(result.instructions || []).join("\n")}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-emerald-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Recruiter Agent
        </a>

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-4">
            <Handshake className="w-4 h-4" />
            Right to Represent
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Request Representation
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Enter your details below. Rifat will confirm he is happy to be
            represented by you, and you will receive an automated confirmation.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm p-6 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1.5 flex items-center gap-2">
              <Mail className="w-4 h-4 text-zinc-500" />
              Recruiter Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="recruiter@company.com"
              className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 flex items-center gap-2">
              <User className="w-4 h-4 text-zinc-500" />
              Recruiter Name
            </label>
            <input
              type="text"
              value={recruiterName}
              onChange={(e) => setRecruiterName(e.target.value)}
              placeholder="Your full name"
              className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 flex items-center gap-2">
              <Building className="w-4 h-4 text-zinc-500" />
              Agency / Company
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g., Hays, Harvey Nash"
              className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 flex items-center gap-2">
              <Send className="w-4 h-4 text-zinc-500" />
              Role (optional)
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g., Senior DevOps Engineer"
              className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading || !email.trim()}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              <span className="animate-pulse">Submitting…</span>
            ) : (
              <>
                <Handshake className="w-4 h-4" />
                Confirm Representation
              </>
            )}
          </button>
        </form>

        <AnimatePresence>
          {result && !result.error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-2xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/30 shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-emerald-800 dark:text-emerald-300 text-lg">
                      Confirmed
                    </h3>
                    <p className="text-emerald-700 dark:text-emerald-400 mt-1">
                      {result.message}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-emerald-900 p-4 mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
                    Next Steps & Key Info
                  </h4>
                  <ul className="space-y-2">
                    {result.instructions?.map((item: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={copyResponse}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-200 dark:border-emerald-900 text-sm font-medium text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                  >
                    {copied ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    {copied ? "Copied" : "Copy Response"}
                  </button>
                  {!result.n8nNotified && result.n8nError && (
                    <span className="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Email service temporarily offline — confirmation saved
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {result?.error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-2xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30 p-6"
            >
              <div className="flex items-center gap-2 text-red-700 dark:text-red-300 font-medium">
                <AlertCircle className="w-5 h-5" />
                {result.error}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
