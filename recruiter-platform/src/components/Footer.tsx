import { Globe, Mail, Shield } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { contact } from "@/lib/cv-data";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="font-bold text-sm">{contact.name}</div>
          <div className="text-xs text-zinc-500 mt-1">{contact.title} · {contact.location}</div>
        </div>
        <div className="flex items-center gap-4">
          <a href="/rtr" className="text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors">
            Right to Represent
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-emerald-600 transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-emerald-600 transition-colors">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href={contact.website} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-emerald-600 transition-colors">
            <Globe className="w-5 h-5" />
          </a>
          <a href={`mailto:${contact.email}`} className="text-zinc-500 hover:text-emerald-600 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Shield className="w-3 h-3" />
          <span>UK SC · NATO · Deployed on Fly.io</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 text-center text-xs text-zinc-400">
        <p>
          Source: <a href="https://github.com/rifaterdemsahin/recruiter-agent" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-600">github.com/rifaterdemsahin/recruiter-agent</a>
          {" · "}
          CV data from <a href="https://github.com/rifaterdemsahin/recruiter-agent/blob/main/source_Cv.md" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-600">source_Cv.md</a>
        </p>
      </div>
    </footer>
  );
}
