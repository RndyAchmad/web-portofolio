import { SITE_URL } from "@/constants/site";

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/"],
            },
            {
                userAgent: "GPTBot",
                allow: "/",
            },
            {
                userAgent: "ClaudeBot",
                allow: "/",
            },
            {
                userAgent: "Google-Extended",
                allow: "/",
            },
            {
                userAgent: "CCBot",
                allow: "/",
            },
        ],

        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
