export const Footer = () => (
  <footer className="mt-10 border-t border-border/60">
    <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <span>
        © {new Date().getFullYear()} Francesco Angelozzi · all rights reserved
      </span>
      <span className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
        Pescara, Italy · cyber-security · ethical hacking
      </span>
    </div>
  </footer>
);