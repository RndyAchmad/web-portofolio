import HomePage from "@/components/HomePage";
import { translations } from "@/constants/translations";
import { PROJECTS } from "@/constants/projects";
import { SKILLS } from "@/constants/skills";

export const metadata = {
  alternates: {
    canonical: "https://rendyachmad.my.id/",
  },
};

export default function Page() {
  const BASE_URL = "https://rendyachmad.my.id";

  const t = translations["en"];

  const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": `${BASE_URL}/#person`,
        "@type": "Person",
        name: "Rendy Achmadiansyah Mukti",
        alternateName: "Rendy Achmad",
        url: BASE_URL,
        image: `${BASE_URL}/images/og-image.png`,
        description: "Fullstack Web Developer specializing in Laravel, Next.js, React, PHP, and scalable backend development.",
        email: "mailto:rendyachmad55@gmail.com",
        nationality: {
          "@type": "Country",
          name: "Indonesia",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "UPN Veteran Jawa Timur",
        },
        knowsLanguage: ["Indonesian", "English"],
        jobTitle: "Fullstack Web Developer",
        knowsAbout: SKILLS.flatMap((item) => item.items),
        sameAs: [
          BASE_URL,
          "https://github.com/rndyachmad",
          "https://linkedin.com/in/rendyachmad/",
          "https://instagram.com/rendyachmad.m",
        ],
        mainEntityOfPage: {
          "@id": `${BASE_URL}/#webpage`,
        },
      },
      {
        "@id": `${BASE_URL}/#organization`,
        "@type": "Organization",
        name: "Rendy Achmadiansyah Mukti Portfolio",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/images/og-image.png`,
        },
        founder: {
          "@id": `${BASE_URL}/#person`,
        },
        sameAs: [
          BASE_URL,
          "https://github.com/rndyachmad",
          "https://linkedin.com/in/rendyachmad/",
        ],
      },
      {
        "@id": `${BASE_URL}/#website`,
        "@type": "WebSite",
        url: BASE_URL,
        name: "Rendy Achmadiansyah Mukti Portfolio",
        description: "Portfolio website of Rendy Achmadiansyah Mukti featuring projects, experience, skills, and contact information.",
        inLanguage: "en",
        publisher: {
          "@id": `${BASE_URL}/#organization`,
        },
      },
      {
        "@id": `${BASE_URL}/#webpage`,
        "@type": "WebPage",
        url: BASE_URL,
        name: "Rendy Achmadiansyah Mukti | Fullstack Web Developer",
        description: "Portfolio of Rendy Achmadiansyah Mukti, Fullstack Web Developer specializing in Laravel, Next.js, React, PHP, REST APIs, and scalable backend systems.",
        about: {
          "@id": `${BASE_URL}/#person`,
        },
        isPartOf: {
          "@id": `${BASE_URL}/#website`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${BASE_URL}/images/og-image.png`,
        },
        keywords: [
          "Rendy Achmadiansyah Mukti",
          "Rendy Achmad",
          "Fullstack Web Developer",
          "Laravel Developer",
          "Next.js Developer",
          "React Developer",
          "Backend Developer",
          "PHP Developer",
          "Web Developer Indonesia",
        ],
      },
      ...PROJECTS.map((project) => {
        const projectData = t.projects.items[project.translationKey];
        const programmingLanguages = project.technologies.filter((tech) =>
          [
            "PHP", "JavaScript", "TypeScript", "Laravel", "React",
            "Next.js", "Flutter", "Dart",
          ].includes(tech)
        );

        return {
          "@id": `${BASE_URL}/#${project.title.toLowerCase().replace(/\s+/g, "-")}`,
          "@type": "SoftwareApplication",
          name: project.title,
          description: projectData.description,
          url: project.liveUrl || BASE_URL,
          image: `${BASE_URL}${project.image}`,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
          programmingLanguage: programmingLanguages,
          author: { "@id": `${BASE_URL}/#person` },
          publisher: { "@id": `${BASE_URL}/#organization` },
          creator: { "@id": `${BASE_URL}/#person` },
        };
      }),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <HomePage />
    </>
  );
}