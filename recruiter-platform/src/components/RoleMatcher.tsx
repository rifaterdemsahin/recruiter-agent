"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardPaste, Wand2, Check, Briefcase, MapPin, Calendar, DollarSign, Shield } from "lucide-react";
import { contact, profiles, accomplishments, technicalSkills, coreCompetencies, securityClearances } from "@/lib/cv-data";

export default function RoleMatcher() {
  const [roleText, setRoleText] = useState("");
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const runAnalysis = () => {
    if (!roleText.trim()) return;
    setLoading(true);
    setAnalysis(null);
    setScore(null);

    setTimeout(() => {
      const text = roleText.toLowerCase();

      // Simple keyword matching logic
      let matchedSkills: string[] = [];
      let matchedCompanies: string[] = [];
      let matchedClearances: string[] = [];
      let points = 0;
      const maxPoints = 100;

      // Check technical skills
      technicalSkills.forEach((ts) => {
        ts.skills.forEach((skill) => {
          if (text.includes(skill.toLowerCase().split(" ")[0]) || text.includes(ts.category.toLowerCase())) {
            if (!matchedSkills.includes(skill)) matchedSkills.push(skill);
            points += 3;
          }
        });
      });

      // Check core competencies
      coreCompetencies.forEach((cc) => {
        cc.items.forEach((item) => {
          const words = item.toLowerCase().split(" ");
          words.forEach((w) => {
            if (w.length > 4 && text.includes(w)) {
              points += 1;
            }
          });
        });
        cc.tags.forEach((tag) => {
          if (text.includes(tag.toLowerCase())) {
            if (!matchedSkills.includes(tag)) matchedSkills.push(tag);
            points += 4;
          }
        });
      });

      // Check companies
      accomplishments.forEach((a) => {
        if (text.includes(a.company.toLowerCase()) || text.includes(a.location.toLowerCase())) {
          matchedCompanies.push(`${a.company} (${a.location})`);
          points += 5;
        }
      });

      // Check location
      if (text.includes("london") || text.includes("uk") || text.includes("united kingdom") || text.includes("remote")) {
        points += 8;
        matchedSkills.push("Location match: London / UK / Remote");
      }

      // Check clearances
      securityClearances.forEach((sc) => {
        if (text.includes("clearance") || text.includes("sc") || text.includes("nato") || text.includes("security")) {
          matchedClearances.push(sc.name);
          points += 10;
        }
      });

      // Cap and calculate score
      const cappedPoints = Math.min(points, maxPoints);
      const calculatedScore = Math.round((cappedPoints / maxPoints) * 100);
      setScore(calculatedScore);

      const summary = `## Role Match Analysis

**Overall Suitability Score: ${calculatedScore}%**

### Matched Skills & Technologies
${matchedSkills.length > 0 ? matchedSkills.map((s) => `- ${s}`).join("\n") : "- No exact skill matches detected — may require upskilling or broader interpretation."}

### Relevant Experience
${matchedCompanies.length > 0 ? matchedCompanies.map((c) => `- ${c}`).join("\n") : "- No direct company/location matches, but Rifat has broad multi-industry experience."}

### Security & Compliance
${matchedClearances.length > 0 ? matchedClearances.map((c) => `- ${c}`).join("\n") : "- No specific clearance requirement detected."}

### Recommendations
- ${calculatedScore >= 80 ? "Strong match — recommend immediate outreach." : calculatedScore >= 60 ? "Good match — highlight relevant projects in screening call." : calculatedScore >= 40 ? "Moderate match — discuss transferable skills and growth areas." : "Weak direct match — evaluate for adjacent roles or future pipeline."}
- Rifat is a British citizen based in London with ${contact.title} credentials.
- Availability: Open for scheduling via [Calendly](${contact.calendly}).

### Quick Facts
- **Years of experience:** 15+ years
- **Top industries:** Finance, Healthcare, Real Estate, Manufacturing, Technology, Government
- **Cloud platforms:** Azure, AWS, GCP
- **Key strengths:** AI/ML, DevOps, Kubernetes, Terraform, Security Clearances
`;
      setAnalysis(summary);
      setLoading(false);
    }, 1200);
  };

  return (
    <section id="role-matcher" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight mb-3 flex items-center gap-3">
          <ClipboardPaste className="w-7 h-7 text-emerald-600" />
          Role Matcher
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Paste a job description or role requirements below. The agent will instantly analyze match against Rifat’s profile and provide a suitability score.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <textarea
            value={roleText}
            onChange={(e) => setRoleText(e.target.value)}
            placeholder="Paste job description here... (e.g., 'We are looking for a DevOps Engineer with Kubernetes, Terraform, and Azure experience... SC clearance preferred...')"
            className="w-full h-80 resize-none rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-zinc-500">
              {roleText.length} characters
            </div>
            <button
              onClick={runAnalysis}
              disabled={loading || !roleText.trim()}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? <Check className="w-4 h-4 animate-pulse" /> : <Wand2 className="w-4 h-4" />}
              {loading ? "Analyzing..." : "Analyze Match"}
            </button>
          </div>
        </div>

        <div>
          <AnimatePresence>
            {score !== null && analysis && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg overflow-hidden"
              >
                <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Match Result</h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${score >= 80 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" : score >= 60 ? "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300" : "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"}`}>
                      {score}% Match
                    </div>
                  </div>
                  <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-1000 ${score >= 80 ? "bg-emerald-500" : score >= 60 ? "bg-amber-500" : "bg-red-500"}`}
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
                <div className="p-6 text-sm whitespace-pre-line text-zinc-700 dark:text-zinc-300">
                  {analysis}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!analysis && !loading && (
            <div className="rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 p-10 text-center">
              <Briefcase className="w-10 h-10 text-zinc-300 mx-auto mb-4" />
              <p className="text-zinc-500 text-sm">
                Paste a role description on the left and click <strong>Analyze Match</strong> to see how Rifat fits.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-left">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <MapPin className="w-3 h-3" /> London, UK
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Calendar className="w-3 h-3" /> 15+ years exp
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Shield className="w-3 h-3" /> UK SC + NATO
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <DollarSign className="w-3 h-3" /> Competitive
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
