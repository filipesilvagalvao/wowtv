import { PostProps } from "@/ts_types/ts_types"
import styles from "./Canais.module.css"
import getChannels from "@/functions/getChanels"
import slugify from "@/functions/slugfy"
import Video_Player from "@/components/video_player/Video_Player"


const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

export async function generateMetadata({ params }: { params: { id: string } }) {
    const { id } = await params
    const data: PostProps[] = (await getChannels()) || []

    const content = data.find(({ title }) => {
        return slugify(title) === id
    })

    return {
        title: content?.title,
        description: content?.text || `Assista o canal de tv ${content?.title} de forma grátis no super canais.`,
        openGraph: {
            images: [
                {
                    url: `/thumbs/${content?.cover}`,
                    width: 150,
                    height: 90,
                    alt: content?.title,
                },
            ],
        },
        alternates: {
            canonical:"/" + slugify(`${content?.title}`),
        }
    }
}


async function page({ params }: { params: { id: string } }) {
    const { id } = await params
    const data: PostProps[] = (await getChannels()) || []

    const content = data.find(({ title }) => {
        return slugify(title) === id
    })

    return (
        <main className={styles.post_page}>
            <div className={styles.post_page__container}>
                <header className={styles.post_page__header}>
                    <h1>{content?.title}</h1>
                    <p>Categoria: {content?.category}</p>
                </header>

                <section className={styles.post_page__content}>
                    <div className={styles.post_page__video}>
                        <Video_Player link={`${content?.m3u8}`} />
                    </div>
                    {content?.text &&
                        <div className={styles.post_page__text}>
                            <h2>Um pouco sobre: {content?.title}</h2>
                            <p>{content?.text}</p>
                        </div>
                    }
                </section>
            </div>
        </main>
    )
}

export default page