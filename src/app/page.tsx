import styles from './page.module.css'
import getChannels from "@/functions/getChanels";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css'
import Post_Card from '@/components/post_card/Post_Card';


export default async function Home({ searchParams }: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {

  const params = await searchParams


  const data = await getChannels() || []

  const page = params["page"] ?? 1

  const per_page = params["per_page"] ?? 21

  const start = (Number(page) - 1) * Number(per_page) //0, 5, 10 ...
  const end = start + Number(per_page) //5, 10, 15 ...

  const posts = data.slice(start, end)

  const prev_link = (Number(page) === 1
    ?
    `/?page=${Math.round(data.length / Number(per_page))}&per_page=${per_page}`
    :
    `/?page=${Number(page) - 1}&per_page=${per_page}`)

  const next_link = (Number(page) === (Math.round(data.length / Number(per_page)))
    ?
    `/`
    :
    `/?page=${Number(page) + 1}&per_page=${per_page}`)

  const allPages = Math.round(data.length / Number(per_page))

  return (
    <main className={styles.page}>
      <h2 className='h2'>TV online</h2>
      <section className={styles.page__content}>
        <div className={styles.page__posts}>
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
        <div className={styles.page__navigation}>
          <Link href={prev_link}><i className="fa-solid fa-angle-left"></i>PREV</Link>
          <span> {page} / {allPages} </span>
          <Link href={next_link}>NEXT<i className="fa-solid fa-angle-right"></i></Link>
        </div>

        <div className={styles.page__text}>
          <p>
            O wowtv é um site que disponilibiza uma vasta lista de lives de entretenimento, canais de tv aberta e webtvs.  O site também conta com uma barra de pesquisa para facilitar a navegação, permitindo buscar canais por nome ou categoria, além de links organizados por temas.
          </p>

        </div>

      </section>

    </main>
  );
}
