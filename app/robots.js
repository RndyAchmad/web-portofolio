const siteUrl = "https://rendyachmad.my.id";

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",
                    "/_next/",
                ],
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

        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    };
}