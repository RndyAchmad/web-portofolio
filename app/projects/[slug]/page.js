import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getProjectBySlug, PROJECTS } from "@/constants/projects";
import { SOCIAL_LINKS } from "@/constants/social-links";
import { translations } from "@/constants/translations";
import { HOME_URL, PERSON_NAME, SITE_URL } from "@/constants/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

function getProjectContent(project) {
  return translations.en.projects.items[project.translationKey];
}

function getProjectMetadata(project) {
  const projectContent = getProjectContent(project);
  const description = projectContent.description.length > 160
    ? `${projectContent.description.slice(0, 157).trimEnd()}…`
    : projectContent.description;
  const canonicalPath = `/projects/${project.slug}`;

  return {
    title: `${project.title} Project`,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "article",
      url: canonicalPath,
      title: `${project.title} | Project by ${PERSON_NAME}`,
      description,
      images: [
        {
          url: project.image,
          alt: `${project.title} project screenshot`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Project by ${PERSON_NAME}`,
      description,
      images: [project.image],
    },
  };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return getProjectMetadata(project);
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const t = translations.en;
  const projectContent = getProjectContent(project);
  const canonicalUrl = `${SITE_URL}/projects/${project.slug}`;
  const isMobileApplication = project.title === "Solemate";
  const programmingLanguages = project.technologies.filter((technology) =>
    ["PHP", "JavaScript", "TypeScript", "Dart"].includes(technology)
  );
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${canonicalUrl}#software-application`,
    name: project.title,
    description: projectContent.description,
    url: canonicalUrl,
    image: `${SITE_URL}${project.image}`,
    applicationCategory: isMobileApplication ? "MobileApplication" : "WebApplication",
    operatingSystem: isMobileApplication ? "Mobile" : "Web",
    programmingLanguage: programmingLanguages,
    author: {
      "@id": `${HOME_URL}#person`,
    },
    isPartOf: {
      "@id": `${HOME_URL}#website`,
    },
    ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0c0c0c] font-sans text-white selection:bg-orange-500 selection:text-black">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-5 pb-20 pt-32 sm:px-8 md:px-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
        />

        <nav aria-label="Breadcrumb" className="mb-10 text-sm text-gray-400">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="transition-colors hover:text-orange-400">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/#projects" className="transition-colors hover:text-orange-400">Projects</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-200" aria-current="page">{project.title}</li>
          </ol>
        </nav>

        <article>
          <header className="border-b border-white/10 pb-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              {projectContent.type}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
              {projectContent.description}
            </p>
          </header>

          <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-surface">
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              width={1600}
              height={1000}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <section className="grid gap-8 py-14 md:grid-cols-[1.2fr_0.8fr]" aria-labelledby="project-overview-title">
            <div>
              <h2 id="project-overview-title" className="text-3xl font-bold text-white">
                Project overview
              </h2>
              <p className="mt-5 leading-relaxed text-gray-300">
                {projectContent.description}
              </p>
            </div>
            <aside className="rounded-2xl border border-white/10 bg-surface p-6">
              <h2 className="text-xl font-bold text-white">Role and focus</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-orange-400">Role</dt>
                  <dd className="mt-1 text-gray-300">{project.role}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-orange-400">Project type</dt>
                  <dd className="mt-1 text-gray-300">{projectContent.type}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-orange-400">Author</dt>
                  <dd className="mt-1 text-gray-300">{PERSON_NAME}</dd>
                </div>
              </dl>
            </aside>
          </section>

          <section className="rounded-3xl border border-white/5 bg-surface p-8 sm:p-10" aria-labelledby="technology-title">
            <h2 id="technology-title" className="text-3xl font-bold text-white">
              Technology stack
            </h2>
            <p className="mt-3 leading-relaxed text-gray-400">
              Technologies used for this project, based on the published portfolio record.
            </p>
            <ul className="mt-7 flex flex-wrap gap-3" aria-label={`${project.title} technologies`}>
              {project.technologies.map((technology) => (
                <li key={technology} className="rounded-lg border border-orange-500/30 bg-orange-500/10 px-3 py-2 text-sm font-semibold text-orange-300">
                  {technology}
                </li>
              ))}
            </ul>
          </section>

          <section className="py-14" aria-labelledby="highlights-title">
            <h2 id="highlights-title" className="text-3xl font-bold text-white">
              Scope and key features
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-gray-400">
              These are the published project focus areas and features represented in this portfolio.
            </p>
            <ul className="mt-7 grid gap-4 sm:grid-cols-3">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="rounded-2xl border border-white/10 bg-[#171717] p-5 text-sm leading-relaxed text-gray-300">
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          <section className="py-14" aria-labelledby="project-links-title">
            <h2 id="project-links-title" className="text-3xl font-bold text-white">
              Project links
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-gray-400">
              Explore more of Rendy&apos;s work or use the available project link when it is public.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-orange-400"
                >
                  Visit project link
                </a>
              )}
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-orange-500/50 hover:text-orange-400"
              >
                View all projects
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-orange-500/50 hover:text-orange-400"
              >
                About {PERSON_NAME}
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer t={t} socialLinks={SOCIAL_LINKS} />
    </div>
  );
}
