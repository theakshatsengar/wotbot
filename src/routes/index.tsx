import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Instagram, Twitter, Github } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#FF4D00] text-black overflow-x-hidden">
      <Nav />
      <Hero />
      <SkewedMarquee />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = ["Work", "Studio", "Process", "Contact"];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between">
      <a href="#" className="font-display text-xl tracking-tight">KIN/01</a>
      <div className="bg-black rounded-full px-2 py-2 flex items-center gap-1 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="font-mono-tech uppercase text-white px-4 py-1.5 rounded-full transition-colors hover:bg-white hover:text-black"
            style={{ fontSize: "12px" }}
          >
            {l}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform"><Instagram size={18} /></a>
        <a href="#" aria-label="Twitter" className="hover:scale-110 transition-transform"><Twitter size={18} /></a>
        <a href="#" aria-label="Github" className="hover:scale-110 transition-transform"><Github size={18} /></a>
      </div>
    </nav>
  );
}

function ScrollIndicator() {
  return (
    <div className="relative w-36 h-36 flex items-center justify-center">
      <svg viewBox="0 0 144 144" className="absolute inset-0 animate-spin-slow">
        <defs>
          <path id="circlePath" d="M 72,72 m -56,0 a 56,56 0 1,1 112,0 a 56,56 0 1,1 -112,0" />
        </defs>
        <text style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em" }} fill="#000">
          <textPath href="#circlePath">
            SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •
          </textPath>
        </text>
      </svg>
      <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
        <ArrowDown className="text-[#FF4D00]" size={20} />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className="min-h-screen flex flex-col justify-end pt-32">
      <h1 className="font-display text-center px-2" style={{ fontSize: "16vw" }}>
        KINETIC<span className="inline-block">/</span>ORANGE
      </h1>
      <div className="border-t-2 border-black mt-8">
        <div className="grid grid-cols-3 items-center px-6 py-6 gap-6">
          <div className="font-mono-tech uppercase text-xs sm:text-sm">
            <div className="opacity-60">Based in</div>
            <div className="font-bold mt-1">Berlin → Worldwide</div>
          </div>
          <div className="flex justify-center">
            <ScrollIndicator />
          </div>
          <div className="font-mono-tech uppercase text-xs sm:text-sm text-right">
            <div className="opacity-60">Independent Studio</div>
            <div className="font-bold mt-1 leading-tight">Brand Systems<br/>Motion / Code</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function SkewedMarquee() {
  const text1 = "DESIGN THAT MOVES — TYPOGRAPHY THAT SPEAKS — ";
  const text2 = "BRUTALISM • MOTION • CODE • IDENTITY • ";
  return (
    <section className="bg-black -skew-y-2 my-20 py-12 overflow-hidden border-y-2 border-black">
      <div className="skew-y-2">
        <div className="overflow-hidden whitespace-nowrap py-2">
          <div className="inline-flex animate-marquee">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="font-display text-[#FF4D00] pr-8" style={{ fontSize: "10vw" }}>{text1}</span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden whitespace-nowrap py-2">
          <div className="inline-flex animate-marquee-reverse">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="font-display text-white/80 pr-8" style={{ fontSize: "10vw" }}>{text2}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { n: "01", title: "Brand Identity", tags: ["Logo", "Systems", "Guidelines"] },
  { n: "02", title: "Web Design", tags: ["UI/UX", "Webflow", "Framer"] },
  { n: "03", title: "Motion Design", tags: ["After Effects", "Lottie", "WebGL"] },
  { n: "04", title: "Art Direction", tags: ["Campaigns", "Editorial", "Strategy"] },
];

function Services() {
  return (
    <section id="studio" className="bg-black text-white py-24">
      <div className="px-6 mb-12 flex items-end justify-between border-b border-white/20 pb-6">
        <div className="font-mono-tech uppercase text-xs opacity-60">[ Services / 2026 ]</div>
        <div className="font-mono-tech uppercase text-xs opacity-60">04 — Disciplines</div>
      </div>
      <ul>
        {services.map((s) => (
          <li key={s.n} className="group border-t border-white/20 last:border-b transition-colors hover:bg-white/5">
            <div className="px-6 py-8 flex items-center gap-8">
              <span className="font-mono-tech text-[#FF4D00] text-sm w-12 shrink-0">{s.n}</span>
              <div className="flex-1 flex items-center gap-8 transition-transform duration-300 group-hover:translate-x-4">
                <h3 className="font-display uppercase" style={{ fontSize: "7vw", lineHeight: 0.9 }}>{s.title}</h3>
                <div className="hidden md:flex gap-2 ml-auto">
                  {s.tags.map((t) => (
                    <span key={t} className="font-mono-tech uppercase text-xs px-3 py-1 border border-white/40 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="text-[#FF4D00] opacity-0 -rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-300" size={56} strokeWidth={2.5} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-[#FF4D00] py-32 px-6 text-center">
      <h2 className="font-display" style={{ fontSize: "14vw", lineHeight: 0.9 }}>
        LET'S<br/>BUILD/LOUD
      </h2>
      <button className="mt-12 bg-black text-white font-mono-tech uppercase text-sm px-10 py-5 rounded-full transition-transform hover:scale-110">
        Start a Project →
      </button>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#FF4D00] border-t-2 border-black px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-mono-tech uppercase" style={{ fontSize: "12px" }}>
        © 2026 KINETIC STUDIO — ALL RIGHTS RESERVED
      </div>
      <div className="flex gap-6 font-mono-tech uppercase" style={{ fontSize: "12px" }}>
        <a href="#" className="hover:underline">Instagram</a>
        <a href="#" className="hover:underline">Twitter</a>
        <a href="#" className="hover:underline">LinkedIn</a>
        <a href="#" className="hover:underline">Github</a>
      </div>
    </footer>
  );
}

