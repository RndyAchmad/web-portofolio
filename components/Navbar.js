"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ lang, setLang, t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="border-b border-white/10 sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md text-white">
      {/* max-w-7xl untuk wadah yang lebih lebar */}
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex justify-between h-16 items-center">

          <div>
            <Link href="/" className="text-lg font-mono font-bold tracking-tighter group flex items-center">
              <span className="text-orange-500 group-hover:mr-1 transition-all">~/</span>
              <span className="text-white">rndyachmad</span>
              <span className="animate-pulse text-orange-500 ml-1">_</span>
            </Link>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-6 text-sm font-mono text-gray-400">
              <Link href="#home" className="hover:text-orange-500 transition">{t.nav.home}</Link>
              <Link href="#education" className="hover:text-orange-500 transition">{t.nav.education}</Link>
              <Link href="#tech-stack" className="hover:text-orange-500 transition">{t.nav.tech}</Link>
              <Link href="#experience" className="hover:text-orange-500 transition">{t.nav.experience}</Link>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] border border-white/10 px-2 py-1 rounded-md bg-[#161616]">
              <button onClick={() => setLang('en')} className={`${lang === 'en' ? 'text-orange-500 font-bold' : 'text-gray-500'} hover:text-orange-500 transition px-1`}>EN</button>
              <span className="opacity-20 text-white">|</span>
              <button onClick={() => setLang('id')} className={`${lang === 'id' ? 'text-orange-500 font-bold' : 'text-gray-500'} hover:text-orange-500 transition px-1`}>ID</button>
            </div>

            <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              <span className={`h-0.5 w-5 bg-orange-500 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`h-0.5 w-5 bg-orange-500 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
              <span className={`h-0.5 w-5 bg-orange-500 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden absolute w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-64 py-3" : "max-h-0 py-0 border-transparent"}`}>
        <div className="flex flex-col px-5 space-y-3 font-mono text-sm">
          <Link href="#home" onClick={closeMenu} className="block text-gray-400 hover:text-orange-500 hover:pl-2 transition-all">&gt; {t.nav.home}</Link>
          <Link href="#education" onClick={closeMenu} className="block text-gray-400 hover:text-orange-500 hover:pl-2 transition-all">&gt; {t.nav.education}</Link>
          <Link href="#tech-stack" onClick={closeMenu} className="block text-gray-400 hover:text-orange-500 hover:pl-2 transition-all">&gt; {t.nav.tech}</Link>
          <Link href="#experience" onClick={closeMenu} className="block text-gray-400 hover:text-orange-500 hover:pl-2 transition-all">&gt; {t.nav.experience}</Link>
        </div>
      </div>
    </nav>
  );
}