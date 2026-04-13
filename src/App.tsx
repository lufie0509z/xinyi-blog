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
    role: "Software Engineer",
    location: "Aarhus, Denmark",
    period: "Dec.2025 - Present",
  description: "Built and launched Danish learning app Klar, implemented vocabulary flashcards, daily practice flows, and AI-generated content with TTS.",
  link: "https://klar.rimlys.org/home"
  },
  {
    company: "TikTok / Bytedance",
    role: "Software Engineer (Intern)",
    location: "Beijing, China",
    period: "Jun.2024 - Mar.2025",
  description: "Optimized a V8-based JS runtime (JASH) with ExternalString and CodeCache for ~5× speedup and lower memory, implemented C++↔JS bindings, and improved CI/CD to fix cross-platform build/test failures."
  },
  {
    company: "MartixPort (Rebranded as Bit Quant by 2026)",
    role: "Quantitative Developer (Part-time)",
    location: "Remote (Singapore)",
    period: "May.2024 - Nov.2024",
  description: "Built a real-time risk-control gateway, async WebSocket market-data pipeline, and OMS for pre-trade checks and order routing; implemented shared-memory IPC for sub-microsecond messaging and managed AWS infra with monitoring/alerting.",
  
  },
  {
    company: "Xcalibyte (acquired by Alibaba)",
    role: "Software Engineer (Intern)",
    location: "Beijing, China",
    period: "Nov.2022 - Nov.2023",
  description: "Extended a Clang-based SAST (Labrador) with AST visitors, implemented MISRA C/C++ rules achieving zero false positives and ISO 26262 certification, and built CI/CD to integrate the scanner into enterprise workflows.",
  link: "https://github.com/xcalcc/labrador"
  },
  {
    company: "Chaitin Technology (Alibaba subsidiary)",
    role: "Cybersecurity Engineer (Intern)",
    location: "Beijing, China",
    period: "Oct.2021 - Apr.2022",
    description: "Developed a VM-based semantic WAF for vulnerability scanning with robust JSON parsing, implemented distributed async checks with Redis, ported the VM to ARM, explored WASM, and deployed services via Docker/Kubernetes.",
  link: "https://github.com/chaitin/SafeLine"
  }
];

const EDUCATION = [
  {
    institution: "Nankai University (NKU), Tianjin, China",
    degree: "Master of Computer Science",
    period: "Sep.2022 - Jun.2025",
    description: "Recipient of Outstanding Graduate Scholarship."
  },
  {
    institution: "University of Science and Technology Beijing (USTB), Beijing, China",
    degree: "Bachelor of Computer Science",
    period: "Sep.2018 - Jun.2022",
    description: "GPA: 3.87/4.00 Ranking: 4/163 (top 2.50%)."
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
            Hi, I'm Zoey 👋 and I'm a Backend/Full‑Stack engineer focused on building scalable, reliable and high-performance systems. I have a strong background in system design, cloud infrastructure, and performance optimization. Recently, I’ve been exploring interesting usage of AI to enhance developer productivity and user experiences.

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
          </div>
        </header>

        {/* Section: Work Experience */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 mb-8">Work Experience</h2>
          <div className="space-y-10">
            {EXPERIENCE.map((exp) => (
              <div key={exp.company}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    {exp.link ? (
                      <a href={exp.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
                        <span className="text-sm md:text-base font-semibold text-slate-700">{exp.company}</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    ) : (
                      <span className="text-sm md:text-base font-semibold text-slate-700">{exp.company}</span>
                    )}
                      <div className="text-sm text-slate-500">{exp.role}</div>
                      {exp.location && (
                        <div className="text-xs text-slate-400 mt-1">{exp.location}</div>
                      )}
                  </div>
                  <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                </div>
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
