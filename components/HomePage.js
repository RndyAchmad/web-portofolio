"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechAnimation from "@/components/TechAnimation";
import { translations } from "@/constants/translations";
import { PROJECTS } from "@/constants/projects";
import { EXPERIENCES } from "@/constants/experiences";
import { SKILLS } from "@/constants/skills";
import { SOCIAL_LINKS } from "@/constants/social-links";
import { SERVICES } from "@/constants/services";

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Rendy Achmadiansyah Mukti",

    url: "https://rendyachmad.my.id",

    image: "https://rendyachmad.my.id/images/og-image.png",

    description:
        "Fullstack Web Developer specializing in Laravel, Next.js, React, PHP, and scalable backend development.",

    jobTitle: "Fullstack Web Developer",

    email: "mailto:rendyachmad55@gmail.com",

    nationality: {
        "@type": "Country",
        name: "Indonesia",
    },

    alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "UPN Veteran Jawa Timur",
    },

    knowsLanguage: [
        "Indonesian",
        "English",
    ],

    sameAs: [
        "https://github.com/rndyachmad",
        "https://linkedin.com/in/rendyachmad/",
        "https://instagram.com/rendyachmad.m",
    ],

    knowsAbout: SKILLS.flatMap((item) => item.items),
};

export default function HomePage() {
    const [lang, setLang] = useState(() => {
        if (typeof window === "undefined") return "en";
        return localStorage.getItem("lang") || "en";
    });

    const changeLang = (newLang) => {
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    const githubLink = SOCIAL_LINKS.find(({ name }) => name === "GitHub");
    const t = translations[lang];

    const skillDiagrams = [
        { name: "Laravel / PHP", percentage: 90, icon: "fab fa-laravel" },
        { name: "Next.js / React", percentage: 75, icon: "fab fa-react" },
        { name: "Tailwind CSS", percentage: 90, icon: "fab fa-css3-alt" },
        { name: "Database & API", percentage: 80, icon: "fas fa-database" },
        { name: "Git & DevOps", percentage: 85, icon: "fab fa-git-alt" },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#0c0c0c] text-white font-sans selection:bg-orange-500 selection:text-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />

            <header>
                <Navbar lang={lang} setLang={changeLang} t={t} />
            </header>

            <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pt-10 sm:px-8 md:px-10">

                {/* HERO SECTION */}
                <section
                    id="home"
                    className="scroll-mt-20 py-12 min-h-[90vh] flex flex-col justify-center sm:py-20"
                    aria-labelledby="home-title"
                >
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
                        <div className="order-last flex w-full flex-col items-center text-center lg:order-first lg:items-start lg:text-left">
                            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-1.5 text-xs sm:text-sm font-medium text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.1)] transition-colors hover:bg-orange-500/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
                                </span>
                                {t.hero.badge}
                            </div>

                            <h1
                                id="home-title"
                                className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                            >
                                {t.hero.greet}
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600 drop-shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                                    {" "}Rendy
                                </span>
                            </h1>

                            <div className="mb-10 max-w-2xl space-y-5">
                                <p className="text-base font-light leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
                                    Rendy Achmadiansyah Mukti is a Fullstack Web Developer, Backend Developer, Laravel Developer, Next.js Developer, and Web Developer Indonesia focused on building reliable and scalable digital products.
                                </p>
                                <p className="border-l-[3px] border-orange-500/70 py-1 pl-4 text-sm font-light italic leading-relaxed text-gray-400 sm:text-base lg:pl-5">
                                    {t.hero.subDescription}
                                </p>
                            </div>

                            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center lg:justify-start">
                                <a
                                    href={t.hero.cv_file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open Rendy Achmad curriculum vitae"
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
                                        aria-label="Visit Rendy Achmad GitHub profile"
                                        className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#101010] px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-[#1a1a1a]"
                                    >
                                        <i className="fab fa-github text-lg"></i>
                                        <span>{t.hero.cta_github}</span>
                                    </a>
                                )}
                            </div>

                        </div>

                        <div className="flex w-full justify-center lg:justify-end">
                            <TechAnimation />
                        </div>

                    </div>
                </section>

                {/* ABOUT ME SECTION */}
                <section id="about" className="scroll-mt-24 py-20" aria-labelledby="about-title">
                    <div className="mb-14 text-center">
                        <h2 id="about-title" className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {t.about.title}
                        </h2>
                        <div className="mx-auto h-1 w-12 rounded-full bg-orange-500"></div>
                    </div>

                    <article className="rounded-3xl border border-white/5 bg-[#141414] p-8 sm:p-12 shadow-2xl">
                        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center">
                            {/* Profile Frame */}
                            <div className="relative shrink-0">
                                <div className="h-56 w-56 sm:h-72 sm:w-72 overflow-hidden rounded-3xl border border-orange-500/30 bg-[#1c1c1c] p-2 shadow-xl transition-transform duration-500 hover:scale-105">
                                    <Image
                                        src="/images/foto-pas.jpg"
                                        alt="Rendy Achmadiansyah Mukti"
                                        width={300}
                                        height={300}
                                        className="h-full w-full rounded-2xl object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content Text */}
                            <div className="flex-1 space-y-5 text-center lg:text-left">
                                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                                    {t.about.heading}{" "}
                                    <span className="text-orange-500">Rendy Achmadiansyah Mukti</span>
                                </h3>

                                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                                    {t.about.paragraph1}
                                </p>

                                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                                    {t.about.paragraph2}
                                </p>

                                <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-2">
                                    <span className="rounded-lg border border-orange-500/30 bg-orange-500/10 px-3.5 py-1.5 text-xs font-semibold text-orange-400">
                                        Problem Solver
                                    </span>
                                    <span className="rounded-lg border border-orange-500/30 bg-orange-500/10 px-3.5 py-1.5 text-xs font-semibold text-orange-400">
                                        Clean Code Advocate
                                    </span>
                                    <span className="rounded-lg border border-orange-500/30 bg-orange-500/10 px-3.5 py-1.5 text-xs font-semibold text-orange-400">
                                        Lifelong Learner
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* DIAGRAM KEAHLIAN / CIRCULAR SKILL PROGRESS (Sesuai Gambar Referensi) */}
                        <div className="mt-16 border-t border-white/10 pt-12">
                            <h4 className="mb-8 text-center text-xl font-bold text-white">
                                Skills Diagram
                            </h4>
                            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                                {skillDiagrams.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center justify-center p-2">
                                        <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
                                            <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 36 36">
                                                <path
                                                    className="text-gray-800"
                                                    strokeWidth="3.2"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                />
                                                <path
                                                    className="text-orange-500 transition-all duration-1000 ease-out"
                                                    strokeDasharray={`${skill.percentage}, 100`}
                                                    strokeWidth="3.2"
                                                    strokeLinecap="round"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                />
                                            </svg>
                                            <div className="absolute flex flex-col items-center justify-center text-center">
                                                <i className={`${skill.icon} mb-1 text-xl text-orange-500`}></i>
                                                <span className="text-base font-extrabold text-white sm:text-lg">
                                                    {skill.percentage}%
                                                </span>
                                            </div>
                                        </div>
                                        <span className="mt-3 text-center text-xs font-semibold text-gray-300 sm:text-sm">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                </section>

                {/* SERVICES SECTION */}
                <section id="services" className="scroll-mt-24 py-20" aria-labelledby="services-title">
                    <div className="mb-14 text-center">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                            {t.services.label}
                        </p>
                        <h2 id="services-title" className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {t.services.title}
                        </h2>
                        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-orange-500"></div>
                        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
                            {t.services.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {SERVICES.map((service) => {
                            const Icon = service.icon;
                            const serviceData = t.services.items[service.translationKey];

                            return (
                                <article
                                    key={service.translationKey}
                                    className="group flex flex-col items-center text-center rounded-2xl border border-white/5 bg-[#161616] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/50 hover:bg-[#1a1a1a]"
                                >
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/20 transition-transform duration-300 group-hover:scale-110">
                                        <Icon size={30} aria-hidden="true" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-white">
                                        {serviceData.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-400">
                                        {serviceData.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </section>

                {/* EDUCATION SECTION */}
                <section id="education" className="scroll-mt-24 py-16" aria-labelledby="education-title">
                    <div className="mb-10 text-center">
                        <h2 id="education-title" className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {t.education.title}
                        </h2>
                        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-orange-500"></div>
                        <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
                            {t.education.description}
                        </p>
                    </div>

                    <article className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 rounded-2xl border border-white/5 bg-[#161616] p-6 shadow-xl sm:flex-row sm:p-8">
                        <div className="flex flex-col items-center gap-5 sm:flex-row">
                            <div className="h-20 w-20 shrink-0 rounded-2xl bg-white/5 p-2.5">
                                <Image
                                    src="/images/logo-upn.png"
                                    alt="UPN Veteran Jawa Timur"
                                    width={80}
                                    height={80}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="mb-1 text-xl font-bold text-white">
                                    UPN &quot;Veteran&quot; Jawa Timur
                                </h3>
                                <p className="text-sm font-medium text-gray-400 sm:text-base">{t.education.degree}</p>
                                <p className="mt-1 text-xs sm:text-sm text-orange-500 font-medium">{t.education.year}</p>
                            </div>
                        </div>

                        <div className="rounded-xl border border-orange-500/30 bg-orange-500/10 px-5 py-2">
                            <p className="whitespace-nowrap text-lg font-bold text-orange-400">{t.education.gpa}</p>
                        </div>
                    </article>
                </section>

                {/* TECH STACK / SKILLS CATEGORIES SECTION */}
                <section id="tech-stack" className="scroll-mt-24 py-16" aria-labelledby="tech-stack-title">
                    <div className="mb-10 text-center">
                        <h2 id="tech-stack-title" className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {t.skills.title}
                        </h2>
                        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-orange-500"></div>
                        <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
                            {t.skills.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {SKILLS.map((skill) => (
                            <article
                                key={skill.key}
                                className="group flex flex-col items-center rounded-2xl border border-white/5 bg-[#161616] p-6 transition-all duration-300 hover:border-orange-500/40"
                            >
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#222] text-2xl text-orange-500 border border-white/5 transition-transform duration-300 group-hover:scale-110">
                                    <i className={skill.icon}></i>
                                </div>

                                <h3 className="mb-4 text-base font-bold tracking-wide text-white">
                                    {t.skills[skill.key]}
                                </h3>

                                <div className="flex flex-wrap justify-center gap-2">
                                    {skill.items.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-lg border border-white/10 bg-[#1f1f1f] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* EXPERIENCE SECTION */}
                <section id="experience" className="scroll-mt-24 py-16" aria-labelledby="experience-title">
                    <div className="mb-10 text-center">
                        <h2 id="experience-title" className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {t.experience.title}
                        </h2>
                        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-orange-500"></div>
                        <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
                            {t.experience.description}
                        </p>
                    </div>

                    <div className="mx-auto max-w-5xl space-y-6">
                        {EXPERIENCES.map((exp) => {
                            const expData = t.experience.items[exp.translationKey];

                            return (
                                <article
                                    key={`${exp.company}-${exp.role}`}
                                    className="rounded-2xl border border-white/5 bg-[#161616] p-6 transition-all duration-300 hover:border-orange-500/30 sm:p-8"
                                >
                                    <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                                        <div className="flex shrink-0 items-start gap-4 md:w-[35%] lg:w-[30%]">
                                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white p-2.5 sm:h-20 sm:w-20">
                                                <Image
                                                    src={exp.logo}
                                                    alt={`${exp.company} logo`}
                                                    width={80}
                                                    height={80}
                                                    className="h-full w-full object-contain"
                                                />
                                            </div>

                                            <div className="flex flex-col pt-1">
                                                <h3 className="mb-1 text-lg font-bold leading-tight text-white sm:text-xl">
                                                    {exp.role}
                                                </h3>
                                                <p className="mb-2 text-sm font-semibold text-orange-500">{exp.company}</p>
                                                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-[#1f1f1f] px-3 py-1 text-xs font-medium text-gray-400">
                                                    <i className="far fa-calendar-alt text-orange-500"></i>
                                                    {expData.period}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-1 items-start md:border-l md:border-white/10 md:pl-8">
                                            <ul className="space-y-3">
                                                {expData.key.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-3 text-gray-400"
                                                    >
                                                        <span className="mt-1.5 flex shrink-0 items-center justify-center">
                                                            <i className="fas fa-circle text-[6px] text-orange-500"></i>
                                                        </span>
                                                        <span className="text-sm leading-relaxed text-gray-300 sm:text-[15px]">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                {/* PROJECTS / PORTFOLIO SECTION */}
                <section id="projects" className="scroll-mt-24 py-16" aria-labelledby="projects-title">
                    <div className="mb-10 text-center">
                        <h2 id="projects-title" className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {t.projects.title}
                        </h2>
                        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-orange-500"></div>
                        <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
                            {t.projects.description}
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-8">
                        {PROJECTS.map((project) => {
                            const projectData = t.projects.items[project.translationKey];
                            const hasLiveDemo = Boolean(project.liveUrl);

                            return (
                                <article
                                    key={project.title}
                                    className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#161616] shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/40"
                                >
                                    <div className="relative h-64 w-full overflow-hidden sm:h-72">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={1200}
                                            height={800}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent"></div>
                                    </div>

                                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                                        <div className="mb-3 flex items-center justify-between gap-2">
                                            <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
                                                {projectData.type}
                                            </span>
                                            <span className="rounded-md border border-orange-500/30 bg-orange-500/10 px-2.5 py-1 text-xs font-medium text-orange-400">
                                                {project.role || "Full Stack Developer"}
                                            </span>
                                        </div>

                                        <h3 className="mb-3 text-2xl font-bold text-white">
                                            {project.title}
                                        </h3>

                                        <p className="mb-6 text-sm leading-relaxed text-gray-400">
                                            {projectData.description}
                                        </p>

                                        <div className="mb-6 flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-md border border-white/10 bg-[#1f1f1f] px-2.5 py-1 text-xs font-medium text-gray-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-auto pt-2">
                                            {hasLiveDemo ? (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Visit ${project.title} project demo`}
                                                    className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-black transition-all hover:bg-orange-400"
                                                >
                                                    View Project
                                                </a>
                                            ) : (
                                                <button
                                                    type="button"
                                                    disabled
                                                    className="inline-flex cursor-not-allowed items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-gray-500"
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

                {/* CONNECT / SOCIAL LINKS SECTION */}
                <section id="connect" className="scroll-mt-24 py-16 pb-24" aria-labelledby="connect-title">
                    <div className="mb-10 text-center">
                        <h2 id="connect-title" className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {t.connect.title}
                        </h2>
                        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-orange-500"></div>
                        <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
                            {t.connect.description}
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {SOCIAL_LINKS.map((contact) => (
                            <a
                                key={contact.name}
                                href={contact.href}
                                target={contact.external ? "_blank" : undefined}
                                rel={contact.external ? "noopener noreferrer" : undefined}
                                aria-label={`Open ${contact.name}`}
                                className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/5 bg-[#161616] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-[#1a1a1a]"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#222] text-xl text-orange-500 border border-white/5 transition-transform duration-300 group-hover:scale-110">
                                    <i className={contact.icon}></i>
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-white">
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