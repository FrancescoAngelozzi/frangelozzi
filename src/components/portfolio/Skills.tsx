import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";

interface SkillItem {
  name: string;
  pct: number;
}

interface SkillGroup {
  label: string;
  items: SkillItem[];
}

const groups: SkillGroup[] = [
  {
    label: "Cyber-Security",
    items: [
      { name: "Cyber-security fundamentals", pct: 70 },
      { name: "Ethical hacking basics", pct: 65 },
      { name: "Phishing detection", pct: 75 },
      { name: "OSINT & online research", pct: 70 },
    ],
  },
  {
    label: "Programming",
    items: [
      { name: "Programming fundamentals", pct: 60 },
      { name: "HTML", pct: 70 },
      { name: "CSS", pct: 65 },
      { name: "Multiple languages (basics)", pct: 55 },
    ],
  },
  {
    label: "Systems & Productivity",
    items: [
      { name: "Microsoft Word", pct: 80 },
      { name: "Microsoft PowerPoint", pct: 78 },
      { name: "Microsoft Access", pct: 65 },
      { name: "Android", pct: 75 },
      { name: "Web browsing & tools", pct: 80 },
    ],
  },
  {
    label: "Soft Skills",
    items: [
      { name: "Autonomy", pct: 80 },
      { name: "Team integration", pct: 70 },
      { name: "Punctuality & reliability", pct: 85 },
      { name: "Project management (ISIPM-BASE)", pct: 65 },
    ],
  },
];

function SkillBar({ name, pct }: SkillItem) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setWidth(pct);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div ref={ref} className="mb-3 last:mb-0">
      <div className="mb-1 flex items-center justify-between">
        <span className="font-mono text-xs text-foreground/90">{name}</span>
        <span className="font-mono text-[11px] text-primary">{width}%</span>
      </div>
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent transition-[width] duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export const Skills = () => (
  <Section
    id="skills"
    index="03."
    title="Technical Skills"
    subtitle="Self-assessed proficiency levels. The values reflect a solid foundational knowledge built during academic and professional training."
  >
    <div className="grid gap-4 sm:grid-cols-2">
      {groups.map((g) => (
        <div
          key={g.label}
          className="group relative overflow-hidden rounded-md border border-border bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/40"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-mono text-sm uppercase tracking-wider text-primary">
              {g.label}
            </h3>
            <span className="font-mono text-[11px] text-muted-foreground">
              {String(g.items.length).padStart(2, "0")}
            </span>
          </div>
          <div>
            {g.items.map((s) => (
              <SkillBar key={s.name} name={s.name} pct={s.pct} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);