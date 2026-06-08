import { Section } from "./Section";

export const About = () => (
  <Section
    id="about"
    index="01."
    title="About"
    subtitle="Who I am, what I care about, and how I work."
  >
    <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          I'm <span className="text-foreground">Francesco Angelozzi</span>, an
          ITS Academy graduate with a curriculum in
          <span className="text-foreground"> Cyber-Security</span> (Chieti–Lanciano,
          EQF 5). Based in Pescara, I've been passionate about cyber-security
          and ethical hacking since I was a child — and I've turned that
          curiosity into a real technical path.
        </p>
        <p>
          My approach is methodical: understand how something works before
          using it, and understand how it breaks before defending it. I'm
          ambitious and always looking to deepen my knowledge — across
          networks, programming and offensive/defensive security.
        </p>
        <p>
          I work well autonomously and integrate easily into a team.
          Professionalism, punctuality and respect for deadlines come standard.
        </p>
      </div>

      <ul className="grid gap-3 font-mono text-sm">
        {[
          ["status", "ITS graduate"],
          ["focus", "cyber-security · ethical hacking"],
          ["level", "EQF 5"],
          ["languages", "italian native · english B1/C1"],
          ["location", "Pescara, Italy"],
          ["born", "02 Nov 2002"],
        ].map(([k, v]) => (
          <li
            key={k}
            className="flex items-center justify-between rounded-sm border border-border bg-card/60 px-4 py-3 backdrop-blur"
          >
            <span className="text-muted-foreground">{k}</span>
            <span className="text-foreground">{v}</span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);