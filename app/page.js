"use client";
import { useState, useEffect } from "react";
import { translations } from "@/constants/translations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechAnimation from "@/components/TechAnimation";

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
    <div className="bg-[#0a0a0a] text-white font-sans selection:bg-orange-500 selection:text-black min-h-screen flex flex-col">
      <Navbar lang={lang} setLang={changeLang} t={t} />

      <main className="flex-1 flex flex-col gap-16 sm:gap-24 px-5 md:px-10 max-w-7xl mx-auto w-full">

        {/* Hero Section */}
        <section id="home" className="min-h-[85vh] flex flex-col justify-center scroll-mt-20 py-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-8 items-center">

            {/* Kolom Kiri - Teks */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:pr-10 order-last lg:order-first">

              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a0a0a] border border-orange-500/30 text-orange-500 text-sm font-medium mb-6 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 bg-orange-500 rounded-full"></span>
                </span>
                {t.hero.badge}
              </div>

              {/* Judul Utama */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight mb-6 leading-[1.1] text-white">
                {t.hero.greet}
                <span className="text-orange-500 drop-shadow-[0_0_30px_rgba(249,115,22,0.5)]"> Rendy</span>
              </h1>

              {/* Deskripsi */}
              <div className="space-y-6 max-w-2xl mb-10">
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  {t.hero.description}
                </p>

                <p className="text-sm sm:text-base text-gray-400 border-l-[3px] border-orange-500/70 pl-5 py-1.5 italic font-light">
                  {t.hero.subDescription}
                </p>
              </div>

              {/* Tombol */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="/dokumen/cv-rendy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-black text-center px-8 py-3.5 rounded-lg font-bold text-base hover:bg-orange-400 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:-translate-y-0.5"
                >
                  {t.hero.cta_cv}
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#101010] border border-white/10 text-white text-center px-8 py-3.5 rounded-lg text-base hover:border-white/30 hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-0.5"
                >
                  {t.hero.cta_github}
                </a>
              </div>
            </div>

            {/* Kolom Kanan - Animasi */}
            <div className="flex justify-center lg:justify-end w-full">
              <TechAnimation />
            </div>

          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{t.education.title}</h2>
            <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full mb-5"></div>
            <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed px-4 md:px-0">
              {t.education.description}
            </p>
          </div>

          <div className="bg-[#161616] p-5 sm:p-6 rounded-xl border border-white/5 hover:border-orange-500/30 transition-colors max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4 shadow-lg">

            <div className="flex flex-col sm:flex-row items-center gap-5">
              {/* Logo */}
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src="/images/logo-upn.png"
                  alt="UPN Veteran Jawa Timur"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Teks */}
              <div>
                <h3 className="text-lg font-bold text-white mb-1">UPN "Veteran" Jawa Timur</h3>
                <p className="text-gray-400 text-sm">{t.education.degree}</p>
              </div>
            </div>

            {/* Badge IPK */}
            <div className="bg-[#0a0a0a] px-4 py-2 rounded-lg border border-white/5 shadow-inner">
              <p className="text-base font-bold text-orange-500 whitespace-nowrap">{t.education.gpa}</p>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="tech-stack" className="scroll-mt-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{t.skills.title}</h2>
            <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full mb-5"></div>
            <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed px-4 md:px-0">
              {t.skills.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { title: t.skills.lang, icon: "fas fa-code", items: ["PHP", "JavaScript", "Java", "Python"] },
              { title: t.skills.frameworks, icon: "fas fa-layer-group", items: ["Laravel", "Livewire", "Next.js", "React", "Tailwind CSS", "Bootstrap", "jQuery", "AJAX", "DataTables", "DOMPDF", "Guzzle"] },
              { title: t.skills.db, icon: "fas fa-database", items: ["MySQL", "Redis"] },
              { title: t.skills.tools, icon: "fas fa-tools", items: ["Git", "GitHub", "Postman", "Laragon", "TablePlus", "Visual Studio Code", "Figma"] }
            ].map((skill, idx) => (
              <div key={idx} className="bg-[#161616] p-5 rounded-xl border border-white/5 hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300 group shadow-lg">
                <div className="text-orange-500 text-2xl mb-4 group-hover:scale-110 group-hover:text-orange-400 transition-transform transform origin-left">
                  <i className={skill.icon}></i>
                </div>
                <h4 className="text-[15px] font-bold text-white mb-3">{skill.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="px-2.5 py-1 bg-[#0a0a0a] border border-white/10 rounded text-[10px] font-medium text-gray-300 uppercase tracking-wider">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              {t.experience.title}
            </h2>
            <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-sm max-w-xl mx-auto leading-snug px-4 md:px-0">
              {t.experience.description}
            </p>
          </div>

          <div className="space-y-5 sm:space-y-6 max-w-5xl mx-auto px-4 md:px-0">

            {/* CARD */}
            {[{
              role: "Fullstack Developer",
              company: "PT. Angsar Inspirasi Digital",
              date: "Jan - Jun 2026",
              logo: "/images/logo-pt-angsar.png",
              data: t.experience.exp1
            }, {
              role: "Backend Developer",
              company: "PT. Ordo Teknologi Karya",
              date: "Feb - Jun 2025",
              logo: "/images/logo-ordo.png",
              data: t.experience.exp2
            }].map((exp, idx) => (

              <div key={idx} className="bg-[#161616] p-5 sm:p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all duration-300 shadow-xl">

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

                  {/* LEFT */}
                  <div className="lg:w-[35%] flex items-start gap-4 sm:gap-5 shrink-0">

                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl p-2.5 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                      <img
                        src={exp.logo}
                        alt="logo"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex flex-col pt-1">
                      <h3 className="text-base sm:text-lg font-bold text-white leading-tight mb-1">
                        {exp.role}
                      </h3>

                      <p className="text-orange-500 font-semibold text-xs sm:text-sm mb-2">
                        {exp.company}
                      </p>

                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-white/5 text-gray-500 text-[10px] sm:text-[11px] w-fit">
                        <i className="far fa-calendar-alt text-orange-500"></i>
                        {exp.date}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="lg:w-[65%] lg:border-l border-white/10 lg:pl-6 flex items-start">
                    <ul className="space-y-2.5 sm:space-y-3">
                      {exp.data.map((li, i) => (
                        <li key={i} className="flex gap-3 items-start text-gray-400 group/item">

                          <span className="text-orange-500/80 mt-[6px] text-[8px] shrink-0">
                            <i className="fas fa-circle"></i>
                          </span>

                          <span className="text-[13px] sm:text-sm leading-snug group-hover/item:text-gray-200 transition-colors">
                            {li}
                          </span>

                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

            ))}

          </div>
        </section>

        {/* Contact Section */}
        <section id="connect" className="scroll-mt-24 mb-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{t.connect.title}</h2>
            <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full mb-5"></div>
            <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed px-4 md:px-0">
              {t.connect.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {/* Email Card */}
            <a
              href={SOCIAL_LINKS.email}
              className="bg-[#161616] group rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 border border-white/5 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-lg text-orange-500 group-hover:scale-110 transition-transform">
                <i className="fas fa-envelope"></i>
              </div>
              <span className="block text-sm font-bold text-white tracking-widest uppercase">Email</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#161616] group rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 border border-white/5 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-lg text-orange-500 group-hover:scale-110 transition-transform">
                <i className="fab fa-linkedin-in"></i>
              </div>
              <span className="block text-sm font-bold text-white tracking-widest uppercase">LinkedIn</span>
            </a>

            {/* GitHub Card */}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#161616] group rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 border border-white/5 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-lg text-orange-500 group-hover:scale-110 transition-transform">
                <i className="fab fa-github"></i>
              </div>
              <span className="block text-sm font-bold text-white tracking-widest uppercase">GitHub</span>
            </a>
          </div>
        </section>

      </main>

      <Footer t={t} socialLinks={SOCIAL_LINKS} />
    </div>
  );
}