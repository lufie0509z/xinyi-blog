import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  ArrowRight
} from "lucide-react";

const PROJECTS = [
  {
    title: "CloudScale Analytics",
    description: "A real-time data processing engine built with Go and React. Handles millions of events per second with sub-millisecond latency.",
    tags: ["Go", "React", "Redis"],
    link: "#",
    github: "#"
  },
  {
    title: "DevFlow IDE",
    description: "A browser-based code editor with built-in collaboration features and integrated terminal support.",
    tags: ["TypeScript", "Node.js", "WebSockets"],
    link: "#",
    github: "#"
  },
  {
    title: "NeuralViz",
    description: "Interactive 3D visualization of neural network architectures and training progress using Three.js.",
    tags: ["Python", "Three.js", "React"],
    link: "#",
    github: "#"
  }
];

const SKILLS = [
  { category: "Languages", items: ["TypeScript", "Python", "Java", "C++", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Three.js"] },
  { category: "Backend", items: ["Node.js", "Express", "Django", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Linux"] }
];

const EXPERIENCE = [
  {
    company: "Rimlys",
    role: "Software Engineer, Aarhus, Denmark",
    period: "Dec.2025 - Present",
    description: "Built and launched Klar (Danish-learning app) with a Next.js frontend and Rust backend; deployed on GCP with automated CI/CD. Implemented vocabulary flashcards with spaced repetition (FSRS), daily practice workflows, and AI features (daily story/comic + text-to-speech)."
  },
  {
    company: "TikTok / Bytedance",
    role: "Software Engineer (Intern)",
    period: "Jun.2024 - Mar.2025",
    description: "Worked on JASH (V8-based JS runtime) — optimized execution via ExternalString and CodeCache for ~5× speedup and reduced memory; built C++↔JS bindings. Refactored modules and improved CI/CD reliability; fixed cross-platform build/test issues across V8 and Chromium components."
  },
  {
    company: "MartixPort (Remote, Singapore)",
    role: "Quantitative Developer (Contract)",
    period: "May.2024 - Nov.2024",
    description: "Built a real-time risk-control gateway and an asynchronous WebSocket market-data pipeline; developed an OMS for pre-trade checks and order lifecycle routing. Implemented shared-memory IPC for sub-microsecond communication and managed AWS infrastructure and monitoring/alerting."
  },
  {
    company: "Xcalibyte (acquired by Alibaba)",
    role: "Software Engineer (Intern)",
    period: "Nov.2022 - Nov.2023",
    description: "Extended Clang-based SAST (Labrador) with AST visitors; implemented MISRA C/C++ rules (zero FPs) and helped obtain ISO 26262 certification. Built CI/CD and integrated scanner into enterprise workflows."
  },
  {
    company: "Chaitin Technology (Alibaba subsidiary)",
    role: "Cybersecurity Engineer (Intern)",
    period: "Oct.2021 - Apr.2022",
    description: "Built VM-based intelligent semantic-analysis WAF for vulnerability scanning; customized RapidJSON parsing and implemented distributed async checks with Redis; ported VM to ARM and explored WASM integration; deployed services via Docker/Kubernetes."
  }
];

const EDUCATION = [
  {
    institution: "Nankai University (NKU), Tianjin, China",
    degree: "Master of Computer Science",
    period: "Sep.2022 - Jun.2025",
    description: "Graduate studies in Computer Science."
  },
  {
    institution: "University of Science and Technology Beijing (USTB), Beijing, China",
    degree: "Bachelor of Computer Science",
    period: "Sep.2018 - Jun.2022",
    description: "GPA: 3.87/4.00 — Ranking: 4/163 (top 2.50%)."
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-100 selection:text-brand-900">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-3xl font-bold tracking-tight mb-4">Zoey (Xinyi) Zhang</h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Software Developer.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <a href="/assets/ZoeyZhang_Software Developer.pdf" target="_blank" rel="noreferrer" className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-emerald-500 hover:opacity-80 transition-all flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Download CV
            </a>
            <a href="https://www.linkedin.com/in/xinyi-zhang-a23594243" target="_blank" rel="noreferrer" className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-emerald-500 hover:opacity-80 transition-all flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="#" className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-emerald-500 hover:opacity-80 transition-all">
              GitHub
            </a>
          </div>
        </header>

        {/* Section: Work Experience */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 mb-8">Work Experience</h2>
          <div className="space-y-10">
            {EXPERIENCE.map((exp) => (
              <div key={exp.company}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-semibold">{exp.role}</h3>
                  <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                </div>
                <div className="text-sm text-slate-400 mb-3">{exp.company}</div>
                <p className="text-slate-500 leading-relaxed text-sm max-w-lg">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Education */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 mb-8">Education</h2>
          <div className="space-y-8">
            {EDUCATION.map((edu) => (
              <div key={edu.institution}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-semibold">{edu.degree}</h3>
                  <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                </div>
                <div className="text-sm text-slate-400 mb-3">{edu.institution}</div>
                <p className="text-slate-500 leading-relaxed text-sm max-w-lg">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Projects */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 mb-8">Projects</h2>
          <div className="space-y-10">
            {PROJECTS.map((project) => (
              <div key={project.title}>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-base font-semibold">{project.title}</h3>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-slate-300 hover:text-slate-900 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={project.link} className="text-slate-300 hover:text-slate-900 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <p className="text-slate-500 leading-relaxed text-sm mb-3 max-w-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Skills */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 mb-8">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {SKILLS.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-xs font-bold mb-3 text-slate-900 uppercase tracking-wider">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="text-sm text-slate-500">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-16 border-t border-slate-200">
          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-400">
              © 2026 Zoey (Xinyi) Zhang
            </p>
            <a href="https://www.linkedin.com/in/xinyi-zhang-a23594243" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-brand-600 transition-colors flex items-center gap-2">
              Contact
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
