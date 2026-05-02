"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechAnimation from "@/components/TechAnimation";
import { translations } from "@/constants/translations";
import { PROJECTS } from "@/constants/projects";
import { EXPERIENCES } from "@/constants/experiences";
import { SKILLS } from "@/constants/skills";

const SOCIAL_LINKS = {
  github: "https://github.com/rndyachmad",
  linkedin: "https://linkedin.com/in/rendyachmad/",
  email:
    "mailto:rendyachmad55@gmail.com?subject=Collaboration%20Inquiry&body=Hi%20Rendy,%20I%20would%20like%20to%20discuss...",
};

export default function Home() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
  }, []);

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-bg text-white font-sans selection:bg-orange-500 selection:text-black">
      <Navbar lang={lang} setLang={changeLang} t={t} />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-16 px-5 md:px-10 sm:gap-24">

        {/* Home Section */}
        <section
          id="home"
          className="scroll-mt-20 py-5 min-h-[85vh] flex flex-col justify-center"
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-8">
            <div className="order-last flex w-full flex-col items-center text-center lg:order-first lg:items-start lg:pr-10 lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-orange-500/30 bg-bg px-4 py-1.5 text-sm font-medium text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
                </span>
                {t.hero.badge}
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[80px]">
                {t.hero.greet}
                <span className="text-orange-500 drop-shadow-[0_0_30px_rgba(249,115,22,0.5)]">
                  {" "}Rendy
                </span>
              </h1>

              <div className="mb-10 max-w-2xl space-y-6">
                <p className="text-base font-light leading-relaxed text-gray-300 sm:text-lg md:text-xl">
                  {t.hero.description}
                </p>

                <p className="border-l-[3px] border-orange-500/70 py-1.5 pl-5 text-sm font-light italic leading-relaxed text-gray-400 sm:text-base">
                  {t.hero.subDescription}
                </p>
              </div>

              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <a
                  href="/dokumen/cv-rendy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-orange-500 px-8 py-3.5 text-center text-base font-bold text-black shadow-[0_0_20px_rgba(249,115,22,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
                >
                  {t.hero.cta_cv}
                </a>

                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 bg-[#101010] px-8 py-3.5 text-center text-base text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-[#1a1a1a]"
                >
                  {t.hero.cta_github}
                </a>
              </div>
            </div>

            <div className="flex w-full justify-center lg:justify-end">
              <TechAnimation />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-24">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
              {t.education.title}
            </h2>
            <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-orange-500"></div>
            <p className="mx-auto max-w-xl px-4 text-sm leading-relaxed text-gray-400 md:px-0">
              {t.education.description}
            </p>
          </div>

          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 rounded-xl border border-white/5 bg-surface p-5 text-center shadow-lg transition-colors hover:border-orange-500/30 sm:flex-row sm:p-6 sm:text-left">
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <div className="h-16 w-16 shrink-0">
                <img
                  src="/images/logo-upn.png"
                  alt="UPN Veteran Jawa Timur"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="mb-1 text-lg font-bold text-white">
                  UPN "Veteran" Jawa Timur
                </h3>
                <p className="text-sm text-gray-400">{t.education.degree}</p>
              </div>
            </div>

            <div className="rounded-lg border border-white/5 bg-bg px-4 py-2 shadow-inner">
              <p className="whitespace-nowrap text-base font-bold text-orange-500">
                {t.education.gpa}
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="scroll-mt-24">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
              {t.skills.title}
            </h2>
            <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-orange-500"></div>
            <p className="mx-auto max-w-xl px-4 text-sm leading-relaxed text-gray-400 md:px-0">
              {t.skills.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {SKILLS.map((skill) => (
              <div
                key={skill.key}
                className="group rounded-xl border border-white/5 bg-surface p-5 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 sm:p-6"
              >
                <div className="mb-3 text-2xl text-orange-500 transition-transform group-hover:scale-110">
                  <i className={skill.icon}></i>
                </div>

                <h4 className="mb-3 text-sm font-semibold text-white sm:text-[15px]">
                  {t.skills[skill.key]}
                </h4>

                <div className="flex flex-wrap justify-center gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-white/10 bg-bg px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
              {t.experience.title}
            </h2>
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-orange-500"></div>
            <p className="mx-auto max-w-xl px-4 text-sm leading-snug text-gray-400 md:px-0">
              {t.experience.description}
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-5 sm:space-y-6">
            {EXPERIENCES.map((exp) => {
              const expData = t.experience[exp.translationKey];

              return (
                <div
                  key={`${exp.company}-${exp.role}`}
                  className="rounded-2xl border border-white/5 bg-surface p-5 shadow-xl transition-all duration-300 hover:border-orange-500/30 sm:p-6"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
                    <div className="flex shrink-0 items-start gap-4 sm:gap-5 lg:w-[35%]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2.5 shadow-[0_0_20px_rgba(255,255,255,0.05)] sm:h-20 sm:w-20">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div className="flex flex-col pt-1">
                        <h3 className="mb-1 text-base font-bold leading-tight text-white sm:text-lg">
                          {exp.role}
                        </h3>

                        <p className="mb-2 text-xs font-semibold text-orange-500 sm:text-sm">
                          {exp.company}
                        </p>

                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/5 bg-bg px-3 py-1 text-[10px] text-gray-500 sm:text-[11px]">
                          <i className="far fa-calendar-alt text-orange-500"></i>
                          {exp.date}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start lg:w-[65%] lg:border-l lg:border-white/10 lg:pl-6">
                      <ul className="space-y-2.5 sm:space-y-3">
                        {expData.map((item, index) => (
                          <li
                            key={index}
                            className="group/item flex items-start gap-3 text-gray-400"
                          >
                            <span className="mt-1.5 shrink-0 text-[8px] text-orange-500/80">
                              <i className="fas fa-circle"></i>
                            </span>
                            <span className="text-[13px] leading-snug transition-colors group-hover/item:text-gray-200 sm:text-sm">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl">{t.projects.title}</h2>
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-orange-500"></div>
            <p className="mx-auto max-w-xl px-4 text-sm leading-relaxed text-gray-400 md:px-0">
              {t.projects.description}
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
            {PROJECTS.map((project) => {
              const projectData = t.projects.items[project.translationKey];

              return (
                <article
                  key={project.title}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-orange-500/10"
                >
                  <div className="relative h-64 w-full overflow-hidden sm:h-72 md:h-80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent"></div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-orange-500">
                        {projectData.type}
                      </p>
                    </div>

                    <p className="mb-6 text-sm leading-relaxed text-gray-400 sm:text-base">
                      {projectData.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-bg/80 px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors duration-300 hover:border-orange-500/30 hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Connect Section */}
        <section id="connect" className="mb-10 scroll-mt-24">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
              {t.connect.title}
            </h2>
            <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-orange-500"></div>
            <p className="mx-auto max-w-xl px-4 text-sm leading-relaxed text-gray-400 md:px-0">
              {t.connect.description}
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {[
              {
                name: 'Email',
                href: SOCIAL_LINKS.email,
                icon: 'fas fa-envelope',
              },
              {
                name: 'LinkedIn',
                href: SOCIAL_LINKS.linkedin,
                icon: 'fab fa-linkedin-in',
              },
              {
                name: 'GitHub',
                href: SOCIAL_LINKS.github,
                icon: 'fab fa-github',
              },
            ].map((contact) => (
              <a
                key={contact.name}
                href={contact.href}
                target={contact.name !== 'Email' ? '_blank' : undefined}
                rel={contact.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center justify-center gap-4 rounded-xl border border-white/5 bg-surface p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-orange-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/5 bg-bg text-lg text-orange-500 transition-transform group-hover:scale-110">
                  <i className={contact.icon}></i>
                </div>
                <span className="block text-sm font-bold uppercase tracking-widest text-white">
                  {contact.name}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer t={t} socialLinks={SOCIAL_LINKS} />
    </div>
  );
}