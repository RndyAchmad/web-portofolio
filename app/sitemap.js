import { PROJECTS } from "@/constants/projects";
import { HOME_URL, SITE_URL } from "@/constants/site";

export default function sitemap() {
    return [
        {
            url: HOME_URL,
        },
        {
            url: `${SITE_URL}/about`,
        },
        ...PROJECTS.map((project) => ({
            url: `${SITE_URL}/projects/${project.slug}`,
        })),
    ];
}
