import { PostProps } from "@/ts_types/ts_types"
import styles from "./Categoria.module.css"
import getChannels from "@/functions/getChanels"
import slugify from "@/functions/slugfy"
import Post_Card from "@/components/post_card/Post_Card"

// Gerar metadados dinâmicos
export async function generateMetadata({ params }: { params: { id: string } }) {
    const { id } = await params
    const data: PostProps[] = (await getChannels()) || []
    
    const posts = data.filter(({ category }) => {
        return slugify(`${category}`) === id
    })
    
    return {
        title: posts[0]?.category || "Categoria",
        description: `Página da categoria ${posts[0]?.category}`,
        // IMPEDIR INDEXAÇÃO AQUI
        robots: {
            index: false,
            follow: true, // ou false dependendo da necessidade
            nocache: true,
            googleBot: {
                index: false,
                follow: true,
                noimageindex: true,
            },
        },
        // Opcional: outras meta tags
        other: {
            'googlebot-news': 'noindex',
        }
    }
}

async function page({ params }: { params: { id: string } }) {
    const { id } = await params
    const data: PostProps[] = (await getChannels()) || []

    const posts = data.filter(({ category }) => {
        return slugify(`${category}`) === id
    })

    return (
        <main className={styles.category}>
            <h1 className="h1">{posts[0]?.category}</h1>
            <div className={styles.category__posts}>
                {
                    posts?.map((post) => (
                        <Post_Card
                            title={post.title}
                            cover={"/thumbs/" + post.cover}
                            key={post.title}
                        />
                    ))
                }
            </div>
        </main>
    )
}

export default page