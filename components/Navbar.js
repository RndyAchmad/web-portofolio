"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar({ lang, setLang, t }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="border-b border-white/10 sticky top-0 z-50 bg-bg/80 backdrop-blur-md text-text">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between h-16 items-center">

          <div>
            <Link href="/" className="text-xl font-mono font-bold tracking-tighter group flex items-center ">
              <span className="text-primary group-hover:mr-1 transition-all">~/</span>
              <span className="text-white">rndyachmad</span>
              <span className="animate-pulse text-primary ml-1">_</span>
            </Link>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-mono text-text-secondary">
              <Link href="/" className="hover:text-primary transition">{t.nav.home}</Link>
              <Link href="#education" className="hover:text-primary transition">{t.nav.education}</Link>
              <Link href="#tech-stack" className="hover:text-primary transition">{t.nav.tech}</Link>
              <Link href="#experience" className="hover:text-primary transition">{t.nav.experience}</Link>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 font-mono text-[10px] border border-white/10 px-2 py-1 rounded bg-white/5">
              <button onClick={() => setLang('en')} className={`${lang === 'en' ? 'text-primary' : 'text-text-secondary'} hover:text-primary transition`}>EN</button>
              <span className="opacity-20 text-white">|</span>
              <button onClick={() => setLang('id')} className={`${lang === 'id' ? 'text-primary' : 'text-text-secondary'} hover:text-primary transition`}>ID</button>
            </div>

            {/* Mobile Button */}
            <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
              <span className={`h-0.5 w-6 bg-primary transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`h-0.5 w-6 bg-primary transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
              <span className={`h-0.5 w-6 bg-primary transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 bg-bg border-b border-white/10 absolute w-full font-mono text-sm shadow-xl space-y-4 pt-4">
          <Link href="#home" onClick={closeMenu} className="block text-text-secondary">&gt; {t.nav.home}</Link>
          <Link href="#education" onClick={closeMenu} className="block text-text-secondary">&gt; {t.nav.education}</Link>
          <Link href="#tech-stack" onClick={closeMenu} className="block text-text-secondary">&gt; {t.nav.tech}</Link>
          <Link href="#experience" onClick={closeMenu} className="block text-text-secondary">&gt; {t.nav.experience}</Link>
        </div>
      )}
    </nav>
  )
}