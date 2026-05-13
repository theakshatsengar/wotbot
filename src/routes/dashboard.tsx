import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  MessageCircle, Bot, Send, Search, Settings, BarChart3, Users, Inbox,
  Zap, CheckCheck, ArrowUpRight, Plus, Circle, LogOut,
  Trash2, Edit3, Power, Phone, Mail, Tag, Save,
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
  const [tab, setTab] = useState<"overview" | "chats" | "training" | "automations" | "contacts" | "settings">("overview");
  const active = CHATS.find((c) => c.id === activeId)!;

  return (
    <div className="min-h-screen bg-[#0B0F12] text-neutral-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col border-r-2 border-black">
        <div className="min-h-[80px] px-5 py-4 border-b-2 border-[#2A323A] flex items-center justify-between">
          <Link to="/" className="font-display text-lg">WABOT/01</Link>
          <span className="font-mono-tech text-[10px] text-[#25D366] uppercase">● Live</span>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          <SideBtn icon={BarChart3} label="Overview" active={tab === "overview"} onClick={() => setTab("overview")} />
          <SideBtn icon={Inbox} label="Chats" badge={3} active={tab === "chats"} onClick={() => setTab("chats")} />
          <SideBtn icon={Bot} label="Bot Training" active={tab === "training"} onClick={() => setTab("training")} />
          <SideBtn icon={Zap} label="Automations" active={tab === "automations"} onClick={() => setTab("automations")} />
          <SideBtn icon={Users} label="Contacts" active={tab === "contacts"} onClick={() => setTab("contacts")} />
          <SideBtn icon={Settings} label="Settings" active={tab === "settings"} onClick={() => setTab("settings")} />
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
        <header className="min-h-[80px] border-b-2 border-[#2A323A] bg-[#12171C] px-6 py-4 flex items-center justify-between text-neutral-100">
          <div>
            <div className="font-mono-tech uppercase text-[11px] opacity-70">[ {HEADERS[tab].kicker} ]</div>
            <h1 className="font-display text-2xl uppercase mt-0.5">{HEADERS[tab].title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-[#11161B] border-2 border-[#2A323A] px-3 py-2 text-neutral-100">
              <Search size={14} />
              <input placeholder="Search chats…" className="bg-transparent outline-none font-mono-tech text-xs uppercase text-white placeholder:text-white/40 w-48" />
            </div>
            <button className="bg-[#11161B] text-white font-mono-tech uppercase text-xs px-4 py-2.5 rounded-full inline-flex items-center gap-2 hover:bg-[#25D366] hover:text-black border-2 border-[#2A323A] hover:border-[#25D366] transition-colors">
              <Plus size={14} /> New Bot
            </button>
          </div>
        </header>

        {tab === "overview" && <Overview />}
        {tab === "chats" && <ChatsView chats={CHATS} active={active} onSelect={setActiveId} />}
        {tab === "training" && <Training />}
        {tab === "automations" && <Automations />}
        {tab === "contacts" && <Contacts />}
        {tab === "settings" && <SettingsView />}
      </main>
    </div>
  );
}

const HEADERS: Record<string, { kicker: string; title: string }> = {
  overview: { kicker: "Dashboard / 01", title: "Overview" },
  chats: { kicker: "Inbox / 02", title: "All Conversations" },
  training: { kicker: "Brain / 03", title: "Bot Training" },
  automations: { kicker: "Flows / 04", title: "Automations" },
  contacts: { kicker: "CRM / 05", title: "Contacts" },
  settings: { kicker: "Config / 06", title: "Settings" },
};

function Section({ children }: { children: React.ReactNode }) {
  return <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#0B0F12]">{children}</div>;
}

function Card({ title, action, children }: { title: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-[#151A1E] border-2 border-[#2A323A] text-neutral-100">
      <div className="px-5 py-3 border-b-2 border-[#2A323A] flex items-center justify-between">
        <h3 className="font-display uppercase text-sm">{title}</h3>
        {action}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono-tech uppercase text-[10px] text-white/60">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

const inputCls =
  "w-full bg-[#0F1317] border-2 border-[#2A323A] px-3 py-2 text-sm text-neutral-100 outline-none focus:bg-[#12171C] placeholder:text-neutral-500";

/* ────── Bot Training ────── */
function Training() {
  const [tone, setTone] = useState("Friendly");
  const [name, setName] = useState("Sara");
  const [greeting, setGreeting] = useState("Hey 👋 I'm Sara from Acme — how can I help?");
  const [faqs, setFaqs] = useState([
    { q: "Do you ship internationally?", a: "Yes — to 40+ countries. Free over $200." },
    { q: "What's your return policy?", a: "30 days, no questions asked." },
  ]);
  const [docs, setDocs] = useState(["product-catalog.pdf", "brand-voice.md", "shipping-policy.txt"]);

  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-6">
        <Card title="Bot Identity">
          <div className="space-y-4">
            <Field label="Bot Name"><input className={inputCls} value={name} onChange={(e) => setName(e.target.value)} /></Field>
            <Field label="Tone">
              <div className="flex gap-2 flex-wrap">
                {["Friendly", "Professional", "Playful", "Direct"].map((t) => (
                  <button key={t} onClick={() => setTone(t)}
                    className={`font-mono-tech uppercase text-[10px] px-3 py-1.5 border-2 border-[#2A323A] ${tone === t ? "bg-[#25D366] text-black" : "bg-[#11161B] text-white hover:bg-white/5"}`}>
                    {t}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="Greeting Message">
              <textarea rows={3} className={inputCls} value={greeting} onChange={(e) => setGreeting(e.target.value)} />
            </Field>
            <button className="bg-[#11161B] text-white font-mono-tech uppercase text-xs px-4 py-2.5 rounded-full inline-flex items-center gap-2 border-2 border-[#2A323A] hover:bg-[#25D366] hover:text-black hover:border-[#25D366]">
              <Save size={14} /> Save Identity
            </button>
          </div>
        </Card>

        <Card title="Knowledge Base" action={<span className="font-mono-tech text-[10px] uppercase opacity-60">{docs.length} files</span>}>
          <ul className="space-y-2 mb-4">
            {docs.map((d, i) => (
              <li key={d} className="flex items-center justify-between border-2 border-[#2A323A] px-3 py-2">
                <span className="font-mono-tech text-xs">{d}</span>
                <button onClick={() => setDocs(docs.filter((_, j) => j !== i))} className="opacity-60 hover:opacity-100"><Trash2 size={14} /></button>
              </li>
            ))}
          </ul>
          <button onClick={() => setDocs([...docs, `new-doc-${docs.length + 1}.pdf`])}
            className="bg-[#25D366] text-black font-mono-tech uppercase text-xs px-4 py-2.5 rounded-full inline-flex items-center gap-2 border-2 border-[#25D366] hover:bg-[#1FB859]">
            <Plus size={14} /> Upload File
          </button>
        </Card>
      </div>

      <Card title="Trained FAQs" action={
        <button onClick={() => setFaqs([...faqs, { q: "New question", a: "New answer" }])}
          className="font-mono-tech uppercase text-[10px] px-3 py-1.5 border-2 border-[#2A323A] hover:bg-[#25D366] hover:text-black hover:border-[#25D366] inline-flex items-center gap-1">
          <Plus size={12} /> Add
        </button>
      }>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border-2 border-[#2A323A] p-3 space-y-2">
              <input className={inputCls} value={f.q} onChange={(e) => { const n = [...faqs]; n[i].q = e.target.value; setFaqs(n); }} />
              <textarea rows={2} className={inputCls} value={f.a} onChange={(e) => { const n = [...faqs]; n[i].a = e.target.value; setFaqs(n); }} />
              <button onClick={() => setFaqs(faqs.filter((_, j) => j !== i))}
                className="font-mono-tech uppercase text-[10px] inline-flex items-center gap-1 hover:text-red-700">
                <Trash2 size={12} /> Remove
              </button>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}

/* ────── Automations ────── */
type Flow = { id: string; name: string; trigger: string; action: string; on: boolean; runs: number };
function Automations() {
  const [flows, setFlows] = useState<Flow[]>([
    { id: "a1", name: "Welcome New Lead", trigger: "First message received", action: "Send greeting + ask intent", on: true, runs: 247 },
    { id: "a2", name: "Abandoned Cart Nudge", trigger: "Checkout link unclicked > 30m", action: "Send reminder + 10% code", on: true, runs: 38 },
    { id: "a3", name: "After-Hours Auto-Reply", trigger: "Message between 10pm–7am", action: "Send 'we'll respond by 9am'", on: false, runs: 121 },
    { id: "a4", name: "Hand Off To Human", trigger: "User asks for 'human' or 'agent'", action: "Notify team + pause bot", on: true, runs: 14 },
    { id: "a5", name: "Post-Purchase Thank You", trigger: "Payment confirmed", action: "Send receipt + review request", on: true, runs: 63 },
  ]);

  return (
    <Section>
      <Card title="Active Flows" action={
        <button className="font-mono-tech uppercase text-[10px] px-3 py-1.5 border-2 border-[#2A323A] hover:bg-[#25D366] hover:text-black hover:border-[#25D366] inline-flex items-center gap-1">
          <Plus size={12} /> New Flow
        </button>
      }>
        <div className="divide-y-2 divide-[#2A323A] -m-5">
          {flows.map((f) => (
            <div key={f.id} className="p-5 flex items-start gap-4">
              <button
                onClick={() => setFlows(flows.map((x) => x.id === f.id ? { ...x, on: !x.on } : x))}
                className={`shrink-0 w-12 h-12 border-2 border-[#2A323A] flex items-center justify-center ${f.on ? "bg-[#25D366]" : "bg-[#11161B]"}`}
              >
                <Power size={16} className={f.on ? "text-black" : "text-white/40"} />
              </button>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-display uppercase text-sm">{f.name}</h4>
                  <span className={`font-mono-tech uppercase text-[10px] px-2 py-0.5 border border-[#2A323A] ${f.on ? "bg-[#25D366] text-black" : "bg-[#11161B] text-white/60"}`}>
                    {f.on ? "Live" : "Paused"}
                  </span>
                </div>
                <div className="mt-2 grid sm:grid-cols-2 gap-2 font-mono-tech text-[11px] uppercase">
                  <div><span className="opacity-60">When → </span>{f.trigger}</div>
                  <div><span className="opacity-60">Then → </span>{f.action}</div>
                </div>
                <div className="mt-2 font-mono-tech text-[10px] uppercase opacity-60">▲ {f.runs} runs this week</div>
              </div>
              <button className="opacity-60 hover:opacity-100"><Edit3 size={14} /></button>
              <button onClick={() => setFlows(flows.filter((x) => x.id !== f.id))} className="opacity-60 hover:opacity-100"><Trash2 size={14} /></button>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}

/* ────── Contacts ────── */
type Contact = { id: string; name: string; phone: string; tags: string[]; status: "Lead" | "Customer" | "Cold"; last: string; spent: string };
function Contacts() {
  const [contacts] = useState<Contact[]>([
    { id: "c1", name: "Aman K.", phone: "+971 50 392 1184", tags: ["Linen", "Dubai"], status: "Customer", last: "23:48", spent: "$284" },
    { id: "c2", name: "Priya R.", phone: "+91 98765 41203", tags: ["Silk", "Returning"], status: "Lead", last: "23:31", spent: "$0" },
    { id: "c3", name: "Marcus O.", phone: "+44 7700 900812", tags: ["Support"], status: "Customer", last: "22:14", spent: "$540" },
    { id: "c4", name: "Lena K.", phone: "+49 151 22334455", tags: ["Booking"], status: "Customer", last: "21:02", spent: "$120" },
    { id: "c5", name: "Sara T.", phone: "+1 415 555 0192", tags: ["Order"], status: "Customer", last: "19:48", spent: "$78" },
    { id: "c6", name: "Diego H.", phone: "+34 612 88 21 33", tags: ["Wholesale"], status: "Cold", last: "Yesterday", spent: "$0" },
  ]);
  const [q, setQ] = useState("");
  const filtered = contacts.filter((c) => c.name.toLowerCase().includes(q.toLowerCase()) || c.phone.includes(q));

  return (
    <Section>
      <div className="flex items-center gap-3">
        <div className="flex-1 flex items-center gap-2 bg-[#11161B] border-2 border-[#2A323A] px-3 py-2 text-neutral-100">
          <Search size={14} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name or phone…"
            className="bg-transparent outline-none font-mono-tech text-xs uppercase text-white placeholder:text-white/40 flex-1" />
        </div>
        <button className="bg-[#11161B] text-white font-mono-tech uppercase text-xs px-4 py-2.5 rounded-full inline-flex items-center gap-2 border-2 border-[#2A323A] hover:bg-[#25D366] hover:text-black hover:border-[#25D366]">
          <Plus size={14} /> Add Contact
        </button>
      </div>

      <div className="bg-[#151A1E] border-2 border-[#2A323A] overflow-x-auto text-neutral-100">
        <table className="w-full text-sm">
          <thead className="bg-[#0F1317] text-neutral-100 font-mono-tech uppercase text-[10px]">
            <tr>
              <th className="text-left px-4 py-3">Name</th>
              <th className="text-left px-4 py-3">Phone</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Tags</th>
              <th className="text-left px-4 py-3">Spent</th>
              <th className="text-left px-4 py-3">Last</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-t border-[#2A323A] hover:bg-[#25D366]/20">
                <td className="px-4 py-3 font-bold flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#25D366] border-2 border-[#2A323A] flex items-center justify-center font-display text-xs">{c.name[0]}</div>
                  {c.name}
                </td>
                <td className="px-4 py-3 font-mono-tech text-xs">{c.phone}</td>
                <td className="px-4 py-3">
                  <span className={`font-mono-tech uppercase text-[10px] px-2 py-0.5 border-2 border-[#2A323A] ${
                    c.status === "Customer" ? "bg-[#25D366] text-black" : c.status === "Lead" ? "bg-[#11161B] text-white" : "bg-[#0F1317] text-white"
                  }`}>{c.status}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1 flex-wrap">
                    {c.tags.map((t) => (
                      <span key={t} className="font-mono-tech text-[10px] uppercase px-1.5 py-0.5 border border-[#2A323A] inline-flex items-center gap-1">
                        <Tag size={9} />{t}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 font-mono-tech text-xs">{c.spent}</td>
                <td className="px-4 py-3 font-mono-tech text-[10px] uppercase opacity-60">{c.last}</td>
                <td className="px-4 py-3 text-right">
                  <button className="opacity-60 hover:opacity-100 mr-2"><MessageCircle size={14} /></button>
                  <button className="opacity-60 hover:opacity-100"><Phone size={14} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

/* ────── Settings ────── */
function SettingsView() {
  const [biz, setBiz] = useState("Acme Studio");
  const [num, setNum] = useState("+1 415 555 0100");
  const [email, setEmail] = useState("hello@acme.co");
  const [hours, setHours] = useState("Mon–Fri, 9am–6pm");
  const [notif, setNotif] = useState({ hot: true, handoff: true, daily: false });

  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-6">
        <Card title="Business Profile">
          <div className="space-y-4">
            <Field label="Business Name"><input className={inputCls} value={biz} onChange={(e) => setBiz(e.target.value)} /></Field>
            <Field label="WhatsApp Number">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <input className={inputCls} value={num} onChange={(e) => setNum(e.target.value)} />
              </div>
            </Field>
            <Field label="Reply-To Email">
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <input className={inputCls} value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </Field>
            <Field label="Business Hours"><input className={inputCls} value={hours} onChange={(e) => setHours(e.target.value)} /></Field>
          </div>
        </Card>

        <Card title="Notifications">
          <div className="space-y-3">
            {([
              ["hot", "Notify me on hot leads"],
              ["handoff", "Notify me on bot handoffs"],
              ["daily", "Send daily summary email"],
            ] as const).map(([k, label]) => (
              <label key={k} className="flex items-center justify-between border-2 border-[#2A323A] px-3 py-2.5">
                <span className="font-mono-tech uppercase text-[11px]">{label}</span>
                <button onClick={() => setNotif({ ...notif, [k]: !notif[k] })}
                  className={`w-12 h-6 border-2 border-[#2A323A] relative ${notif[k] ? "bg-[#25D366]" : "bg-[#11161B]"}`}>
                  <span className={`absolute top-0 ${notif[k] ? "right-0" : "left-0"} w-5 h-[18px] bg-white transition-all`} />
                </button>
              </label>
            ))}
          </div>
        </Card>

        <Card title="Plan & Billing">
          <div className="font-mono-tech text-[11px] uppercase text-white/60">Current Plan</div>
          <div className="font-display text-2xl uppercase mt-1">Operator — $49/mo</div>
          <p className="font-mono-tech text-[11px] uppercase mt-3 text-white/60">Renews May 28, 2026 • 247 / 5,000 conversations used</p>
          <div className="w-full h-2 bg-white/10 border border-[#2A323A] mt-2"><div className="h-full bg-[#25D366]" style={{ width: "5%" }} /></div>
          <div className="flex gap-2 mt-4">
            <button className="bg-[#11161B] text-white font-mono-tech uppercase text-xs px-4 py-2.5 rounded-full border-2 border-[#2A323A] hover:bg-[#25D366] hover:text-black hover:border-[#25D366]">Upgrade</button>
            <button className="font-mono-tech uppercase text-xs px-4 py-2.5 rounded-full border-2 border-[#2A323A] hover:bg-white/5 hover:text-white">Manage Billing</button>
          </div>
        </Card>

        <Card title="Danger Zone">
          <p className="font-mono-tech text-[11px] uppercase text-white/60">These actions are permanent.</p>
          <div className="flex gap-2 mt-4 flex-wrap">
            <button className="font-mono-tech uppercase text-xs px-4 py-2.5 rounded-full border-2 border-[#2A323A] hover:bg-white/5 hover:text-white">Pause Bot</button>
            <button className="font-mono-tech uppercase text-xs px-4 py-2.5 rounded-full border-2 border-[#2A323A] bg-[#11161B] text-white hover:bg-red-700 hover:border-red-700">Delete Workspace</button>
          </div>
        </Card>
      </div>
    </Section>
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
    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#0B0F12]">
      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-[#2A323A] bg-[#151A1E]">
        {STATS.map((s, i) => (
          <div key={s.label} className={`p-5 ${i > 0 ? "border-l-0 md:border-l-2 border-[#2A323A]" : ""} ${i >= 2 ? "border-t-2 md:border-t-0 border-[#2A323A]" : ""}`}>
            <div className="font-mono-tech uppercase text-[10px] opacity-60">{s.label}</div>
            <div className="font-display mt-2" style={{ fontSize: "32px", lineHeight: 1 }}>{s.value}</div>
            <div className="font-mono-tech uppercase text-[10px] mt-2 text-white/60">▲ {s.delta}</div>
          </div>
        ))}
      </div>

      {/* Two-column area */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Activity */}
        <div className="lg:col-span-2 bg-[#151A1E] border-2 border-[#2A323A]">
          <div className="px-5 py-3 border-b-2 border-[#2A323A] flex items-center justify-between">
            <h3 className="font-display uppercase text-sm">Last 24 Hours</h3>
            <span className="font-mono-tech text-[10px] uppercase opacity-60">Live</span>
          </div>
          <div className="p-5">
            <div className="flex items-end gap-2 h-40">
              {[40, 65, 30, 80, 55, 90, 70, 45, 85, 60, 95, 75].map((h, i) => (
                <div key={i} className="flex-1 bg-[#2A323A] hover:bg-[#25D366] transition-colors" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex justify-between mt-3 font-mono-tech text-[10px] uppercase opacity-60">
              <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>Now</span>
            </div>
          </div>
        </div>

        {/* Recent leads */}
        <div className="bg-[#151A1E] border-2 border-[#2A323A]">
          <div className="px-5 py-3 border-b-2 border-[#2A323A] flex items-center justify-between">
            <h3 className="font-display uppercase text-sm">Hot Leads</h3>
            <ArrowUpRight size={14} />
          </div>
          <ul>
            {CHATS.slice(0, 4).map((c, i) => (
              <li key={c.id} className={`px-5 py-3 flex items-center gap-3 ${i > 0 ? "border-t border-white/10" : ""}`}>
                <div className="w-8 h-8 rounded-full bg-[#25D366] border-2 border-[#2A323A] flex items-center justify-center font-display text-xs">{c.name[0]}</div>
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
      <div className="bg-[#11161B] text-neutral-100 border-2 border-[#2A323A] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="font-mono-tech uppercase text-[10px] text-[#25D366]">[ Bot Status ]</div>
          <h3 className="font-display uppercase mt-1" style={{ fontSize: "28px", lineHeight: 1 }}>Sara from Acme — Online</h3>
          <p className="font-mono-tech uppercase text-[10px] opacity-60 mt-2">Trained on 142 products • 38 FAQs • Tone: friendly</p>
        </div>
        <button className="bg-[#25D366] text-black font-mono-tech uppercase text-xs px-5 py-3 rounded-full hover:bg-[#1FB859] border-2 border-[#25D366]">
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
      <div className="w-80 border-r-2 border-[#2A323A] bg-[#151A1E] overflow-y-auto text-neutral-100">
        <div className="px-4 py-3 border-b-2 border-[#2A323A] flex gap-2 font-mono-tech uppercase text-[10px]">
          <button className="px-2 py-1 bg-[#0F1317] text-[#25D366] border border-[#2A323A]">All</button>
          <button className="px-2 py-1 hover:bg-white/5">Bot</button>
          <button className="px-2 py-1 hover:bg-white/5">Human</button>
          <button className="px-2 py-1 hover:bg-white/5">Closed</button>
        </div>
        <ul>
          {chats.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => onSelect(c.id)}
                className={`w-full text-left px-4 py-3 border-b border-[#2A323A] flex items-center gap-3 ${
                  c.id === active.id ? "bg-[#25D366] text-black" : "hover:bg-white/5"
                }`}
              >
                <div className="w-9 h-9 rounded-full bg-[#25D366] border-2 border-[#2A323A] flex items-center justify-center font-display text-sm shrink-0">{c.name[0]}</div>
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
        <div className="px-5 py-3 border-b-2 border-[#2A323A] bg-[#0F1317] text-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#25D366] border-2 border-white flex items-center justify-center font-display text-black text-sm">{active.name[0]}</div>
            <div>
              <div className="text-sm font-bold">{active.name}</div>
              <div className="font-mono-tech text-[10px] uppercase text-[#25D366]">● {active.status === "human" ? "Awaiting You" : active.status === "bot" ? "Bot Handling" : "Closed"}</div>
            </div>
          </div>
          <button className="font-mono-tech uppercase text-[10px] px-3 py-1.5 border border-white/30 rounded-full hover:bg-white/10">
            Take Over
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-2">
          {active.messages.map((m, i) => {
            const isBot = m.from === "bot";
            return (
              <div key={i} className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-[70%] px-3 py-2 border-2 border-[#2A323A] ${isBot ? "bg-[#151A1E]" : "bg-[#25D366]"}`}>
                  <p className={`text-sm ${isBot ? "text-neutral-100" : "text-black"} leading-snug`}>{m.text}</p>
                  <div className={`flex items-center justify-end gap-1 mt-1 text-[10px] ${isBot ? "text-white/50" : "text-black/60"} font-mono-tech`}>
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
          className="border-t-2 border-[#2A323A] bg-[#0F1317] p-3 flex items-center gap-2"
        >
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type a message…"
            className="flex-1 bg-[#11161B] border-2 border-[#2A323A] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#25D366]"
          />
          <button type="submit" className="bg-[#25D366] text-black p-3 border-2 border-[#25D366] hover:bg-[#1FB859]">
            <Send size={16} />
          </button>
        </form>
      </div>

      {/* Right insight panel */}
      <aside className="hidden xl:flex w-72 border-l-2 border-[#2A323A] bg-[#151A1E] text-neutral-100 flex-col">
        <div className="px-5 py-3 border-b-2 border-[#2A323A] flex items-center justify-between">
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
            <div className="inline-block bg-[#25D366] border-2 border-[#2A323A] px-2 py-0.5 font-mono-tech text-[10px] uppercase text-black">High</div>
          </div>
          <div>
            <div className="font-mono-tech text-[10px] uppercase opacity-60">Tags</div>
            <div className="flex flex-wrap gap-1 mt-1">
              {["Linen", "Dubai", "M"].map((t) => (
                <span key={t} className="font-mono-tech text-[10px] uppercase px-2 py-0.5 border border-[#2A323A]">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-auto p-5 border-t-2 border-[#2A323A]">
          <button className="w-full bg-[#11161B] text-white font-mono-tech uppercase text-xs px-4 py-3 rounded-full hover:bg-[#25D366] hover:text-black border-2 border-[#2A323A] hover:border-[#25D366]">
            Mark As Won →
          </button>
        </div>
      </aside>
    </div>
  );
}