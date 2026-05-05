import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Instagram, Twitter, Github, Check, CheckCheck, Bot, Zap, MessageCircle, Workflow } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#25D366] text-black overflow-x-hidden">
      <Nav />
      <Hero />
      <SkewedMarquee />
      <ChatDemo />
      <Services />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = ["Builder", "Templates", "Pricing", "Docs"];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between">
      <a href="#" className="font-display text-xl tracking-tight">WABOT/01</a>
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
      <a href="#cta" className="hidden md:inline-flex bg-black text-white font-mono-tech uppercase px-5 py-2 rounded-full hover:bg-white hover:text-black transition-colors" style={{ fontSize: "12px" }}>
        Start Free →
      </a>
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
            BUILD • DEPLOY • CHAT • BUILD • DEPLOY • CHAT •
          </textPath>
        </text>
      </svg>
      <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
        <ArrowDown className="text-[#25D366]" size={20} />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className="min-h-screen flex flex-col justify-end pt-32">
      <h1 className="font-display text-center px-2" style={{ fontSize: "16vw" }}>
        WHATS<span className="inline-block">/</span>BOT
      </h1>
      <div className="border-t-2 border-black mt-8">
        <div className="grid grid-cols-3 items-center px-6 py-6 gap-6">
          <div className="font-mono-tech uppercase text-xs sm:text-sm">
            <div className="opacity-60">Build Time</div>
            <div className="font-bold mt-1">5 Min → Live Bot</div>
          </div>
          <div className="flex justify-center">
            <ScrollIndicator />
          </div>
          <div className="font-mono-tech uppercase text-xs sm:text-sm text-right">
            <div className="opacity-60">No-Code Builder</div>
            <div className="font-bold mt-1 leading-tight">Drag / Drop<br/>AI / Flows</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function SkewedMarquee() {
  const text1 = "AUTOMATE CONVERSATIONS — CONVERT VISITORS — ";
  const text2 = "WHATSAPP • AI • FLOWS • CRM • API • ";
  return (
    <section className="bg-black -skew-y-2 my-20 py-12 overflow-hidden border-y-2 border-black">
      <div className="skew-y-2">
        <div className="overflow-hidden whitespace-nowrap py-2">
          <div className="inline-flex animate-marquee">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="font-display text-[#25D366] pr-8" style={{ fontSize: "10vw" }}>{text1}</span>
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

function ChatBubble({ from, text, time }: { from: "bot" | "user"; text: string; time: string }) {
  const isBot = from === "bot";
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div className={`max-w-[80%] px-3 py-2 border-2 border-black ${isBot ? "bg-white" : "bg-[#DCF8C6]"}`}>
        <p className="text-sm text-black leading-snug">{text}</p>
        <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-black/50 font-mono-tech">
          {time}
          {!isBot && <CheckCheck size={12} className="text-[#25D366]" />}
        </div>
      </div>
    </div>
  );
}

function ChatDemo() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="font-mono-tech uppercase text-xs text-[#25D366] mb-4">[ Live Demo / 02 ]</div>
          <h2 className="font-display text-white" style={{ fontSize: "6vw", lineHeight: 0.9 }}>
            CONVERSATIONS<br/>THAT CONVERT.
          </h2>
          <p className="font-mono-tech text-white/70 mt-6 text-sm uppercase leading-relaxed">
            Drag flows. Connect AI. Ship in minutes.<br/>
            Your customers chat. Your bot closes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["GPT-4", "Webhooks", "Shopify", "Stripe", "Calendly"].map((t) => (
              <span key={t} className="font-mono-tech uppercase text-xs px-3 py-1.5 border-2 border-white/40">{t}</span>
            ))}
          </div>
        </div>
        <div className="bg-[#0B141A] border-2 border-[#25D366] p-4">
          <div className="flex items-center gap-3 pb-3 border-b border-white/10">
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center border-2 border-black">
              <Bot className="text-black" size={20} />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Acme Bot</div>
              <div className="font-mono-tech text-[10px] text-[#25D366] uppercase">● Online — typing fast</div>
            </div>
          </div>
          <div className="space-y-2 py-4 min-h-[280px]">
            <ChatBubble from="bot" text="👋 Hey! Welcome to Acme. What can I help you with today?" time="10:42" />
            <ChatBubble from="user" text="I want to track my order #4821" time="10:42" />
            <ChatBubble from="bot" text="Found it! 📦 Your order shipped today and arrives Thursday. Want delivery updates here?" time="10:42" />
            <ChatBubble from="user" text="Yes please" time="10:43" />
            <ChatBubble from="bot" text="Done ✅ I'll ping you the moment it moves." time="10:43" />
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { n: "01", title: "Visual Builder", tags: ["Drag/Drop", "Flows", "Triggers"] },
  { n: "02", title: "AI Replies", tags: ["GPT-4", "RAG", "Memory"] },
  { n: "03", title: "Broadcasts", tags: ["Campaigns", "Segments", "Schedule"] },
  { n: "04", title: "Integrations", tags: ["Shopify", "HubSpot", "Webhooks"] },
];

