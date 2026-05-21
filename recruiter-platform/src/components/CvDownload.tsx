"use client";

import { Download, FileText, Presentation, FileSpreadsheet, ExternalLink, Mail, Phone, MapPin, Calendar, Shield, GraduationCap, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon, GlobeIcon } from "@/components/Icons";
import { contact, profiles, accomplishments, technicalSkills, education, certifications, securityClearances, backgroundChecks } from "@/lib/cv-data";

export default function CvDownload() {
  return (
    <section id="cv" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight mb-3 flex items-center gap-3">
          <FileText className="w-7 h-7 text-emerald-600" />
          CV & Documents
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Download official CV documents, view the full profile, or connect directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <a
          href={contact.cvPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors shadow-sm"
        >
          <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-950 flex items-center justify-center">
            <FileText className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <div className="font-medium text-sm">Full CV (PDF)</div>
            <div className="text-xs text-zinc-500">Latest version</div>
          </div>
          <ExternalLink className="w-4 h-4 text-zinc-400 ml-auto" />
        </a>
        <a
          href={contact.cvWord}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors shadow-sm"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
            <FileSpreadsheet className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="font-medium text-sm">Full CV (Word)</div>
            <div className="text-xs text-zinc-500">Editable format</div>
          </div>
          <ExternalLink className="w-4 h-4 text-zinc-400 ml-auto" />
        </a>
        <a
          href={contact.profilePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors shadow-sm"
        >
          <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950 flex items-center justify-center">
            <Presentation className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <div className="font-medium text-sm">Profile Presentation</div>
            <div className="text-xs text-zinc-500">PDF slide deck</div>
          </div>
          <ExternalLink className="w-4 h-4 text-zinc-400 ml-auto" />
        </a>
        <a
          href={contact.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors shadow-sm"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <div className="font-medium text-sm">Schedule a Call</div>
            <div className="text-xs text-zinc-500">Via Calendly</div>
          </div>
          <ExternalLink className="w-4 h-4 text-zinc-400 ml-auto" />
        </a>
      </div>

      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
          <h3 className="text-xl font-bold mb-1">{contact.name}</h3>
          <p className="text-emerald-700 dark:text-emerald-400 font-medium text-sm">{contact.title}</p>
          <div className="flex flex-wrap gap-3 mt-3 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {contact.location}</span>
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> British Citizen</span>
            <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {contact.email}</span>
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {contact.phone}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
              <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
              <GithubIcon className="w-3.5 h-3.5" /> GitHub
            </a>
            <a href={contact.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
              <GlobeIcon className="w-3.5 h-3.5" /> Website
            </a>
          </div>
        </div>

        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
          <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-3">Profiles</h4>
          <div className="space-y-3">
            {profiles.map((p) => (
              <div key={p.id} className="rounded-xl bg-zinc-50 dark:bg-zinc-800/50 p-4">
                <div className="font-semibold text-sm mb-1">{p.label}</div>
                <div className="text-sm text-zinc-700 dark:text-zinc-300">{p.summary}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
          <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-3">Key Accomplishments</h4>
          <div className="space-y-4">
            {accomplishments.map((a, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-16 shrink-0 text-xs font-bold text-emerald-700 dark:text-emerald-400">{a.year}</div>
                <div>
                  <div className="font-semibold text-sm">{a.company} <span className="text-zinc-500 font-normal">— {a.location}</span></div>
                  <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">{a.title}</div>
                  <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-0.5">
                    {a.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {a.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-xs text-zinc-600 dark:text-zinc-400">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
          <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-3">Technical Skills</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {technicalSkills.map((ts) => (
              <div key={ts.category}>
                <div className="font-semibold text-sm mb-1.5">{ts.category}</div>
                <div className="flex flex-wrap gap-1">
                  {ts.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950 text-xs text-emerald-700 dark:text-emerald-300">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-2"><GraduationCap className="w-4 h-4" /> Education</h4>
            <div className="space-y-2">
              {education.map((e, idx) => (
                <div key={idx} className="text-sm">
                  <div className="font-medium">{e.degree}</div>
                  <div className="text-zinc-500 text-xs">{e.school} ({e.year})</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-2"><Award className="w-4 h-4" /> Certifications</h4>
            <ul className="list-disc list-inside text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
              {certifications.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> Clearances</h4>
            <div className="space-y-2">
              {securityClearances.map((sc, idx) => (
                <div key={idx} className="text-sm">
                  <div className="font-medium">{sc.name}</div>
                  <div className="text-zinc-500 text-xs">Valid until {sc.validUntil}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-2"><FileText className="w-4 h-4" /> Background Checks</h4>
            <div className="space-y-2">
              {backgroundChecks.map((bc, idx) => (
                <div key={idx} className="text-sm">
                  <div className="font-medium">{bc.name}</div>
                  <div className="text-zinc-500 text-xs">{bc.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
