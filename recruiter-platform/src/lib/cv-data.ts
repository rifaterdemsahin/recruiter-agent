import { marked } from "marked";

export interface Accomplishment {
  year: string;
  company: string;
  location: string;
  title: string;
  bullets: string[];
  keywords: string[];
  technologies: string[];
}

export interface Profile {
  id: string;
  label: string;
  summary: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  tags: string[];
}

export const contact = {
  name: "Rifat Erdem Sahin",
  title: "DevOps & AI Solutions Architect",
  citizenship: "British",
  location: "London, United Kingdom",
  email: "contact@rifaterdemsahin.com",
  phone: "+44 7848 024173",
  linkedin: "https://linkedin.com/in/rifaterdemsahin",
  github: "https://github.com/rifaterdemsahin",
  website: "https://rifaterdemsahin.com",
  calendly: "https://calendly.com/rifaterdem/schedule",
  cvPdf: "https://rifaterdemsahin.com/wp-content/uploads/2025/05/erdem-sahin-cv_summary_2025_may.pdf",
  cvWord: "https://rifaterdemsahin.com/wp-content/uploads/2025/05/erdem-sahin-cv_summary_2025_may.docx",
  profilePdf: "https://rifaterdemsahin.com/wp-content/uploads/2025/02/rifaterdemsahinprofilepresentation.v2025.2.pdf",
};

export const profiles: Profile[] = [
  {
    id: "general",
    label: "General Profile",
    summary:
      "An experienced engineer with deep expertise in CI/CD, DevOps, and AI-based architectures, with a proven track record in optimizing and automating enterprise systems. Specializes in automation, scalability, and security across both cloud and on-premise solutions.",
  },
  {
    id: "ai",
    label: "AI Solutions Architect",
    summary:
      "AI Solutions Architect specializing in Generative AI, LLM applications, and RAG architectures with expertise in secure, scalable enterprise deployments. Deep hands-on experience developing production-ready AI systems with focus on security, testing, and architectural best practices.",
  },
  {
    id: "devops",
    label: "DevOps Transformation Specialist",
    summary:
      "DevOps transformation specialist with 15+ years optimizing CI/CD pipelines, automating infrastructure, and implementing cloud-native solutions at scale. Proven track record reducing deployment times by up to 300% while cutting operational costs by 30%.",
  },
  {
    id: "cloud",
    label: "Cloud Solutions Architect",
    summary:
      "Cloud Solutions Architect with extensive experience across Azure, AWS, and GCP, specializing in infrastructure as code, Kubernetes orchestration, and multi-cloud strategies. Expert in migrating legacy systems to cloud-native architectures.",
  },
  {
    id: "security",
    label: "Security-Cleared DevOps Engineer",
    summary:
      "Security-cleared DevOps engineer (UK SC, NATO) specializing in secure CI/CD implementations, compliance automation, and defense sector solutions. Expert in implementing security-first DevOps practices for regulated industries.",
  },
];

export const coreCompetencies = [
  {
    icon: "bot",
    title: "AI & Machine Learning",
    items: [
      "Deep expertise in building and deploying Generative AI solutions",
      "Extensive hands-on experience developing Large Language Model applications",
      "Advanced implementation skills in RAG architectures, vector databases, and modern LLM frameworks",
      "Expert-level knowledge of AI security practices, including prompt injection prevention and data privacy controls",
    ],
    tags: ["AI", "LLM", "RAG", "Generative AI", "Security"],
  },
  {
    icon: "refresh-cw",
    title: "DevOps & Automation",
    items: [
      "Mastery of CI/CD pipeline design and optimization",
      "Infrastructure as Code (IaC) expert with Terraform, Ansible",
      "Container orchestration with Kubernetes and Docker at scale",
      "Comprehensive testing approaches across unit, integration, and end-to-end testing",
    ],
    tags: ["DevOps", "CI/CD", "IaC", "Kubernetes", "Docker"],
  },
  {
    icon: "building",
    title: "Architecture & Leadership",
    items: [
      "Track record of shaping enterprise architecture decisions",
      "Focus on scalable, maintainable, and secure solutions",
      "Collaborative team player with proven success in agile environments",
      "Experience leading technical transformations across Fortune 500 companies",
    ],
    tags: ["Architecture", "Leadership", "Enterprise", "Agile"],
  },
  {
    icon: "shield",
    title: "Security & Compliance",
    items: [
      "Active UK SC and NATO security clearances",
      "Expert in secure deployment practices and compliance automation",
      "Background checks: Watchdog (2024), Sterling (2019)",
    ],
    tags: ["Security", "Compliance", "Clearance", "UK SC", "NATO"],
  },
];

