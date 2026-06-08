import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ id, index, title, subtitle, children, className }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24", className)}
    >
      <header className={cn("mb-12 flex items-end gap-4", visible && "reveal")}>
        <span className="font-mono text-sm text-primary">{index}</span>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <div className="mb-2 hidden h-px flex-1 bg-gradient-to-r from-border to-transparent sm:block" />
      </header>
      {subtitle && (
        <p className={cn("mb-10 max-w-2xl text-muted-foreground", visible && "reveal")}>
          {subtitle}
        </p>
      )}
      <div className={cn(visible && "reveal")} style={{ animationDelay: "120ms" }}>
        {children}
      </div>
    </section>
  );
};