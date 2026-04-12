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
    company: "Tech Innovators Inc.",
    role: "Software Engineering Intern",
    period: "2025",
    description: "Optimized backend microservices, reducing API latency by 30%. Implemented automated testing suites."
  },
  {
    company: "University CS Lab",
    role: "Research Assistant",
    period: "2024 - 2025",
    description: "Developed visualization tools for distributed systems research."
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-100 selection:text-brand-900">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-3xl font-bold tracking-tight mb-4">Alex Zhang</h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Software Engineer. Focused on building robust backend systems and intuitive digital experiences.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <a href="mailto:hello@alexzhang.dev" className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-emerald-500 hover:opacity-80 transition-all">
              Email
            </a>
            <a href="#" className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-emerald-500 hover:opacity-80 transition-all">
              LinkedIn
            </a>
            <a href="#" className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-emerald-500 hover:opacity-80 transition-all">
              GitHub
            </a>
          </div>
        </header>

        {/* Section: Experience */}
        <section className="mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Experience</h2>
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

        {/* Section: Projects */}
        <section className="mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Projects</h2>
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
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Skills</h2>
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
              © 2026 Alex Zhang
            </p>
            <a href="mailto:hello@alexzhang.dev" className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-brand-600 transition-colors flex items-center gap-2">
              Contact
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
