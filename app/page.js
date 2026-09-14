import HomePage from "@/components/HomePage";
import {
  HOME_URL,
  PERSON_ALTERNATE_NAMES,
  PERSON_IMAGE_URL,
  PERSON_JOB_TITLE,
  PERSON_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "@/constants/site";
import { SKILLS } from "@/constants/skills";
import { SOCIAL_LINKS } from "@/constants/social-links";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": `${HOME_URL}#person`,
        "@type": "Person",
        name: PERSON_NAME,
        alternateName: PERSON_ALTERNATE_NAMES,
        url: HOME_URL,
        image: PERSON_IMAGE_URL,
        description: SITE_DESCRIPTION,
        jobTitle: PERSON_JOB_TITLE,
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: 'UPN "Veteran" Jawa Timur',
        },
        knowsLanguage: ["Indonesian", "English"],
        knowsAbout: SKILLS.flatMap((skill) => skill.items),
        sameAs: SOCIAL_LINKS
          .filter((link) => ["GitHub", "LinkedIn", "Instagram"].includes(link.name))
          .map((link) => link.href),
        mainEntityOfPage: {
          "@id": `${HOME_URL}#profile-page`,
        },
      },
      {
        "@id": `${HOME_URL}#website`,
        "@type": "WebSite",
        url: HOME_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        author: {
          "@id": `${HOME_URL}#person`,
        },
      },
      {
        "@id": `${HOME_URL}#profile-page`,
        "@type": "ProfilePage",
        url: HOME_URL,
        name: `${PERSON_NAME} | ${PERSON_JOB_TITLE}`,
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        isPartOf: {
          "@id": `${HOME_URL}#website`,
        },
        mainEntity: {
          "@id": `${HOME_URL}#person`,
        },
        about: {
          "@id": `${HOME_URL}#person`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: PERSON_IMAGE_URL,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      <HomePage />
    </>
  );
}
