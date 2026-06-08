import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter(Boolean) as HTMLElement[];

    const update = () => {
      setScrolled(window.scrollY > 8);

      // Pick the section whose top is closest to (but not past) a line
      // 30% down the viewport. This keeps the highlight in sync with both
      // wheel scrolling and anchor clicks.
      const probe = window.innerHeight * 0.3;
      let current = "";
      for (const s of sections) {
        const rect = s.getBoundingClientRect();
        if (rect.top - probe <= 0) current = "#" + s.id;
      }
      // Bottom of page → force last section active
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        current = "#" + sections[sections.length - 1]?.id;
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm">
          <span className="grid h-7 w-7 place-items-center rounded-sm border border-primary/40 bg-primary/10 text-primary">
            <span className="text-[11px] font-bold">FA</span>
          </span>
          <span className="text-foreground">francesco<span className="text-primary">.</span>angelozzi</span>
          <span className="ml-1 h-4 w-px bg-border" />
          <span className="text-muted-foreground">~/portfolio</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l, i) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className={cn(isActive ? "text-primary" : "text-primary/60")}>0{i + 1}.</span> {l.label}
                  {isActive && (
                    <span className="absolute inset-x-2 -bottom-px h-px bg-primary" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-sm border border-primary/50 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-primary transition-all hover:bg-primary/10 hover:glow-ring md:inline-block"
        >
          ./contact
        </a>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-9 w-9 place-items-center rounded-sm border border-border md:hidden"
        >
          <span className="font-mono text-xs">{open ? "×" : "≡"}</span>
        </button>
      </nav>
      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur md:hidden">
          <ul className="flex flex-col px-6 py-3">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "block border-l-2 py-2 pl-3 font-mono text-sm transition-colors",
                      isActive
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-primary"
                    )}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};