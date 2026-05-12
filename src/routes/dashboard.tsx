import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  MessageCircle, Bot, Send, Search, Settings, BarChart3, Users, Inbox,
  Zap, CheckCheck, ArrowUpRight, Plus, Circle, LogOut,
} from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — WABOT" },
      { name: "description", content: "Manage your WhatsApp bot, chats, and conversions." },
    ],
  }),
  component: Dashboard,
});

type Chat = {
  id: string;
  name: string;
  preview: string;
  time: string;
  unread: number;
  status: "bot" | "human" | "closed";
  messages: { from: "user" | "bot"; text: string; time: string }[];
};

const CHATS: Chat[] = [
  {
    id: "1", name: "Aman K.", preview: "yes pls", time: "23:48", unread: 0, status: "closed",
    messages: [
      { from: "user", text: "hey saw your insta — do you ship to dubai?", time: "23:47" },
      { from: "bot", text: "Hey Aman! 👋 Yes, we ship to Dubai — 3-day delivery, free over $200.", time: "23:47" },
      { from: "user", text: "the linen one in beige, size M", time: "23:48" },
      { from: "bot", text: "Great pick — 4 left. Drop a checkout link?", time: "23:48" },
      { from: "user", text: "yes pls", time: "23:48" },
      { from: "bot", text: "Done ✅ acme.co/pay/9F2A — locked for 15 min.", time: "23:48" },
    ],
  },
  {
    id: "2", name: "Priya R.", preview: "what's your return policy?", time: "23:31", unread: 2, status: "bot",
    messages: [
      { from: "user", text: "hi do you have the silk scarf in black", time: "23:30" },
      { from: "bot", text: "Yes! In stock. Want me to send the link?", time: "23:30" },
      { from: "user", text: "what's your return policy?", time: "23:31" },
    ],
  },
  {
    id: "3", name: "Marcus O.", preview: "can I speak to someone?", time: "22:14", unread: 1, status: "human",
    messages: [
      { from: "user", text: "I got the wrong size", time: "22:12" },
      { from: "bot", text: "Sorry about that — handing you to our team now.", time: "22:13" },
      { from: "user", text: "can I speak to someone?", time: "22:14" },
    ],
  },
  {
    id: "4", name: "Lena K.", preview: "perfect, booked!", time: "21:02", unread: 0, status: "closed",
    messages: [
      { from: "user", text: "do you have slots tomorrow?", time: "21:00" },
      { from: "bot", text: "Yes — 11am or 4pm. Which works?", time: "21:01" },
      { from: "user", text: "4pm", time: "21:01" },
      { from: "bot", text: "Booked ✅ confirmation sent.", time: "21:02" },
      { from: "user", text: "perfect, booked!", time: "21:02" },
    ],
  },
  {
    id: "5", name: "Sara T.", preview: "thanks!", time: "19:48", unread: 0, status: "closed",
    messages: [
      { from: "user", text: "order #2841 status?", time: "19:47" },
      { from: "bot", text: "Out for delivery — arrives by 8pm today 🚚", time: "19:47" },
      { from: "user", text: "thanks!", time: "19:48" },
    ],
  },
];

const STATS = [
  { label: "Replies Today", value: "247", delta: "+18%" },
  { label: "Avg. Response", value: "2.8s", delta: "−0.4s" },
  { label: "Leads Captured", value: "63", delta: "+12" },
  { label: "Conversions", value: "$4,820", delta: "+$1.2k" },
];

function Dashboard() {
  const [activeId, setActiveId] = useState(CHATS[0].id);
  const [tab, setTab] = useState<"overview" | "chats">("overview");
  const active = CHATS.find((c) => c.id === activeId)!;

  return (
    <div className="min-h-screen bg-[#25D366] text-black flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col border-r-2 border-black">
        <div className="px-5 py-5 border-b border-white/15 flex items-center justify-between">
          <Link to="/" className="font-display text-lg">WABOT/01</Link>
          <span className="font-mono-tech text-[10px] text-[#25D366] uppercase">● Live</span>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          <SideBtn icon={BarChart3} label="Overview" active={tab === "overview"} onClick={() => setTab("overview")} />
          <SideBtn icon={Inbox} label="Chats" badge={3} active={tab === "chats"} onClick={() => setTab("chats")} />
          <SideBtn icon={Bot} label="Bot Training" />
          <SideBtn icon={Zap} label="Automations" />
          <SideBtn icon={Users} label="Contacts" />
          <SideBtn icon={Settings} label="Settings" />
        </nav>
        <div className="p-3 border-t border-white/15">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="w-8 h-8 rounded-full bg-[#25D366] border-2 border-white flex items-center justify-center font-display text-black text-sm">A</div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold truncate">Acme Studio</div>
              <div className="font-mono-tech text-[10px] uppercase opacity-60">Operator Plan</div>
            </div>
            <Link to="/" className="opacity-60 hover:opacity-100"><LogOut size={14} /></Link>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="border-b-2 border-black bg-[#25D366] px-6 py-4 flex items-center justify-between">
          <div>
            <div className="font-mono-tech uppercase text-[11px] opacity-70">[ {tab === "overview" ? "Dashboard / 01" : "Inbox / 02"} ]</div>
            <h1 className="font-display text-2xl uppercase mt-0.5">{tab === "overview" ? "Overview" : "All Conversations"}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-white border-2 border-black px-3 py-2">
              <Search size={14} />
              <input placeholder="Search chats…" className="bg-transparent outline-none font-mono-tech text-xs uppercase placeholder:text-black/40 w-48" />
            </div>
            <button className="bg-black text-white font-mono-tech uppercase text-xs px-4 py-2.5 rounded-full inline-flex items-center gap-2 hover:bg-white hover:text-black border-2 border-black transition-colors">
              <Plus size={14} /> New Bot
            </button>
          </div>
        </header>

        {tab === "overview" ? <Overview /> : <ChatsView chats={CHATS} active={active} onSelect={setActiveId} />}
      </main>
    </div>
  );
}