function Services() {
  return (
    <section id="builder" className="bg-black text-white py-24">
      <div className="px-6 mb-12 flex items-end justify-between border-b border-white/20 pb-6">
        <div className="font-mono-tech uppercase text-xs opacity-60">[ Features / 2026 ]</div>
        <div className="font-mono-tech uppercase text-xs opacity-60">04 — Modules</div>
      </div>
      <ul>
        {services.map((s) => (
          <li key={s.n} className="group border-t border-white/20 last:border-b transition-colors hover:bg-white/5">
            <div className="px-6 py-8 flex items-center gap-8">
              <span className="font-mono-tech text-[#25D366] text-sm w-12 shrink-0">{s.n}</span>
              <div className="flex-1 flex items-center gap-8 transition-transform duration-300 group-hover:translate-x-4">
                <h3 className="font-display uppercase" style={{ fontSize: "7vw", lineHeight: 0.9 }}>{s.title}</h3>
                <div className="hidden md:flex gap-2 ml-auto">
                  {s.tags.map((t) => (
                    <span key={t} className="font-mono-tech uppercase text-xs px-3 py-1 border border-white/40 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="text-[#25D366] opacity-0 -rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-300" size={56} strokeWidth={2.5} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

const plans = [
  { name: "Starter", price: "0", per: "Free forever", features: ["1 bot", "500 messages/mo", "Visual builder", "Community support"], cta: "Start Free", highlight: false },
  { name: "Growth", price: "49", per: "/ month", features: ["10 bots", "25k messages/mo", "AI replies (GPT-4)", "Integrations + API", "Priority support"], cta: "Start 14-Day Trial", highlight: true },
  { name: "Scale", price: "199", per: "/ month", features: ["Unlimited bots", "250k messages/mo", "Custom AI training", "SSO + audit logs", "Dedicated CSM"], cta: "Talk to Sales", highlight: false },
];

function Pricing() {
  return (
    <section id="pricing" className="bg-[#25D366] py-24 px-6 border-t-2 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between border-b-2 border-black pb-6 mb-12">
          <div>
            <div className="font-mono-tech uppercase text-xs mb-2">[ Pricing / 03 ]</div>
            <h2 className="font-display" style={{ fontSize: "8vw", lineHeight: 0.9 }}>SHIP CHEAP.<br/>SCALE LOUD.</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-0 border-2 border-black">
          {plans.map((p, i) => (
            <div key={p.name} className={`p-8 ${i > 0 ? "border-t-2 md:border-t-0 md:border-l-2 border-black" : ""} ${p.highlight ? "bg-black text-white" : "bg-white text-black"}`}>
              <div className="font-mono-tech uppercase text-xs opacity-60">{p.name}</div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display" style={{ fontSize: "64px" }}>${p.price}</span>
                <span className="font-mono-tech text-xs uppercase opacity-60">{p.per}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={16} className={p.highlight ? "text-[#25D366] mt-0.5 shrink-0" : "text-black mt-0.5 shrink-0"} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full font-mono-tech uppercase text-xs px-6 py-4 rounded-full border-2 border-black transition-colors ${p.highlight ? "bg-[#25D366] text-black hover:bg-white" : "bg-black text-white hover:bg-[#25D366] hover:text-black"}`}>
                {p.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="bg-[#25D366] py-32 px-6 text-center border-t-2 border-black">
      <h2 className="font-display" style={{ fontSize: "14vw", lineHeight: 0.9 }}>
        LAUNCH<br/>YOUR/BOT
      </h2>
      <p className="font-mono-tech uppercase text-xs mt-8 opacity-70">No credit card • 5-minute setup • Cancel anytime</p>
      <button className="mt-8 bg-black text-white font-mono-tech uppercase text-sm px-10 py-5 rounded-full transition-transform hover:scale-110 inline-flex items-center gap-3">
        <MessageCircle size={18} /> Build My Bot Free →
      </button>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#25D366] border-t-2 border-black px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-mono-tech uppercase" style={{ fontSize: "12px" }}>
        © 2026 WABOT — ALL RIGHTS RESERVED
      </div>
      <div className="flex gap-6 font-mono-tech uppercase" style={{ fontSize: "12px" }}>
        <a href="#" className="hover:underline">Docs</a>
        <a href="#" className="hover:underline">API</a>
        <a href="#" className="hover:underline">Twitter</a>
        <a href="#" className="hover:underline">Github</a>
      </div>
    </footer>
  );
}

