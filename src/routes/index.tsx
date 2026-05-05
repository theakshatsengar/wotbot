import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Check, CheckCheck, Bot, MessageCircle, AlertTriangle, Clock, TrendingUp, Menu, X } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#25D366] text-black overflow-x-hidden">
      <Nav />
      <Hero />
      <SkewedMarquee />
      <PainStats />
      <ChatDemo />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = ["Builder", "Templates", "Pricing", "Docs"];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between relative">
      <a href="#" className="font-display text-xl tracking-tight">WABOT/01</a>
      <div className="hidden md:flex bg-black rounded-full px-2 py-2 items-center gap-1 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
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
        <a href="#cta" className="hidden md:inline-flex bg-black text-white font-mono-tech uppercase px-5 py-2 rounded-full hover:bg-white hover:text-black transition-colors" style={{ fontSize: "12px" }}>
        Start Free →
        </a>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-white bg-black text-white"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <div
        className={`absolute top-full left-0 right-0 md:hidden transition-all ${isOpen ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"}`}
      >
        <div className="mx-6 mt-3 bg-black rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-mono-tech uppercase text-white px-4 py-2 rounded-full transition-colors hover:bg-white hover:text-black"
                style={{ fontSize: "12px" }}
                onClick={() => setIsOpen(false)}
              >
                {l}
              </a>
            ))}
            <a
              href="#cta"
              className="mt-2 inline-flex items-center justify-center bg-white text-black font-mono-tech uppercase px-4 py-2 rounded-full transition-colors hover:bg-[#25D366]"
              style={{ fontSize: "12px" }}
              onClick={() => setIsOpen(false)}
            >
              Start Free →
            </a>
          </div>
        </div>
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
    <header className="min-h-[70vh] md:min-h-screen flex flex-col justify-start md:justify-end pt-20 md:pt-32">
      <div className="px-6 max-w-5xl mx-auto text-center mb-8">
        <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-1.5 font-mono-tech uppercase text-[11px] bg-white">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          For founders drowning in WhatsApp DMs
        </div>
      </div>
      <h1 className="font-display text-center px-2" style={{ fontSize: "13vw" }}>
        NEVER MISS<br/>A LEAD<span className="inline-block">/</span>AGAIN.
      </h1>
      <p className="font-mono-tech uppercase text-center mt-8 px-6 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
        Your AI sales rep on WhatsApp. Replies in 3 seconds, sounds like you,<br className="hidden md:block"/>
        qualifies the lead, books the call, closes the sale — 24/7.
      </p>
      <div className="border-t-2 border-black mt-12">
        <div className="grid grid-cols-3 items-center px-6 py-6 gap-6">
          <div className="font-mono-tech uppercase text-xs sm:text-sm">
            <div className="opacity-60">Avg. Reply</div>
            <div className="font-bold mt-1">3 Seconds. Always.</div>
          </div>
          <div className="flex justify-center">
            <ScrollIndicator />
          </div>
          <div className="font-mono-tech uppercase text-xs sm:text-sm text-right">
            <div className="opacity-60">Lead Capture</div>
            <div className="font-bold mt-1 leading-tight">100% Of DMs<br/>Answered + Logged</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function SkewedMarquee() {
  const text1 = "ANSWER EVERY LEAD — CLOSE WHILE YOU SLEEP — ";
  const text2 = "ZERO MISSED DMS • 3-SECOND REPLIES • 24/7 SALES • ";
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
            SOUNDS LIKE YOU.<br/>SELLS LIKE YOU.
          </h2>
          <p className="text-white/80 mt-6 text-base leading-relaxed">
            We train your bot on your products, prices, FAQs, and tone of voice.
            Every customer gets a reply that feels personal — because it knows
            their order, their history, and what they asked you last Tuesday.
          </p>
          <p className="font-mono-tech text-[#25D366] mt-4 text-xs uppercase">
            → No "press 1 for support" robot energy. Promise.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["GPT-4", "Trained on your data", "Shopify", "Stripe", "Calendly"].map((t) => (
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
              <div className="font-bold text-white text-sm">Sara from Acme</div>
              <div className="font-mono-tech text-[10px] text-[#25D366] uppercase">● Online — replies in 3s</div>
            </div>
          </div>
          <div className="space-y-2 py-4 min-h-[280px]">
            <ChatBubble from="user" text="hey saw your insta — do you ship to dubai?" time="23:47" />
            <ChatBubble from="bot" text="Hey Aman! 👋 Yes, we ship to Dubai — 3-day delivery, free over $200. Were you eyeing the Linen Set or something else?" time="23:47" />
            <ChatBubble from="user" text="the linen one in beige, size M" time="23:48" />
            <ChatBubble from="bot" text="Great pick — 4 left in M beige. Want me to drop a secure checkout link here? You'll be done in 30 seconds 🛒" time="23:48" />
            <ChatBubble from="user" text="yes pls" time="23:48" />
            <ChatBubble from="bot" text="Done ✅ acme.co/pay/9F2A — order locked for 15 min. I'll DM tracking the moment it ships." time="23:48" />
          </div>
          <div className="border-t border-white/10 pt-3 font-mono-tech text-[10px] uppercase text-white/50">
            → Real flow. Closed at 11:48 PM. You were asleep.
          </div>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { icon: AlertTriangle, n: "67%", label: "of WhatsApp leads ghost you because the reply came too late" },
  { icon: Clock, n: "4.2 hrs", label: "average response time for businesses replying manually" },
  { icon: TrendingUp, n: "3.8×", label: "more conversions when leads get a reply in under 60 seconds" },
];

function PainStats() {
  return (
    <section className="bg-[#25D366] py-24 px-6 border-y-2 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono-tech uppercase text-xs mb-4">[ The Problem / 01 ]</div>
        <h2 className="font-display max-w-4xl" style={{ fontSize: "6vw", lineHeight: 0.95 }}>
          EVERY UNREAD DM IS A REFUND YOU NEVER GAVE — TO A COMPETITOR.
        </h2>
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed">
          You're getting flooded with WhatsApp enquiries. Pricing questions at 11pm.
          "Is this still available?" on a Sunday. "Can you ship to…?" while you're at lunch.
          You reply when you can — but by then they've already bought from someone else.
        </p>
        <div className="grid md:grid-cols-3 gap-0 mt-12 border-2 border-black">
          {stats.map((s, i) => (
            <div key={s.n} className={`p-8 bg-white ${i > 0 ? "border-t-2 md:border-t-0 md:border-l-2 border-black" : ""}`}>
              <s.icon size={28} strokeWidth={2.5} />
              <div className="font-display mt-4" style={{ fontSize: "56px", lineHeight: 1 }}>{s.n}</div>
              <p className="font-mono-tech uppercase text-xs mt-3 leading-relaxed opacity-80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { n: "01", title: "Zero Missed Leads", tags: ["24/7 Replies", "Auto-Capture", "CRM Sync"] },
  { n: "02", title: "Trained On You", tags: ["Your Tone", "Your Catalog", "Your FAQs"] },
  { n: "03", title: "Closes The Sale", tags: ["Checkout Links", "Booking", "Upsells"] },
  { n: "04", title: "Hands It Off", tags: ["Live Handoff", "Smart Alerts", "Inbox"] },
];

function Services() {
  return (
    <section id="builder" className="bg-black text-white py-24">
      <div className="px-6 mb-12 flex items-end justify-between border-b border-white/20 pb-6">
        <div className="font-mono-tech uppercase text-xs opacity-60">[ What It Does / 03 ]</div>
        <div className="font-mono-tech uppercase text-xs opacity-60">04 — Outcomes</div>
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

const testimonials = [
  { quote: "I used to lose half my enquiries because I couldn't reply fast enough. First month with WABOT we did $14k from DMs that would've gone unanswered.", name: "Priya R.", role: "Founder, Linen Label" },
  { quote: "It genuinely sounds like me. Customers tell me 'your team is so quick' — there is no team. It's just the bot.", name: "Marcus O.", role: "Owner, Coastal Surf Co." },
  { quote: "Booked 38 consultations in 2 weeks while I was on vacation. Setup took an afternoon.", name: "Dr. Lena K.", role: "Aesthetics Clinic" },
];

function Testimonials() {
  return (
    <section className="bg-[#25D366] py-24 px-6 border-y-2 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono-tech uppercase text-xs mb-4">[ Receipts / 04 ]</div>
        <h2 className="font-display max-w-4xl" style={{ fontSize: "7vw", lineHeight: 0.9 }}>
          OPERATORS SLEEP.<br/>BOTS SELL.
        </h2>
        <div className="grid md:grid-cols-3 gap-0 mt-12 border-2 border-black bg-white">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`p-8 ${i > 0 ? "border-t-2 md:border-t-0 md:border-l-2 border-black" : ""}`}>
              <p className="text-base leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 pt-4 border-t-2 border-black">
                <div className="font-display uppercase text-sm">{t.name}</div>
                <div className="font-mono-tech text-xs uppercase opacity-60 mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const plans = [
  { name: "Solo", price: "0", per: "Free forever", features: ["Up to 100 chats/mo", "Auto-replies + lead capture", "Try the AI on your own data", "Setup in 5 minutes"], cta: "Catch My First Lead", highlight: false },
  { name: "Operator", price: "49", per: "/ month", features: ["3,000 chats/mo", "AI trained on your catalog & tone", "Checkout & booking links", "CRM + Shopify + Calendly", "Smart human handoff"], cta: "Start 14-Day Trial", highlight: true },
  { name: "Scale", price: "199", per: "/ month", features: ["25,000+ chats/mo", "Multi-agent + multi-number", "Custom AI fine-tuning", "Dedicated onboarding", "Priority WhatsApp support"], cta: "Book A Demo", highlight: false },
];

function Pricing() {
  return (
    <section id="pricing" className="bg-[#25D366] py-24 px-6 border-t-2 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between border-b-2 border-black pb-6 mb-12">
          <div>
            <div className="font-mono-tech uppercase text-xs mb-2">[ Pricing / 05 ]</div>
            <h2 className="font-display" style={{ fontSize: "8vw", lineHeight: 0.9 }}>ONE CLOSED DEAL<br/>PAYS FOR THE YEAR.</h2>
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

const faqs = [
  { q: "Will it actually sound like me?", a: "Yes. We train your bot on your past chats, product catalog, FAQs and brand voice. Customers can't tell — and we ship a 'review mode' so you approve replies for the first week." },
  { q: "What if a question is too complex?", a: "The bot detects intent and hands off to you in real time with full context — so you jump in only when it actually matters." },
  { q: "Do I need a developer?", a: "No. If you can use WhatsApp, you can launch a bot. Most customers go live the same afternoon." },
  { q: "Does it work with my existing WhatsApp number?", a: "Yes — we connect via the official WhatsApp Business API. Same number, same brand, infinitely faster." },
  { q: "What if I don't recoup the cost?", a: "You will. But if you don't see ROI in 30 days, we refund you. No tickets, no fine print." },
];

function FAQ() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono-tech uppercase text-xs text-[#25D366] mb-4">[ Questions / 06 ]</div>
        <h2 className="font-display" style={{ fontSize: "7vw", lineHeight: 0.9 }}>STILL THINKING?</h2>
        <div className="mt-12 border-t border-white/20">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-white/20 py-6">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-display uppercase text-lg sm:text-xl pr-6">{f.q}</span>
                <span className="font-mono-tech text-[#25D366] text-2xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-white/70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="bg-[#25D366] py-32 px-6 text-center border-t-2 border-black">
      <div className="font-mono-tech uppercase text-xs mb-6 opacity-70">[ Last Call / 07 ]</div>
      <h2 className="font-display" style={{ fontSize: "13vw", lineHeight: 0.9 }}>
        STOP LOSING<br/>LEADS TONIGHT.
      </h2>
      <p className="max-w-xl mx-auto mt-8 text-base sm:text-lg">
        Plug in your WhatsApp number. Train the bot on your business in 5 minutes.
        Wake up to qualified leads, booked calls, and closed sales.
      </p>
      <p className="font-mono-tech uppercase text-xs mt-6 opacity-70">No credit card • Live in 5 minutes • 30-day money-back</p>
      <button className="mt-10 bg-black text-white font-mono-tech uppercase text-sm px-10 py-5 rounded-full transition-transform hover:scale-110 inline-flex items-center gap-3">
        <MessageCircle size={18} /> Catch My Next Lead Free →
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

