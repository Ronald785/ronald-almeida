import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseURl = "https://ronald-almeida.com";

    return [
        {
            url: baseURl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
            images: ["https://ronald-almeida.com/assets/images/og-image.webp"],
        },
    ];
}
