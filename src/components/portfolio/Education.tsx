import { Section } from "./Section";

const items = [
  {
    period: "Nov 2024 – May 2025 · 7 months",
    title: "Internship — AI Chatbot Development",
    org: "Noivis Srl",
    desc: "Seven-month internship focused on designing and developing an AI-powered chatbot solution.",
  },
  {
    period: "29 Oct 2024",
    title: "ISIPM-BASE — Project Management Certification",
    org: "Istituto Italiano di Project Management",
    desc: "Foundation certification on project management methodology, planning and control.",
  },
  {
    period: "Nov 2023 – Jul 2025",
    title: "ITS Academy — Cyber-Security (EQF 5)",
    org: "ITS Academy Meccanica Abruzzo · Chieti-Lanciano",
    desc: "Post-diploma higher technical program focused on cyber-security, fundamentals of programming and multiple programming languages.",
  },
  {
    period: "Sep 2016 – Jul 2022",
    title: "High School Diploma — I.I.S. \"Volta\" (EQF 4)",
    org: "Mechanics, Mechatronics & Energy · Pescara",
    desc: "Five-year technical diploma with foundations in IT, workplace safety and technical-scientific subjects.",
  },
];

export const Education = () => (
  <Section
    id="education"
    index="02."
    title="Education & Experience"
    subtitle="Educational path in chronological order. Will be updated with real titles, dates and references."
  >
    <ol className="relative space-y-6 border-l border-border pl-6">
      {items.map((it, i) => (
        <li key={i} className="group relative">
          <span className="absolute -left-[31px] top-2 grid h-4 w-4 place-items-center rounded-full border border-primary/50 bg-background">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
          </span>
          <div className="rounded-md border border-border bg-card/60 p-5 backdrop-blur transition-colors group-hover:border-primary/40">
            <div className="mb-1 flex flex-wrap items-center gap-3">
              <span className="rounded-sm bg-primary/10 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-primary">
                {it.period}
              </span>
              <span className="font-mono text-xs text-muted-foreground">{it.org}</span>
            </div>
            <h3 className="text-lg font-medium text-foreground">{it.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);