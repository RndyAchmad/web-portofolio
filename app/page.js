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
  email: "mailto:rendyachmad55@gmail.com?subject=Collaboration%20Inquiry&body=Hi%20Rendy,%20I%20would%20like%20to%20discuss..."
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

              <div className="mt-10 flex flex-wrap gap-4 w-full justify-center lg:justify-start">
                <a
                  href="/dokumen/cv-rendy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-black px-6 py-3 rounded-lg font-bold text-sm hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  {t.hero.cta_cv}
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
            <p className="text-lg font-semibold text-primary mt-2">{t.education.gpa}</p>
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
                {["PHP", "JavaScript", "Java", "Python"].map(item => (
                  <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm">{item}</span>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h4 className="text-sm font-bold text-primary mb-6 uppercase tracking-widest">{t.skills.frameworks}</h4>
              <div className="flex flex-wrap gap-3">
                {["Laravel", "Livewire", "Next.js", "React", "Tailwind CSS", "Bootstrap", "jQuery", "AJAX", "DataTables", "DOMPDF", "Guzzle"].map(item => (
                  <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm">{item}</span>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h4 className="text-sm font-bold text-primary mb-6 uppercase tracking-widest">{t.skills.db}</h4>
              <div className="flex flex-wrap gap-3">
                {["MySQL"].map(item => (
                  <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm">{item}</span>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h4 className="text-sm font-bold text-primary mb-6 uppercase tracking-widest">{t.skills.tools}</h4>
              <div className="flex flex-wrap gap-3">
                {["Git", "GitHub", "Postman", "Laragon", "TablePlus", "Visual Studio Code", "Figma"].map(item => (
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

        {/* Projects */}

        {/* Contact */}
        <section id="connect" className="scroll-mt-24 mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.connect.title}</h2>
            <p className="text-text-secondary text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
              {t.connect.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
            {/* Email Card */}
            <a
              href={SOCIAL_LINKS.email}
              className="glass group rounded-2xl md:rounded-3xl p-5 md:p-10 flex flex-row sm:flex-col items-center justify-center text-center gap-4 md:gap-6 border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 shadow-xl"
            >
              <div className="text-3xl md:text-5xl lg:text-6xl text-primary transition-transform duration-300 group-hover:scale-110">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="space-y-2">
                <span className="block text-base md:text-xl font-bold text-white tracking-wide uppercase">Email</span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group rounded-2xl md:rounded-3xl p-5 md:p-10 flex flex-row sm:flex-col items-center justify-center text-center gap-4 md:gap-6 border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 shadow-xl"
            >
              <div className="text-3xl md:text-5xl lg:text-6xl text-primary transition-transform duration-300 group-hover:scale-110">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="space-y-2">
                <span className="block text-base md:text-xl font-bold text-white tracking-wide uppercase">LinkedIn</span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group rounded-2xl md:rounded-3xl p-5 md:p-10 flex flex-row sm:flex-col items-center justify-center text-center gap-4 md:gap-6 border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 shadow-xl"
            >
              <div className="text-3xl md:text-5xl lg:text-6xl text-primary transition-transform duration-300 group-hover:scale-110">
                <i className="fab fa-github"></i>
              </div>
              <div className="space-y-2">
                <span className="block text-base md:text-xl font-bold text-white tracking-wide uppercase">GitHub</span>
              </div>
            </a>
          </div>
        </section>

      </main>

      <Footer t={t} socialLinks={SOCIAL_LINKS} />
    </div>
  );
}