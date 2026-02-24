import getChannels from "@/functions/getChanels"
import styles from "./Pesquisar.module.css"

import { normalize } from "path"
import { Metadata } from "next"
import Post_Card from "@/components/post_card/Post_Card"

// Gerar metadados para bloquear indexação
export async function generateMetadata({ 
    searchParams 
}: { 
    searchParams: { q: string } 
}): Promise<Metadata> {
    const { q } = await searchParams
    
    return {
        title: q ? `Resultados para: ${q}` : "Pesquisa",
        description: q 
            ? `Resultados da pesquisa por "${q}"`
            : "Página de pesquisa",
        // IMPEDIR INDEXAÇÃO
        robots: {
            index: false,
            follow: false,
            nocache: true,
            googleBot: {
                index: false,
                follow: false,
                noimageindex: true,
                'max-snippet': -1,
            },
        },
        // Canonical para evitar conteúdo duplicado
        alternates: {
            canonical: '/pesquisar',
        },
        // Outras meta tags para crawlers
        other: {
            'google': 'nopagereadaloud',
            'googlebot-news': 'noindex',
            'bingbot': 'noindex, nofollow',
        }
    }
}

async function page({ searchParams }: { searchParams: { q: string } }) {
    const data = await getChannels()
    const { q } = (await searchParams)

    const results = data?.filter((result) => {
        const query = q.toLocaleLowerCase()
        const item = result.title.toLowerCase()
        const category = result.category?.toLowerCase()

        return (item.includes(query)||item.includes(normalize(query))||category?.includes(query))
    })
    
    if (results?.length === 0) {
        return (
            <section className={styles.not_found_term}>
                <p>Nenhum resultado para: <span>{q}</span></p>
            </section>
        )
    }
    
    return (
        <main className={styles.results}>
            <h1 className="h1">Resultados para: {q}</h1>
            <section className={styles.results__list}>
                {
                    results?.map((result) => (
                        <Post_Card
                            title={result.title}
                            cover={"/thumbs/" + result.cover}
                            key={result.title}
                        />
                    ))
                }
            </section>
        </main>
    )
}

export default page