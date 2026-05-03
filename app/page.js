"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechAnimation from "@/components/TechAnimation";
import { translations } from "@/constants/translations";
import { PROJECTS } from "@/constants/projects";
import { EXPERIENCES } from "@/constants/experiences";
import { SKILLS } from "@/constants/skills";
import { SOCIAL_LINKS } from "@/constants/social-links";

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

  const githubLink = SOCIAL_LINKS.find(
    ({ name }) => name === "GitHub"
  );
  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-bg text-white font-sans selection:bg-orange-500 selection:text-black">
      <Navbar lang={lang} setLang={changeLang} t={t} />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 sm:px-8 md:px-10">

        {/* Home Section */}
        <section
          id="home"
          className="scroll-mt-20 py-12 min-h-[90vh] flex flex-col justify-center sm:py-20"
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            <div className="order-last flex w-full flex-col items-center text-center lg:order-first lg:items-start lg:text-left">

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-1.5 text-xs sm:text-sm font-medium text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.1)] transition-colors hover:bg-orange-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
                </span>
                {t.hero.badge}
              </div>

              {/* Title */}
              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {t.hero.greet}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600 drop-shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                  {" "}Rendy
                </span>
              </h1>

              {/* Descriptions */}
              <div className="mb-10 max-w-2xl space-y-5">
                <p className="text-base font-light leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
                  {t.hero.description}
                </p>
                <p className="border-l-[3px] border-orange-500/70 py-1 pl-4 text-sm font-light italic leading-relaxed text-gray-400 sm:text-base lg:pl-5">
                  {t.hero.subDescription}
                </p>
              </div>

              {/* Buttons CTA */}
              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="/dokumen/cv-rendy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 text-base font-bold text-black shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
                >
                  <span>{t.hero.cta_cv}</span>
                  <i className="fas fa-download text-sm transition-transform group-hover:translate-y-0.5"></i>
                </a>

                {githubLink && (
                  <a
                    href={githubLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#101010] px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-[#1a1a1a]"
                  >
                    <i className="fab fa-github text-lg"></i>
                    <span>{t.hero.cta_github}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Animation */}
            <div className="flex w-full justify-center lg:justify-end">
              <TechAnimation />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-24 py-16 md:py-20">
          <div className="mb-10 text-center md:mb-12">
            <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {t.education.title}
            </h2>
            <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-orange-500"></div>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
              {t.education.description}
            </p>
          </div>

          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 rounded-2xl border border-white/5 bg-surface p-6 shadow-lg transition-colors duration-300 hover:border-orange-500/30 sm:flex-row sm:p-8 sm:text-left">
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <div className="h-20 w-20 shrink-0 rounded-full bg-white/5 p-2 shadow-inner">
                <img
                  src="/images/logo-upn.png"
                  alt="UPN Veteran Jawa Timur"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="mb-1 text-xl font-bold text-white">
                  UPN "Veteran" Jawa Timur
                </h3>
                <p className="text-sm font-medium text-gray-400 sm:text-base">{t.education.degree}</p>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-bg px-5 py-2.5 shadow-inner transition-colors hover:border-orange-500/50">
              <p className="whitespace-nowrap text-lg font-bold text-orange-500">
                {t.education.gpa}
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="scroll-mt-24 py-16 md:py-20">
          <div className="mb-10 text-center md:mb-12">
            <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {t.skills.title}
            </h2>
            <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-orange-500"></div>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
              {t.skills.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((skill) => (
              <div
                key={skill.key}
                className="group flex flex-col items-center rounded-2xl border border-white/5 bg-surface p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_10px_30px_rgba(249,115,22,0.1)]"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-bg text-2xl text-orange-500 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-500/10">
                  <i className={skill.icon}></i>
                </div>

                <h4 className="mb-4 text-base font-bold tracking-wide text-white">
                  {t.skills[skill.key]}
                </h4>

                <div className="flex flex-wrap justify-center gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-bg px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-300 transition-colors group-hover:border-white/20"
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
        <section id="experience" className="scroll-mt-24 py-16 md:py-20">
          <div className="mb-10 text-center md:mb-12">
            <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {t.experience.title}
            </h2>
            <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-orange-500"></div>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
              {t.experience.description}
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-6 sm:space-y-8">
            {EXPERIENCES.map((exp) => {
              const expData = t.experience[exp.translationKey];

              return (
                <div
                  key={`${exp.company}-${exp.role}`}
                  className="group rounded-2xl border border-white/5 bg-surface p-6 shadow-xl transition-all duration-300 hover:border-orange-500/30 sm:p-8"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                    {/* Left Column: Company Info */}
                    <div className="flex shrink-0 items-start gap-4 md:w-[35%] lg:w-[30%]">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white p-2.5 shadow-md sm:h-20 sm:w-20">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div className="flex flex-col pt-1">
                        <h3 className="mb-1.5 text-lg font-bold leading-tight text-white sm:text-xl">
                          {exp.role}
                        </h3>
                        <p className="mb-3 text-sm font-semibold text-orange-500">
                          {exp.company}
                        </p>
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-bg px-3 py-1.5 text-xs font-medium text-gray-400">
                          <i className="far fa-calendar-alt text-orange-500/80"></i>
                          {exp.date}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Descriptions */}
                    <div className="flex flex-1 items-start md:border-l md:border-white/10 md:pl-8">
                      <ul className="space-y-3 sm:space-y-4">
                        {expData.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3.5 text-gray-400"
                          >
                            <span className="mt-1.5 flex shrink-0 items-center justify-center">
                              <i className="fas fa-circle text-[6px] text-orange-500/60"></i>
                            </span>
                            <span className="text-sm leading-relaxed transition-colors duration-200 hover:text-gray-200 sm:text-[15px]">
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
        <section id="projects" className="scroll-mt-24 py-16 md:py-20">
          <div className="mb-10 text-center md:mb-12">
            <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.projects.title}</h2>
            <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-orange-500"></div>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
              {t.projects.description}
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {PROJECTS.map((project) => {
              const projectData = t.projects.items[project.translationKey];
              const hasLiveDemo = Boolean(project.liveUrl);

              return (
                <article
                  key={project.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_15px_40px_rgba(249,115,22,0.15)]"
                >
                  <div className="relative h-64 w-full overflow-hidden sm:h-72 lg:h-80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/40 to-transparent"></div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="mb-4">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                        <p className="text-xs font-bold uppercase tracking-wider text-orange-500">
                          {projectData.type}
                        </p>
                        <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300">
                          {project.role || 'Full Stack Developer'}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white sm:text-3xl">
                        {project.title}
                      </h3>
                    </div>

                    <p className="mb-8 text-sm leading-relaxed text-gray-400 sm:text-base">
                      {projectData.description}
                    </p>

                    <div className="mb-8 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-bg px-3 py-1.5 text-xs font-semibold text-gray-300 transition-colors duration-300 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-3">
                      {hasLiveDemo ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25"
                        >
                          View Project
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="inline-flex cursor-not-allowed items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-gray-500"
                        >
                          Private Repository
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Connect Section */}
        <section id="connect" className="scroll-mt-24 py-16 pb-24 md:py-20">
          <div className="mb-10 text-center md:mb-12">
            <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {t.connect.title}
            </h2>
            <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-orange-500"></div>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
              {t.connect.description}
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {SOCIAL_LINKS.map((contact) => (
              <a
                key={contact.name}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center justify-center gap-5 rounded-2xl border border-white/5 bg-surface p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:bg-orange-500/5 hover:shadow-[0_10px_30px_rgba(249,115,22,0.1)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-bg text-2xl text-orange-500 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:border-orange-500/30">
                  <i className={contact.icon}></i>
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-white">
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