export const accomplishments: Accomplishment[] = [
  {
    year: "2025",
    company: "IBM",
    location: "London, UK",
    title: "Enterprise AI & Hybrid Cloud Transformation",
    bullets: [
      "Architected hybrid cloud transformation platform using IBM Cloud + Red Hat OpenShift for Fortune 500 enterprises",
      "Implemented watsonx AI solutions for intelligent automation reducing operational overhead by 35%",
      "Led DevSecOps transformation integrating Ansible Automation Platform and Terraform IaC across multi-cloud environments",
      "Delivered zero-downtime Kubernetes migrations for mission-critical financial and government workloads",
    ],
    keywords: ["IBM", "Hybrid Cloud", "AI Automation", "DevSecOps", "OpenShift", "watsonx"],
    technologies: ["IBM Cloud", "Red Hat OpenShift", "watsonx AI", "Ansible", "Terraform", "Kubernetes", "GitHub Actions"],
  },
  {
    year: "2024",
    company: "Goldman Sachs",
    location: "Muscat, Oman",
    title: "AI-Driven CI/CD Framework",
    bullets: [
      "Developed an AI-driven CI/CD framework increasing deployment frequency by 300%",
      "Reduced operational costs by 30% through intelligent automation",
    ],
    keywords: ["AI", "CI/CD", "Cost Optimization", "Finance", "Automation"],
    technologies: ["Python", "AI/ML", "Jenkins", "GitLab", "Kubernetes"],
  },
  {
    year: "2023",
    company: "Ypsomed",
    location: "Switzerland",
    title: "IoT Systems Migration & Optimization",
    bullets: [
      "Migrated IoT systems and optimized workflows",
      "Achieved 40% reduction in versioning conflicts",
    ],
    keywords: ["IoT", "Migration", "Workflow Optimization", "Healthcare", "DevOps"],
    technologies: ["Git", "CI/CD", "Azure", "IoT Hub"],
  },
  {
    year: "2022",
    company: "Cushman & Wakefield",
    location: "London, UK",
    title: "ETL Process Automation",
    bullets: [
      "Automated ETL processes increasing data processing speed by 50%",
      "Streamlined data pipelines for real-time analytics",
    ],
    keywords: ["ETL", "Automation", "Data Engineering", "Real Estate", "Python"],
    technologies: ["Python", "Apache Airflow", "SQL", "Azure Data Factory"],
  },
  {
    year: "2021",
    company: "Emerson",
    location: "USA",
    title: "Kubernetes & GPU Optimization",
    bullets: [
      "Improved computational efficiency by 45% with Kubernetes and GPU-based containers",
      "Scaled ML workloads across distributed infrastructure",
    ],
    keywords: ["Kubernetes", "GPU", "Performance", "Manufacturing", "ML"],
    technologies: ["Kubernetes", "Docker", "NVIDIA GPU", "Python"],
  },
  {
    year: "2016",
    company: "Microsoft",
    location: "Global",
    title: "Enterprise Transformation Architecture",
    bullets: [
      "Increased technology utilization by 50% as Enterprise Transformation Architect",
      "Led digital transformation initiatives across multiple business units",
    ],
    keywords: ["Transformation", "Architecture", "Enterprise", "Technology", "Strategy"],
    technologies: ["Azure", "Microsoft 365", "PowerPlatform"],
  },
];

export const technicalSkills = [
  { category: "AI & Machine Learning", skills: ["Generative AI & LLM Applications", "RAG Architecture", "Vector Databases (Pinecone, Weaviate, ChromaDB)", "Prompt Engineering & Optimization", "AI Security & Governance", "Model Fine-tuning & Deployment", "LangChain, LlamaIndex", "OpenAI API, Anthropic Claude API"] },
  { category: "DevOps & Infrastructure", skills: ["CI/CD Pipeline Design & Implementation", "Infrastructure as Code (IaC)", "Container Orchestration", "Configuration Management", "Monitoring & Observability", "GitOps Workflows"] },
  { category: "Cloud Platforms", skills: ["Azure: AKS, Azure DevOps, Functions, Logic Apps, Data Factory", "AWS: EKS, Lambda, S3, RDS, CloudFormation", "GCP: GKE, Cloud Functions, BigQuery"] },
  { category: "Tools & Technologies", skills: ["Docker, Kubernetes, Helm, Rancher", "Jenkins, GitLab CI, GitHub Actions, Azure DevOps, CircleCI", "Terraform, Ansible, ARM Templates, CloudFormation", "Prometheus, Grafana, ELK Stack, Datadog", "Python, Bash, PowerShell, YAML, Go", "Apache Airflow, Apache Kafka, SQL, NoSQL", "Git, GitHub, GitLab, Bitbucket"] },
];

