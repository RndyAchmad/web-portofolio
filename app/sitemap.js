import { PROJECTS } from "@/constants/projects";
import { HOME_URL, SITE_URL } from "@/constants/site";

export default function sitemap() {
    return [
        {
            url: HOME_URL,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${SITE_URL}/about`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        ...PROJECTS.map((project) => ({
            url: `${SITE_URL}/projects/${project.slug}`,
            changeFrequency: "monthly",
            priority: 0.7,
        })),
    ];
}
