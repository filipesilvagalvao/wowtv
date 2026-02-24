export type PostProps = {
    title: string,
    cover?: string,
    m3u8?: `https://${string}.m3u8`,
    text?: string | null,
    category?: string
}