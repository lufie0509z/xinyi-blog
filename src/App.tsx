import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink
} from "lucide-react";
import profileImage from "../assets/IMG_0594.JPG";
import cvPdf from "../assets/ZoeyZhang_Software Developer.pdf";

type Project = {
  title: string;
  period: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
};

const PROJECTS: Project[] = [
  {
    title: "X86-Based OS Kernel Development",
    period: "Feb.2023 - Jun.2023",
    description: "Implemented core operating system components from bootstrapping through scheduling on x86.",
    tags: ["x86", "OS Kernel", "Virtual Memory", "File System", "Bootloader"]
  },
  {
    title: "Compilation System Design Based on SysY",
    period: "Jun.2021 - Oct.2021",
    description: "Designed and implemented the front end of a compiler for the SysY language.",
    tags: ["Compiler", "SysY", "Lexer", "Parser", "Semantic Analysis"]
  },
  {
    title: "ELFSign & Kui",
    period: "Oct.2020 - Jan.2021",
    description: "Built a kernel-based signature and verification system to secure ELF binaries.",
    tags: ["Linux Kernel", "ELF", "RSA", "ftrace", "Multi-Architecture"]
  },
  {
    title: "Aspect-Based Sentiment Analysis",
    period: "Apr.2020 - Aug.2020",
    description: "Built an NLP pipeline for aspect-based sentiment analysis with sequence labeling and LSTM modeling.",
    tags: ["NLP", "LSTM", "Keras", "BIO Tagging", "Model Evaluation"]
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
    company: "MartixPort (Rebranded as Bit Quant now)",
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
  <div className="min-h-screen bg-slate-50 font-sans text-slate-900 text-[15px] selection:bg-teal-100 selection:text-teal-900">
  <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 md:flex md:items-start md:gap-12">
        
        {/* Left column (always visible on md+). On small screens it's stacked above content. */}
        <aside className="mb-8 md:mb-0 md:w-72 flex-shrink-0 md:sticky md:top-0 md:h-screen">
          <div className="md:flex md:flex-col md:justify-center md:pt-8">
            {/* Using uploaded photo in assets */}
            <img src={profileImage} alt="Zoey (Xinyi) Zhang" className="w-40 h-40 rounded-full object-cover object-center mb-4 bg-slate-100" />

            <h2 className="text-[21px] font-bold tracking-tight mb-2">Zoey (Xinyi) Zhang</h2>
            <p className="text-[15px] text-slate-600 mb-4"> A full-time cat servant of my naughty boy, coding for cans.</p>

            <div className="flex flex-col gap-3">
              <a href={cvPdf} target="_blank" rel="noreferrer" className="text-[15px] font-semibold inline-flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-500 hover:opacity-90 transition-all" aria-label="Download CV">
                <ExternalLink className="w-4 h-4 text-teal-600" />
                <span>Download CV</span>
              </a>
              <a href="https://www.linkedin.com/in/xinyi-zhang-a23594243" target="_blank" rel="noreferrer" className="text-[15px] font-semibold inline-flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-500 hover:opacity-90 transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-teal-600" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/lufie0509z" target="_blank" rel="noreferrer" className="text-[15px] font-semibold inline-flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-500 hover:opacity-90 transition-all" aria-label="GitHub">
                <Github className="w-4 h-4 text-teal-600" />
                <span>GitHub</span>
              </a>
              {/* Replace the email placeholder below with your real email if you want a mailto link here */}
              <a href="mailto: zzzzzxy.zhang@gmail.com" className="text-[15px] font-semibold inline-flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-500 hover:opacity-90 transition-all" aria-label="Email">
                <Mail className="w-4 h-4 text-teal-600" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Right column (main, scrollable) */}
        <main className="flex-1">

        {/* Section: About / Self Introduction */}
        <section className="mb-12">
          <h2 className="text-[20px] md:text-[22px] font-semibold uppercase tracking-wider text-teal-700 mb-4">About</h2>
          <p className="text-[15px] text-slate-600 leading-relaxed max-w-2xl">
            Hi, I'm Zoey 👋 and I'm a Backend / Full‑Stack engineer focused on building scalable, reliable systems. I have a strong background in system development, cloud infrastructure and performance optimization. I love to write clean, elegant and efficient code. Currently, I am exploring interesting new technologies and frameworks to enhance my skill set.
            
          </p>
        </section>

        {/* Section: Work Experience */}
        <section className="mb-16">
          <h2 className="text-[20px] md:text-[22px] font-semibold uppercase tracking-wider text-teal-700 mb-8">Work Experience</h2>
          <div className="space-y-6">
            {EXPERIENCE.map((exp) => (
              <div key={exp.company}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    {exp.link ? (
                      <a href={exp.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-700 hover:text-teal-600 transition-colors">
                        <span className="text-[17px] md:text-[18px] font-semibold">{exp.company}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[17px] md:text-[18px] font-semibold text-slate-700">{exp.company}</span>
                    )}
                      <div className="text-[15px] text-slate-500">{exp.role}</div>
                      {exp.location && (
                        <div className="text-[14px] text-slate-400 mt-1">{exp.location}</div>
                      )}
                  </div>
                  <span className="text-[14px] font-mono text-slate-400">{exp.period}</span>
                </div>
                <p className="text-slate-500 leading-relaxed text-[15px] pr-28">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Education */}
        <section className="mb-16">
          <h2 className="text-[20px] md:text-[22px] font-semibold uppercase tracking-wider text-teal-700 mb-8">Education</h2>
          <div className="space-y-8">
            {EDUCATION.map((edu) => (
              <div key={edu.institution}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-[17px] font-semibold">{edu.degree}</h3>
                  <span className="text-[14px] font-mono text-slate-400">{edu.period}</span>
                </div>
                <div className="text-[15px] text-slate-400 mb-3">{edu.institution}</div>
                <p className="text-slate-500 leading-relaxed text-[15px] max-w-lg">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Projects */}
        <section className="mb-16">
          <h2 className="text-[20px] md:text-[22px] font-semibold uppercase tracking-wider text-teal-700 mb-8">Projects</h2>
          <div className="space-y-10">
            {PROJECTS.map((project) => (
              <div key={project.title}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[17px] md:text-[18px] font-semibold text-slate-700">{project.title}</h3>
                  <div className="flex items-center gap-4 md:shrink-0">
                    <span className="text-[14px] font-mono text-slate-400">{project.period}</span>
                    {(project.github || project.link) && (
                      <div className="flex gap-4">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-slate-900 transition-colors" aria-label={`${project.title} GitHub`}>
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-slate-900 transition-colors" aria-label={`${project.title} link`}>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-slate-500 leading-relaxed text-[15px] pr-28 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Skills removed */}

        {/* Section: Hobbies */}
        <section className="mt-8 mb-12">
          <h2 className="text-[20px] md:text-[22px] font-semibold uppercase tracking-wider text-teal-700 mb-4">Hobbies</h2>
          <div className="space-y-2">
            <p className="text-slate-500 leading-relaxed text-[15px] pr-28">
              • Korean dramas: If you have any recommendations, please reach out, I love discovering new series!
            </p>
            <p className="text-slate-500 leading-relaxed text-[15px] pr-28">
              • Knitting & crochet: Beginner and still struggling, but enjoying the process and small wins.
            </p>
            <p className="text-slate-500 leading-relaxed text-[15px] pr-28">
              • Cooking: Mostly Asian food; learning Danish cuisine and trying my hand at baking.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-16 border-t border-slate-200">
          <div className="space-y-1">
            <p className="text-[14px] text-slate-400">
              © 2026 Zoey (Xinyi) Zhang
            </p>
            <p className="text-[14px] text-slate-400">
              Last updated: Late March 2026
            </p>
          </div>
        </footer>

        </main>

      </div>
    </div>
  );
}