function SideBtn({ icon: Icon, label, active, badge, onClick }: { icon: any; label: string; active?: boolean; badge?: number; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded font-mono-tech uppercase text-[11px] transition-colors ${
        active ? "bg-[#25D366] text-black" : "text-white hover:bg-white/10"
      }`}
    >
      <Icon size={14} />
      <span className="flex-1 text-left">{label}</span>
      {badge ? (
        <span className={`text-[10px] px-1.5 py-0.5 ${active ? "bg-black text-[#25D366]" : "bg-[#25D366] text-black"}`}>{badge}</span>
      ) : null}
    </button>
  );
}

function Overview() {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#25D366]">
      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-black bg-white">
        {STATS.map((s, i) => (
          <div key={s.label} className={`p-5 ${i > 0 ? "border-l-0 md:border-l-2 border-black" : ""} ${i >= 2 ? "border-t-2 md:border-t-0 border-black" : ""}`}>
            <div className="font-mono-tech uppercase text-[10px] opacity-60">{s.label}</div>
            <div className="font-display mt-2" style={{ fontSize: "32px", lineHeight: 1 }}>{s.value}</div>
            <div className="font-mono-tech uppercase text-[10px] mt-2 text-black/70">▲ {s.delta}</div>
          </div>
        ))}
      </div>

      {/* Two-column area */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Activity */}
        <div className="lg:col-span-2 bg-white border-2 border-black">
          <div className="px-5 py-3 border-b-2 border-black flex items-center justify-between">
            <h3 className="font-display uppercase text-sm">Last 24 Hours</h3>
            <span className="font-mono-tech text-[10px] uppercase opacity-60">Live</span>
          </div>
          <div className="p-5">
            <div className="flex items-end gap-2 h-40">
              {[40, 65, 30, 80, 55, 90, 70, 45, 85, 60, 95, 75].map((h, i) => (
                <div key={i} className="flex-1 bg-black hover:bg-[#25D366] transition-colors" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex justify-between mt-3 font-mono-tech text-[10px] uppercase opacity-60">
              <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>Now</span>
            </div>
          </div>
        </div>

        {/* Recent leads */}
        <div className="bg-white border-2 border-black">
          <div className="px-5 py-3 border-b-2 border-black flex items-center justify-between">
            <h3 className="font-display uppercase text-sm">Hot Leads</h3>
            <ArrowUpRight size={14} />
          </div>
          <ul>
            {CHATS.slice(0, 4).map((c, i) => (
              <li key={c.id} className={`px-5 py-3 flex items-center gap-3 ${i > 0 ? "border-t border-black/10" : ""}`}>
                <div className="w-8 h-8 rounded-full bg-[#25D366] border-2 border-black flex items-center justify-center font-display text-xs">{c.name[0]}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold truncate">{c.name}</div>
                  <div className="font-mono-tech text-[10px] uppercase opacity-60">{c.status}</div>
                </div>
                <div className="font-mono-tech text-[10px] uppercase">{c.time}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bot status */}
      <div className="bg-black text-white border-2 border-black p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="font-mono-tech uppercase text-[10px] text-[#25D366]">[ Bot Status ]</div>
          <h3 className="font-display uppercase mt-1" style={{ fontSize: "28px", lineHeight: 1 }}>Sara from Acme — Online</h3>
          <p className="font-mono-tech uppercase text-[10px] opacity-60 mt-2">Trained on 142 products • 38 FAQs • Tone: friendly</p>
        </div>
        <button className="bg-[#25D366] text-black font-mono-tech uppercase text-xs px-5 py-3 rounded-full hover:bg-white border-2 border-[#25D366]">
          Retrain Bot →
        </button>
      </div>
    </div>
  );
}

function ChatsView({ chats, active, onSelect }: { chats: Chat[]; active: Chat; onSelect: (id: string) => void }) {
  const [draft, setDraft] = useState("");
  return (
    <div className="flex-1 flex min-h-0">
      {/* Chat list */}
      <div className="w-80 border-r-2 border-black bg-white overflow-y-auto">
        <div className="px-4 py-3 border-b-2 border-black flex gap-2 font-mono-tech uppercase text-[10px]">
          <button className="px-2 py-1 bg-black text-[#25D366]">All</button>
          <button className="px-2 py-1 hover:bg-black/10">Bot</button>
          <button className="px-2 py-1 hover:bg-black/10">Human</button>
          <button className="px-2 py-1 hover:bg-black/10">Closed</button>
        </div>
        <ul>
          {chats.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => onSelect(c.id)}
                className={`w-full text-left px-4 py-3 border-b border-black/10 flex items-center gap-3 ${
                  c.id === active.id ? "bg-[#25D366]" : "hover:bg-black/5"
                }`}
              >
                <div className="w-9 h-9 rounded-full bg-[#25D366] border-2 border-black flex items-center justify-center font-display text-sm shrink-0">{c.name[0]}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold truncate">{c.name}</span>
                    <span className="font-mono-tech text-[10px] opacity-60">{c.time}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-0.5">
                    <span className="text-xs opacity-70 truncate">{c.preview}</span>
                    {c.unread > 0 && <span className="bg-black text-[#25D366] font-mono-tech text-[10px] px-1.5 rounded-full">{c.unread}</span>}
                  </div>
                  <div className="font-mono-tech text-[9px] uppercase mt-1 opacity-60 flex items-center gap-1">
                    <Circle size={6} fill="currentColor" /> {c.status}
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Conversation */}
      <div className="flex-1 flex flex-col bg-[#0B141A] min-w-0">
        <div className="px-5 py-3 border-b-2 border-black bg-black text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#25D366] border-2 border-white flex items-center justify-center font-display text-black text-sm">{active.name[0]}</div>
            <div>
              <div className="text-sm font-bold">{active.name}</div>
              <div className="font-mono-tech text-[10px] uppercase text-[#25D366]">● {active.status === "human" ? "Awaiting You" : active.status === "bot" ? "Bot Handling" : "Closed"}</div>
            </div>
          </div>
          <button className="font-mono-tech uppercase text-[10px] px-3 py-1.5 border border-white/40 rounded-full hover:bg-white hover:text-black">
            Take Over
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-2">
          {active.messages.map((m, i) => {
            const isBot = m.from === "bot";
            return (
              <div key={i} className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-[70%] px-3 py-2 border-2 border-black ${isBot ? "bg-white" : "bg-[#DCF8C6]"}`}>
                  <p className="text-sm text-black leading-snug">{m.text}</p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-black/50 font-mono-tech">
                    {m.time}
                    {!isBot && <CheckCheck size={12} className="text-[#25D366]" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setDraft(""); }}
          className="border-t-2 border-black bg-black p-3 flex items-center gap-2"
        >
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type a message…"
            className="flex-1 bg-white border-2 border-[#25D366] px-3 py-2.5 text-sm outline-none placeholder:text-black/40"
          />
          <button type="submit" className="bg-[#25D366] text-black p-3 border-2 border-[#25D366] hover:bg-white">
            <Send size={16} />
          </button>
        </form>
      </div>

      {/* Right insight panel */}
      <aside className="hidden xl:flex w-72 border-l-2 border-black bg-white flex-col">
        <div className="px-5 py-3 border-b-2 border-black flex items-center justify-between">
          <h3 className="font-display uppercase text-sm">Lead Info</h3>
          <MessageCircle size={14} />
        </div>
        <div className="p-5 space-y-4 text-sm">
          <div>
            <div className="font-mono-tech text-[10px] uppercase opacity-60">Name</div>
            <div className="font-bold">{active.name}</div>
          </div>
          <div>
            <div className="font-mono-tech text-[10px] uppercase opacity-60">Source</div>
            <div>Instagram DM</div>
          </div>
          <div>
            <div className="font-mono-tech text-[10px] uppercase opacity-60">Intent</div>
            <div className="inline-block bg-[#25D366] border-2 border-black px-2 py-0.5 font-mono-tech text-[10px] uppercase">High</div>
          </div>
          <div>
            <div className="font-mono-tech text-[10px] uppercase opacity-60">Tags</div>
            <div className="flex flex-wrap gap-1 mt-1">
              {["Linen", "Dubai", "M"].map((t) => (
                <span key={t} className="font-mono-tech text-[10px] uppercase px-2 py-0.5 border border-black">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-auto p-5 border-t-2 border-black">
          <button className="w-full bg-black text-white font-mono-tech uppercase text-xs px-4 py-3 rounded-full hover:bg-[#25D366] hover:text-black border-2 border-black">
            Mark As Won →
          </button>
        </div>
      </aside>
    </div>
  );
}