export const education = [
  { degree: "Bachelor of Science", school: "Southern New Hampshire University, USA", year: "2013" },
  { degree: "Diploma", school: "Severna Park High School, USA", year: "1999" },
];

export const certifications = [
  "Microsoft Certified Architect in Cloud Solutions (70-532)",
  "Azure Certifications (Various)",
  "AWS Certifications",
  "Kubernetes Certifications",
  "DevOps & Agile Certifications",
];

export const securityClearances = [
  { name: "UK SC (Security Check)", validUntil: "2028" },
  { name: "NATO", validUntil: "2029" },
];

export const backgroundChecks = [
  { name: "Watchdog", year: "2024" },
  { name: "Sterling", year: "2019" },
];

export const allTags = Array.from(
  new Set([
    ...coreCompetencies.flatMap((c) => c.tags),
    ...accomplishments.flatMap((a) => a.keywords),
    ...accomplishments.flatMap((a) => a.technologies),
    "AI",
    "DevOps",
    "Cloud",
    "Security",
    "Kubernetes",
    "Terraform",
    "Python",
    "Azure",
    "AWS",
    "GCP",
    "LLM",
    "RAG",
    "CI/CD",
    "Docker",
    "Finance",
    "Healthcare",
    "IoT",
    "ETL",
    "Data Engineering",
    "OpenShift",
    "Ansible",
    "GitHub Actions",
    "Jenkins",
    "GitLab",
    "Watsonx",
    "IBM Cloud",
    "Red Hat",
    "Goldman Sachs",
    "Microsoft",
    "Emerson",
    "Ypsomed",
    "Cushman & Wakefield",
    "IBM",
    "London",
    "Oman",
    "Switzerland",
    "USA",
    "Clearance",
    "UK SC",
    "NATO",
  ])
).sort();

