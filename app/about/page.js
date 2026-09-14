import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { EXPERIENCES } from "@/constants/experiences";
import { SOCIAL_LINKS } from "@/constants/social-links";
import { translations } from "@/constants/translations";
import {
  HOME_URL,
  PERSON_JOB_TITLE,
  PERSON_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
} from "@/constants/site";

const pageTitle = `About ${PERSON_NAME}`;
const pageDescription =
  "Learn about Rendy Achmadiansyah Mukti, a Fullstack Web Developer and Backend Developer from Indonesia specializing in Laravel, PHP, Next.js, React, REST APIs, MySQL, and Redis.";

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    url: "/about",
    title: `${pageTitle} | ${PERSON_JOB_TITLE}`,
    description: pageDescription,
  },
  twitter: {
    title: `${pageTitle} | ${PERSON_JOB_TITLE}`,
    description: pageDescription,
  },
};

export default function AboutPage() {
  const t = translations.en;
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: `${pageTitle} | ${PERSON_JOB_TITLE}`,
    description: pageDescription,
    inLanguage: "en",
    isPartOf: {
      "@id": `${HOME_URL}#website`,
    },
    about: {
      "@id": `${HOME_URL}#person`,
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0c0c0c] font-sans text-white selection:bg-orange-500 selection:text-black">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-5 pb-20 pt-32 sm:px-8 md:px-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        />

        <article>
          <header className="border-b border-white/10 pb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              About
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              About {PERSON_NAME}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
              {PERSON_NAME} is a {PERSON_JOB_TITLE} and Backend Developer from Indonesia who builds reliable, scalable web applications.
            </p>
          </header>

          <section className="grid gap-10 py-14 lg:grid-cols-[0.8fr_1.2fr]" aria-labelledby="profile-title">
            <div className="mx-auto w-full max-w-sm">
              <Image
                src="/images/foto-pas.jpg"
                alt="Rendy Achmadiansyah Mukti - Fullstack Web Developer"
                width={600}
                height={600}
                className="aspect-square w-full rounded-3xl border border-orange-500/30 object-cover p-2"
              />
            </div>
            <div>
              <h2 id="profile-title" className="text-3xl font-bold text-white">
                Fullstack development with a backend focus
              </h2>
              <div className="mt-6 space-y-5 leading-relaxed text-gray-300">
                <p>
                  Rendy works across the application stack, connecting robust backend architecture with clear and responsive user interfaces. His work focuses on Laravel and PHP alongside modern JavaScript technologies such as Next.js and React.
                </p>
                <p>
                  His technical focus includes REST APIs, MySQL, Redis, Tailwind CSS, and practical web application development. He values clean code, performance, and maintainable systems when turning product ideas into working software.
                </p>
                <p>
                  Rendy studied Information Systems at UPN &quot;Veteran&quot; Jawa Timur, building a foundation in software engineering, database design, backend development, and modern web applications.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/5 bg-surface p-8 sm:p-10" aria-labelledby="experience-title">
            <h2 id="experience-title" className="text-3xl font-bold text-white">
              Professional experience
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-gray-400">
              Rendy&apos;s portfolio includes experience developing and maintaining web applications, backend services, operational dashboards, and content automation workflows.
            </p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {EXPERIENCES.map((experience) => (
                <li key={experience.company} className="rounded-2xl border border-white/10 bg-[#1c1c1c] p-5">
                  <h3 className="text-lg font-bold text-white">{experience.role}</h3>
                  <p className="mt-1 text-sm text-orange-400">{experience.company}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="py-14" aria-labelledby="work-title">
            <h2 id="work-title" className="text-3xl font-bold text-white">
              Explore Rendy&apos;s work
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-gray-400">
              View selected web, backend, dashboard, and mobile projects to see the technologies and roles involved in each project.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-orange-400"
              >
                View selected projects
              </Link>
              <Link
                href="/#connect"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-orange-500/50 hover:text-orange-400"
              >
                Get in touch
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer t={t} socialLinks={SOCIAL_LINKS} />
    </div>
  );
}
