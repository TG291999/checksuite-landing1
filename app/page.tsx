import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Layout,
  ListChecks,
  ShieldCheck,
  Users,
  Zap,
  Clock,
  BarChart3,
  FileText,
  Menu,
  X
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "CheckSuite - Struktur, die bleibt.",
  description: "CheckSuite bringt Ordnung in wiederkehrende Prozesse – mit Pflicht-Checklisten, Vorlagen und klaren Verantwortlichkeiten.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#6D28D9] selection:text-white">

      {/* 1) NAVBAR (Sticky) */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100/80 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6D28D9] text-white transition-transform group-hover:scale-95">
              <Check className="h-5 w-5" strokeWidth={3} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">CheckSuite</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#features" className="hover:text-[#6D28D9] transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-[#6D28D9] transition-colors">Preise</Link>
            <Link href="#faq" className="hover:text-[#6D28D9] transition-colors">FAQ</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="https://app.checksuite.de"
              className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 sm:block"
            >
              Login
            </Link>
            <Button asChild className="bg-[#6D28D9] hover:bg-[#5b21b6] text-white rounded-full px-6 transition-all hover:shadow-lg shadow-purple-500/20">
              <Link href="https://app.checksuite.de">Jetzt starten</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-24 md:pt-32">

        {/* 2) HERO */}
        <section className="container mx-auto px-4 md:px-6 text-center space-y-8 pb-24 border-b border-slate-100">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-[#6D28D9] text-xs font-semibold uppercase tracking-wide border border-purple-100 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6D28D9]"></span>
            </span>
            Jetzt verfügbar
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] max-w-4xl mx-auto">
            Struktur, die <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-purple-400">bleibt.</span>
          </h1>

          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            CheckSuite bringt Ordnung in wiederkehrende Prozesse – mit Pflicht-Checklisten, Vorlagen und klaren Verantwortlichkeiten.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="h-14 px-8 rounded-full text-lg bg-[#6D28D9] hover:bg-[#5b21b6] shadow-xl shadow-purple-500/20 transition-all hover:scale-105 active:scale-95">
              <Link href="https://app.checksuite.de">
                Jetzt starten <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="h-14 px-8 rounded-full text-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100">
              <Link href="#pricing">Preise ansehen</Link>
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 relative max-w-6xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[2rem] blur-3xl opacity-20 -z-10"></div>
            <div className="rounded-2xl overflow-hidden border border-[#6D28D9]/10 bg-white/50 shadow-[0_40px_80px_-20px_rgba(109,40,217,0.15)] ring-1 ring-slate-900/5">
              <img
                src="/assets/dashboard-view.png"
                alt="CheckSuite Dashboard"
                width={1440}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Trust Strip */}
          <div className="pt-12 text-slate-400 text-sm font-medium">
            <p className="mb-6 opacity-60">Vertraut von Teams, die Ergebnisse liefern</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholders for logos (using text for now to be safe, or generic SVGs) */}
              <div className="flex items-center gap-2"><div className="w-6 h-6 bg-slate-400 rounded-full"></div> AgencyOne</div>
              <div className="flex items-center gap-2"><div className="w-6 h-6 bg-slate-400 rounded-full"></div> StudioM</div>
              <div className="flex items-center gap-2"><div className="w-6 h-6 bg-slate-400 rounded-full"></div> Kanzlei Müller</div>
              <div className="flex items-center gap-2"><div className="w-6 h-6 bg-slate-400 rounded-full"></div> TechFlow</div>
            </div>
          </div>
        </section>

        {/* 3) VALUE MANIFESTO */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-12 text-left">
              <div className="col-span-1 md:col-span-3 mb-4">
                <span className="text-[#6D28D9] font-bold tracking-wide uppercase text-sm">Why we built it</span>
                <h2 className="text-3xl font-bold mt-2 text-slate-900">Schluss mit "Ich dachte, du machst das."</h2>
              </div>

              <div className="space-y-4">
                <div className="h-10 w-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                  <X className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Das Chaos beenden</h3>
                <p className="text-slate-600 leading-relaxed">
                  Informationen in Köpfen, Zetteln und E-Mails führen zu Fehlern. Wir zentralisieren dein Wissen.
                </p>
              </div>

              <div className="space-y-4">
                <div className="h-10 w-10 bg-purple-50 rounded-lg flex items-center justify-center text-[#6D28D9]">
                  <Layout className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Prozesse sichtbar machen</h3>
                <p className="text-slate-600 leading-relaxed">
                  Was nicht dokumentiert ist, existiert nicht. CheckSuite macht Abläufe für alle glasklar.
                </p>
              </div>

              <div className="space-y-4">
                <div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Qualität garantieren</h3>
                <p className="text-slate-600 leading-relaxed">
                  Jeder Schritt wird abgehakt. Nichts wird vergessen. Konsistente Ergebnisse, jedes Mal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4) FEATURES GRID (Bento) */}
        <section id="features" className="py-24 bg-slate-50/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Alles, was du brauchst.</h2>
              <p className="text-slate-500 text-lg">Kein Schnickschnack. Nur Funktionen, die wirklich helfen.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Large Card 1 */}
              <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] hover:border-[#6D28D9]/20 transition-all group">
                <div className="flex items-start justify-between mb-8">
                  <div className="h-12 w-12 bg-purple-50 rounded-2xl flex items-center justify-center text-[#6D28D9]">
                    <ListChecks className="w-6 h-6" />
                  </div>
                  <ArrowRight className="text-slate-300 group-hover:text-[#6D28D9] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Smarte Checklisten</h3>
                <p className="text-slate-500 mb-6">Bedingte Logik, Pflichtfelder und detaillierte Anleitungen direkt im Task.</p>
                <div className="h-32 bg-slate-50 rounded-xl border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-4 left-4 right-4 space-y-2 opacity-50">
                    <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] hover:border-[#6D28D9]/20 transition-all">
                <div className="h-12 w-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Wiederkehrende Aufgaben</h3>
                <p className="text-slate-500">Automatische Erstellung: Täglich, Wöchentlich, Monatlich.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] hover:border-[#6D28D9]/20 transition-all">
                <div className="h-12 w-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Team Rollen</h3>
                <p className="text-slate-500">Granulare Rechtevergabe für Admins, Manager und Gäste.</p>
              </div>

              {/* Large Card 4 */}
              <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] hover:border-[#6D28D9]/20 transition-all group">
                <div className="flex items-start justify-between mb-8">
                  <div className="h-12 w-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <ArrowRight className="text-slate-300 group-hover:text-[#6D28D9] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Reporting & Audit</h3>
                <p className="text-slate-500">Wer hat was wann erledigt? Lückenloses Protokoll für Compliance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5) BENEFIT ROWS (Alternating) */}
        <section className="py-32 space-y-32">

          {/* Row 1: Plan */}
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="inline-block px-3 py-1 bg-purple-100 text-[#6D28D9] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  Überblick
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Dein Dashboard für alles.</h2>
                <p className="text-xl text-slate-500 mb-8 leading-relaxed">
                  Sieh auf einen Blick, was heute ansteht. CheckSuite priorisiert Aufgaben automatisch nach Dringlichkeit und Deadline.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm text-[#6D28D9] font-bold">1</div>
                    <span className="font-medium text-slate-700">Persönlicher Tagesfokus</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm text-[#6D28D9] font-bold">2</div>
                    <span className="font-medium text-slate-700">Team-Fortschritt in Echtzeit</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="rounded-2xl overflow-hidden border border-[#6D28D9]/10 shadow-[0_20px_60px_-15px_rgba(109,40,217,0.15)] bg-[#faf5ff] p-2">
                  <img src="/assets/dashboard-view.png" className="rounded-xl w-full h-auto" alt="Dashboard" />
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Execute */}
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2">
                <div className="inline-block px-3 py-1 bg-purple-100 text-[#6D28D9] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  Ausführung
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Fehlerfrei delegieren.</h2>
                <p className="text-xl text-slate-500 mb-8 leading-relaxed">
                  Erstelle Vorlagen für Onboarding, Monatsabschlüsse oder Wartung. Das Team führt nur noch aus – perfekt dokumentiert.
                </p>
                <ul className="space-y-3 text-lg text-slate-600">
                  <li className="flex gap-3"><Check className="text-[#6D28D9] mt-1" /> Eingebettete Anleitungen</li>
                  <li className="flex gap-3"><Check className="text-[#6D28D9] mt-1" /> Pflichtfelder vor Abschluss</li>
                  <li className="flex gap-3"><Check className="text-[#6D28D9] mt-1" /> Automatische Zuweisung</li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="rounded-2xl overflow-hidden border border-[#6D28D9]/10 shadow-[0_20px_60px_-15px_rgba(109,40,217,0.15)] bg-[#faf5ff] p-2">
                  <img src="/assets/checklist-view.png" className="rounded-xl w-full h-auto" alt="Checklist" />
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Detail */}
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="inline-block px-3 py-1 bg-purple-100 text-[#6D28D9] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  Fokus
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Kein Kontext-Switching.</h2>
                <p className="text-xl text-slate-500 mb-8 leading-relaxed">
                  Jede Aufgabe enthält alles, was man braucht: Dateien, Chats, Historie und Sub-Tasks.
                </p>
                <Button variant="link" className="text-[#6D28D9] p-0 h-auto font-bold text-lg hover:no-underline hover:opacity-80">
                  Mehr über Aufgaben erfahren <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="lg:w-1/2">
                <div className="rounded-2xl overflow-hidden border border-[#6D28D9]/10 shadow-[0_20px_60px_-15px_rgba(109,40,217,0.15)] bg-[#faf5ff] p-2">
                  <img src="/assets/task-view.png" className="rounded-xl w-full h-auto" alt="Task Detail" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6) PRICING (Condensed) */}
        <section id="pricing" className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Fair und transparent.</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-start text-left">
                <h3 className="text-xl font-bold">Starter</h3>
                <div className="text-4xl font-bold mt-4 mb-2">0€</div>
                <p className="text-slate-500 mb-8">Für Einzelkämpfer.</p>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-[#6D28D9]" /> 1 Benutzer</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-[#6D28D9]" /> 3 aktive Boards</li>
                </ul>
                <Button asChild className="w-full bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200 rounded-xl h-12">
                  <Link href="https://app.checksuite.de">Kostenlos starten</Link>
                </Button>
              </div>
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-900 shadow-xl flex flex-col items-start text-left text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#6D28D9] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                <h3 className="text-xl font-bold">Team</h3>
                <div className="text-4xl font-bold mt-4 mb-2">29€</div>
                <p className="text-slate-400 mb-8">Für wachsende Teams.</p>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-[#6D28D9]" /> Bis zu 10 Benutzer</li>
                  <li className="flex gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-[#6D28D9]" /> Unbegrenzte Boards</li>
                  <li className="flex gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-[#6D28D9]" /> Priority Support</li>
                </ul>
                <Button asChild className="w-full bg-[#6D28D9] hover:bg-[#5b21b6] text-white rounded-xl h-12 shadow-lg shadow-purple-500/30">
                  <Link href="https://app.checksuite.de">Jetzt wechseln</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 7) FINAL CTA */}
        <section className="py-32 bg-white text-center">
          <div className="container mx-auto px-4 md:px-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Bereit für Ordnung?
            </h2>
            <p className="text-xl text-slate-500 mb-10">
              Starte heute deine kostenlose Testphase. Keine Kreditkarte erforderlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-10 rounded-full text-lg bg-[#6D28D9] hover:bg-[#5b21b6] shadow-xl shadow-purple-500/20">
                <Link href="https://app.checksuite.de">Kostenlos starten</Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-slate-400">Join 500+ teams organizing their work.</p>
          </div>
        </section>

      </main>

      {/* 8) FOOTER */}
      <footer className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#6D28D9] text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                <span className="text-lg font-bold text-slate-900">CheckSuite</span>
              </div>
              <p className="text-sm text-slate-500">Struktur für dein Business.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Produkt</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link href="#features" className="hover:text-[#6D28D9]">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-[#6D28D9]">Preise</Link></li>
                <li><Link href="https://app.checksuite.de" className="hover:text-[#6D28D9]">Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link href="/impressum" className="hover:text-[#6D28D9]">Impressum</Link></li>
                <li><Link href="/datenschutz" className="hover:text-[#6D28D9]">Datenschutz</Link></li>
                <li><Link href="/agb" className="hover:text-[#6D28D9]">AGB</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Social</h4>
              <div className="flex gap-4">
                {/* Icons placeholder */}
                <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} CheckSuite. Made in Germany.
          </div>
        </div>
      </footer>
    </div>
  );
}