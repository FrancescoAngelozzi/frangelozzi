import { Section } from "./Section";

const projects = [
  {
    n: "001",
    title: "Personal Cyber-Security Lab",
    tags: ["lab", "vm", "networking"],
    desc: "Home lab built to practice offensive and defensive techniques: virtual machines, isolated networks and scripted scenarios to study how attacks work and how to detect them.",
    status: "ongoing",
  },
  {
    n: "002",
    title: "Phishing & OSINT Exercises",
    tags: ["osint", "phishing", "analysis"],
    desc: "Hands-on exercises analyzing suspicious emails and tracking public information sources — recognizing patterns, indicators and social-engineering techniques.",
    status: "ongoing",
  },
  {
    n: "003",
    title: "ITS Academy Coursework",
    tags: ["cyber-security", "programming"],
    desc: "Selection of academic projects developed during the ITS Cyber-Security path: programming exercises, security labs and group work across multiple languages.",
    status: "completed",
  },
  {
    n: "004",
    title: "Web Fundamentals Practice",
    tags: ["html", "css"],
    desc: "Small front-end exercises focused on structure, semantics and accessibility — building a clean baseline for future full-stack security tooling.",
    status: "ongoing",
  },
];

export const Projects = () => (
  <Section
    id="projects"
    index="04."
    title="Projects"
    subtitle="A selection of personal labs, academic work and ongoing practice in cyber-security and programming."
  >
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <article
          key={p.n}
          className="group relative flex flex-col overflow-hidden rounded-md border border-border bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]"
        >
          <div className="mb-6 flex items-center justify-between font-mono text-xs">
            <span className="text-primary">#{p.n}</span>
            <span className="text-muted-foreground">{p.status}</span>
          </div>
          <h3 className="text-lg font-medium text-foreground">{p.title}</h3>
          <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <li
                key={t}
                className="rounded-sm border border-border/80 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="h-px w-6 bg-border transition-all group-hover:w-10 group-hover:bg-primary" />
            <span className="group-hover:text-primary">explore</span>
          </div>
        </article>
      ))}
    </div>
  </Section>
);