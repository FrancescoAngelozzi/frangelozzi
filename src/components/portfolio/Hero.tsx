import { useEffect, useState } from "react";

const roles = [
  "Cybersecurity Student",
  "Ethical Hacking Enthusiast",
  "ITS Academy Graduate",
  "Blue-Team Mindset",
];

export const Hero = () => {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const delay = deleting ? 45 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1600);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section id="top" className="relative mx-auto flex min-h-[100svh] max-w-6xl items-center px-6 pt-20">
      <div className="grid w-full gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="relative grid h-1.5 w-1.5 place-items-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/70" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span>available for training opportunities</span>
          </div>

          <p className="mb-3 font-mono text-sm text-primary">
            <span className="text-muted-foreground">$</span> whoami
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Francesco
            <br />
            <span className="text-gradient">Angelozzi</span>
          </h1>

          <p className="mt-6 font-mono text-base text-muted-foreground">
            <span className="text-primary">&gt;</span> {text}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 bg-primary align-middle animate-blink" />
          </p>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            ITS Academy graduate in Cyber-Security (Chieti–Lanciano).
            Passionate about ethical hacking since childhood, I'm building
            concrete skills in security, networks and programming with
            ambition, precision and method.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-all hover:glow-ring"
            >
              explore projects
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              contact me
            </a>
          </div>
        </div>

        <TerminalCard />
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70 hover:text-primary"
      >
        scroll ↓
      </a>
    </section>
  );
};

const TerminalCard = () => (
  <div className="relative">
    <div className="absolute -inset-3 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />
    <div className="relative overflow-hidden rounded-md border border-border bg-card/80 shadow-[var(--shadow-elevated)] backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border/80 bg-secondary/50 px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          francesco@portfolio: ~/about
        </span>
      </div>
      <pre className="relative scanline overflow-hidden p-5 font-mono text-[13px] leading-relaxed text-foreground/90">
{`$ cat profile.json
{
  "name":       "Francesco Angelozzi",
  "role":       "Cyber-Security Specialist · ITS Academy",
  "based_in":   "Pescara, Italy",
  "education":  "ITS Academy Cyber-Security (EQF 5)",
  "status":     "graduated · open to opportunities",
  "stack":      [
    "cyber-security", "ethical-hacking",
    "networking", "programming-basics",
    "html/css", "android",
    "ms-office", "osint"
  ],
  "mindset":    "curiosity · method · precision"
}
$ _`}
      </pre>
    </div>
  </div>
);