export const faqs: FaqItem[] = [
  {
    question: "What is your current notice period / availability?",
    answer: "I am open for scheduling through Calendly and can discuss availability based on the role requirements. Typically available with short notice for contract roles.",
    tags: ["Availability", "General"],
  },
  {
    question: "Do you have the right to work in the UK?",
    answer: "Yes, I am a British citizen with full right to work in the UK and hold active security clearances (UK SC and NATO).",
    tags: ["Compliance", "UK", "Security"],
  },
  {
    question: "What are your salary / rate expectations?",
    answer: "Competitive and flexible based on role, location, and contract type. Happy to discuss specific expectations during a call.",
    tags: ["Compensation", "General"],
  },
  {
    question: "Can you provide references?",
    answer: "Yes, professional references are available upon request from previous employers including IBM, Goldman Sachs, Microsoft, and others.",
    tags: ["References", "General"],
  },
  {
    question: "What industries have you worked in?",
    answer: "Finance (Goldman Sachs), Healthcare/MedTech (Ypsomed), Real Estate (Cushman & Wakefield), Manufacturing (Emerson), Technology (Microsoft, IBM), and Government/Defense.",
    tags: ["Experience", "Industries"],
  },
  {
    question: "What cloud platforms do you specialize in?",
    answer: "Multi-cloud expertise: Azure (AKS, DevOps, Functions, Data Factory), AWS (EKS, Lambda, S3, CloudFormation), and GCP (GKE, Cloud Functions, BigQuery).",
    tags: ["Cloud", "Azure", "AWS", "GCP"],
  },
  {
    question: "What is your experience with AI and LLMs?",
    answer: "Deep expertise in Generative AI, LLM applications, RAG architectures, vector databases, prompt engineering, and AI security. Built production-ready AI systems using watsonx, OpenAI API, Anthropic Claude, LangChain, and LlamaIndex.",
    tags: ["AI", "LLM", "RAG", "Generative AI"],
  },
  {
    question: "Do you hold any security clearances?",
    answer: "Yes. Active UK SC (Security Check) valid until 2028, and NATO clearance valid until 2029. Background checks: Watchdog (2024), Sterling (2019).",
    tags: ["Security", "Clearance", "UK SC", "NATO"],
  },
  {
    question: "What is your approach to DevOps transformation?",
    answer: "I focus on measurable outcomes: reducing deployment times, cutting costs, and improving reliability. At Goldman Sachs I increased deployment frequency by 300% and cut costs by 30%. I use IaC, GitOps, and CI/CD automation with comprehensive testing.",
    tags: ["DevOps", "CI/CD", "Transformation"],
  },
  {
    question: "Can you work fully remote or hybrid?",
    answer: "Yes, I am experienced in remote and hybrid working models and have successfully delivered global projects across multiple time zones.",
    tags: ["Availability", "Remote"],
  },
  {
    question: "What is your experience with Kubernetes?",
    answer: "Extensive: zero-downtime migrations for mission-critical workloads, GPU-based container optimization (45% efficiency gain), multi-cloud orchestration with AKS/EKS/GKE, Helm, Rancher, and GitOps workflows.",
    tags: ["Kubernetes", "Docker", "Cloud"],
  },
  {
    question: "What programming languages do you use?",
    answer: "Primary: Python, Bash, PowerShell, YAML, Go. I also work with SQL, NoSQL, and infrastructure-as-code languages like Terraform HCL and ARM Templates.",
    tags: ["Languages", "Python", "Go"],
  },
  {
    question: "What certifications do you hold?",
    answer: "Microsoft Certified Architect in Cloud Solutions (70-532), Azure Certifications, AWS Certifications, Kubernetes Certifications, and DevOps & Agile Certifications.",
    tags: ["Certifications", "Azure", "AWS", "Kubernetes"],
  },
  {
    question: "What is your highest level of education?",
    answer: "Bachelor of Science from Southern New Hampshire University, USA (2013). Diploma from Severna Park High School, USA (1999).",
    tags: ["Education", "General"],
  },
  {
    question: "What is your experience with Infrastructure as Code?",
    answer: "Expert-level with Terraform, Ansible, ARM Templates, and CloudFormation. Led DevSecOps transformation integrating Ansible Automation Platform and Terraform IaC across multi-cloud environments at IBM.",
    tags: ["IaC", "Terraform", "Ansible", "DevOps"],
  },
  {
    question: "Have you worked in the finance sector?",
    answer: "Yes, at Goldman Sachs (Muscat, Oman) developing an AI-driven CI/CD framework that increased deployment frequency by 300%. Also delivered zero-downtime migrations for mission-critical financial workloads at IBM.",
    tags: ["Finance", "Goldman Sachs", "CI/CD"],
  },
  {
    question: "What monitoring and observability tools do you use?",
    answer: "Prometheus, Grafana, ELK Stack, Datadog. I design comprehensive monitoring and observability strategies for cloud-native and on-premise environments.",
    tags: ["Monitoring", "DevOps", "Observability"],
  },
  {
    question: "Do you have experience with data engineering?",
    answer: "Yes, at Cushman & Wakefield I automated ETL processes increasing data processing speed by 50% and streamlined data pipelines for real-time analytics using Apache Airflow, SQL, and Azure Data Factory.",
    tags: ["Data Engineering", "ETL", "Python", "Airflow"],
  },
  {
    question: "What is your experience with containerization?",
    answer: "Expert in Docker, Kubernetes, Helm, and Rancher. Improved computational efficiency by 45% with Kubernetes and GPU-based containers at Emerson. Scaled ML workloads across distributed infrastructure.",
    tags: ["Docker", "Kubernetes", "GPU", "Containers"],
  },
  {
    question: "Can you describe a recent project at IBM?",
    answer: "Architected hybrid cloud transformation platform using IBM Cloud + Red Hat OpenShift for Fortune 500 enterprises. Implemented watsonx AI solutions for intelligent automation reducing operational overhead by 35%. Led DevSecOps transformation and delivered zero-downtime Kubernetes migrations for government workloads.",
    tags: ["IBM", "Hybrid Cloud", "OpenShift", "watsonx", "AI"],
  },
];

export function getCvText(): string {
  return JSON.stringify({ contact, profiles, coreCompetencies, accomplishments, technicalSkills, education, certifications, securityClearances, backgroundChecks }, null, 2);
}

