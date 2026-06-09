import { useState } from "react";
import { Section } from "./Section";
import { Check } from "lucide-react";

const EMAIL = "fa.angelozzi@gmail.com";
const PHONE_DISPLAY = "+39 391 353 5706";
const PHONE_HREF = "+393913535706";

export const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2200);

    window.location.href = `mailto:${EMAIL}`;
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PHONE_DISPLAY);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2200);

    window.location.href = `tel:${PHONE_HREF}`;
  };

  return (
    <Section
      id="contact"
      index="05."
      title="Contact"
      subtitle="For job opportunities, collaborations or just a technical conversation."
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-md border border-border bg-card/60 p-8 backdrop-blur">
          <p className="font-mono text-sm text-primary">$ contact --open</p>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Let's talk.
          </h3>

          <p className="mt-3 max-w-md text-muted-foreground">
            I reply to e-mails quickly. Reach out for cyber-security roles,
            internships, freelance work or to share an interesting problem.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="relative">
              <a
                href={`mailto:${EMAIL}`}
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-all hover:glow-ring cursor-pointer"
              >
                send an email →
              </a>

              {emailCopied && (
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-mono text-emerald-400 animate-fade-in whitespace-nowrap">
                  <Check className="h-3.5 w-3.5" />
                  Email copied
                </span>
              )}
            </div>

            <div className="relative">
              <a
                href={`tel:${PHONE_HREF}`}
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary cursor-pointer"
              >
                call me
              </a>

              {phoneCopied && (
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-mono text-emerald-400 animate-fade-in whitespace-nowrap">
                  <Check className="h-3.5 w-3.5" />
                  Number copied
                </span>
              )}
            </div>

            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              back to top
            </a>
          </div>
        </div>

        <ul className="grid gap-3 font-mono text-sm">
          <li className="flex items-center justify-between gap-3 rounded-sm border border-border bg-card/60 px-4 py-3 backdrop-blur">
            <span className="text-muted-foreground">email</span>
            <span className="truncate text-foreground">{EMAIL}</span>
          </li>

          <li className="flex items-center justify-between gap-3 rounded-sm border border-border bg-card/60 px-4 py-3 backdrop-blur">
            <span className="text-muted-foreground">phone</span>
            <span className="truncate text-foreground">{PHONE_DISPLAY}</span>
          </li>

          <li className="flex items-center justify-between gap-3 rounded-sm border border-border bg-card/60 px-4 py-3 backdrop-blur">
            <span className="text-muted-foreground">location</span>
            <span className="truncate text-foreground">Pescara, Italy</span>
          </li>

          <li className="flex items-center justify-between gap-3 rounded-sm border border-border bg-card/60 px-4 py-3 backdrop-blur">
            <span className="text-muted-foreground">github</span>

            <a
              href="https://github.com/FrancescoAngelozzi"
              target="_blank"
              rel="noopener noreferrer"
              className="truncate text-primary hover:underline"
            >
              FrancescoAngelozzi
            </a>
          </li>

          <li className="flex items-center justify-between gap-3 rounded-sm border border-border bg-card/60 px-4 py-3 backdrop-blur">
            <span className="text-muted-foreground">availability</span>
            <span className="truncate text-foreground">
              open to opportunities
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
};
