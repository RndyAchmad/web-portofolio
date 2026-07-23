const siteUrl = "https://rendyachmad.my.id";

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}