export function searchCv(query: string): Array<{ type: string; title: string; content: string; tags: string[] }> {
  const q = query.toLowerCase();
  const results: Array<{ type: string; title: string; content: string; tags: string[] }> = [];

  profiles.forEach((p) => {
    if (p.label.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q)) {
      results.push({ type: "Profile", title: p.label, content: p.summary, tags: [p.id] });
    }
  });

  coreCompetencies.forEach((c) => {
    if (c.title.toLowerCase().includes(q) || c.items.some((i) => i.toLowerCase().includes(q))) {
      results.push({ type: "Competency", title: c.title, content: c.items.join("\n"), tags: c.tags });
    }
  });

  accomplishments.forEach((a) => {
    if (
      a.company.toLowerCase().includes(q) ||
      a.title.toLowerCase().includes(q) ||
      a.bullets.some((b) => b.toLowerCase().includes(q)) ||
      a.keywords.some((k) => k.toLowerCase().includes(q)) ||
      a.technologies.some((t) => t.toLowerCase().includes(q))
    ) {
      results.push({
        type: "Experience",
        title: `${a.year} | ${a.company} | ${a.title}`,
        content: a.bullets.join("\n"),
        tags: [...a.keywords, ...a.technologies],
      });
    }
  });

  technicalSkills.forEach((ts) => {
    if (ts.category.toLowerCase().includes(q) || ts.skills.some((s) => s.toLowerCase().includes(q))) {
      results.push({ type: "Skills", title: ts.category, content: ts.skills.join("\n"), tags: [ts.category] });
    }
  });

  faqs.forEach((f) => {
    if (f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)) {
      results.push({ type: "FAQ", title: f.question, content: f.answer, tags: f.tags });
    }
  });

  return results;
}

export function generateReferenceLetter(recruiterName: string, company: string, role: string, context?: string): string {
  const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  return `---

**REFERENCE LETTER**

**Date:** ${today}

**To:** ${recruiterName || "Hiring Manager"}
**Company:** ${company || "[Company Name]"}
**Re:** Reference for Rifat Erdem Sahin — ${role || "[Role Title]"}

---

Dear ${recruiterName || "Hiring Manager"},

I am pleased to provide this reference for **Rifat Erdem Sahin**, an exceptional ${role || "technology professional"} with whom I have worked directly.

Rifat is a **British citizen** based in **London, United Kingdom**, and brings deep expertise across **DevOps, AI/ML, Cloud Architecture, and Security**. ${context || ""}

**Key strengths observed:**
- **AI & Automation:** Architected hybrid cloud AI solutions at IBM using watsonx and OpenShift, reducing operational overhead by 35%.
- **DevOps Excellence:** Developed AI-driven CI/CD frameworks at Goldman Sachs, increasing deployment frequency by 300% and cutting costs by 30%.
- **Cloud & Infrastructure:** Multi-cloud expertise (Azure, AWS, GCP) with Kubernetes, Terraform, Ansible, and zero-downtime migrations.
- **Security & Compliance:** Holds active **UK SC** and **NATO** security clearances, with extensive experience in regulated industries.
- **Leadership:** Led enterprise transformations across Fortune 500 companies including Microsoft, IBM, and Goldman Sachs.

**Notable accomplishments:**
- 2025 | IBM — Enterprise AI & Hybrid Cloud Transformation
- 2024 | Goldman Sachs — AI-Driven CI/CD Framework (300% deployment increase)
- 2023 | Ypsomed — IoT Systems Migration (40% versioning conflict reduction)
- 2022 | Cushman & Wakefield — ETL Process Automation (50% speed increase)
- 2021 | Emerson — Kubernetes & GPU Optimization (45% efficiency gain)
- 2016 | Microsoft — Enterprise Transformation Architecture (50% utilization increase)

Rifat holds a **Bachelor of Science** from Southern New Hampshire University and maintains certifications from Microsoft, Azure, AWS, Kubernetes, and DevOps bodies.

I recommend Rifat without reservation for any senior ${role || "technical or leadership"} role. He consistently delivers measurable business value, leads with integrity, and adapts quickly to complex, high-stakes environments.

Please feel free to contact me for any further details.

Sincerely,

**Professional Reference**

---
*This reference letter was generated by the Recruiter Agent Platform for Rifat Erdem Sahin.*
`;
}
