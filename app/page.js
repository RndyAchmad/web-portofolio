"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { translations } from "@/constants/translations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechAnimation from "@/components/TechAnimation";

// SINGLE SOURCE OF TRUTH - Link Sosial
const SOCIAL_LINKS = {
  github: "https://github.com/rndyachmad",
  linkedin: "https://linkedin.com/in/rendyachmad/",
  email: "mailto:rendyachmad55@gmail.com?subject=Hello&body=Hi%20Rendy,"
};

export default function Home() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved) setLang(saved);
  }, []);

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = translations[lang];

  return (
    <div className="bg-bg text-text font-sans selection:bg-primary selection:text-black">
      <Navbar lang={lang} setLang={changeLang} t={t} />

      <main className="flex flex-col gap-20 px-6 md:px-12 max-w-7xl mx-auto py-10">

        {/* Hero Section */}
        <section id="home" className="min-h-[60vh] flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 bg-primary rounded-full"></span>
                </span>
                {t.hero.badge}
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                {t.hero.greet} <span className="text-primary glow-text">Rendy</span>
              </h1>

              <div className="space-y-4 max-w-2xl">
                <p className="text-lg text-text-secondary leading-relaxed">{t.hero.description}</p>
                <p className="text-text-secondary text-sm border-l-2 border-primary/30 pl-4 italic">{t.hero.subDescription}</p>
              </div>

              {/* Action Buttons with Social Links Sync */}
              <div className="mt-10 flex flex-wrap gap-4 w-full justify-center lg:justify-start">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-black px-6 py-3 rounded-lg font-bold text-sm hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  {t.hero.cta_linkedin}
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass text-white px-6 py-3 rounded-lg text-sm hover:bg-white/10 transition-all"
                >
                  {t.hero.cta_github}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center order-first lg:order-last">
              <TechAnimation />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold">{t.education.title}</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          <div className="glass p-8 rounded-2xl border-l-4 border-primary">
            <h3 className="text-xl font-bold text-white">UPN "Veteran" Jawa Timur</h3>
            <p className="text-text-secondary italic">{t.education.degree}</p>
            <p className="text-lg font-semibold text-primary mt-2">GPA 3.83 / 4.00</p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="tech-stack" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold">{t.skills.title}</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-8 rounded-2xl">
              <h4 className="text-sm font-bold text-primary mb-6 uppercase tracking-widest">{t.skills.lang}</h4>
              <div className="flex flex-wrap gap-3">
                {["PHP", "JavaScript", "SQL", "Java", "Python"].map(item => (
                  <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm">{item}</span>
                ))}
              </div>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h4 className="text-sm font-bold text-primary mb-6 uppercase tracking-widest">{t.skills.stack}</h4>
              <div className="flex flex-wrap gap-3">
                {["Laravel", "Tailwind CSS", "MySQL", "jQuery", "Next.js"].map(item => (
                  <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold">{t.experience.title}</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all">
              <h3 className="text-xl font-bold text-white">Fullstack Developer Intern</h3>
              <p className="text-primary font-medium mb-4">PT. Angsar Inspirasi Digital | Jan - Jun 2026</p>
              <ul className="text-text-secondary text-sm space-y-3 list-disc list-inside leading-relaxed">
                {t.experience.exp1.map((li, i) => <li key={i}>{li}</li>)}
              </ul>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all">
              <h3 className="text-xl font-bold text-white">Backend Developer Intern</h3>
              <p className="text-primary font-medium mb-4">PT. Ordo Teknologi Karya | Feb - Jun 2025</p>
              <ul className="text-text-secondary text-sm space-y-3 list-disc list-inside leading-relaxed">
                {t.experience.exp2.map((li, i) => <li key={i}>{li}</li>)}
              </ul>
            </div>
          </div>
        </section>

      </main>

      {/* Footer dengan props t dan link sosial yang sama */}
      <Footer t={t} socialLinks={SOCIAL_LINKS} />
    </div>
  );
}