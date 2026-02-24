import { MetadataRoute } from "next";
import web_channels from "@/web_channels/web_channels.json"
import slugify from "@/functions/slugfy";
const baseURL = process.env.NEXT_PUBLIC_SITE_URL!

export default async function sitemap() {
    const data = web_channels
    const now = new Date().toISOString()

    const channelsURLs = data.map((channel) => ({
        url: `${baseURL}/canais/${slugify(channel.title)}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
    }))

    return [
        {
            url: baseURL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...channelsURLs
    ]
}