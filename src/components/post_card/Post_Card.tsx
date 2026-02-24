import { PostProps } from "@/ts_types/ts_types"
import styles from "./Post_Card.module.css"
import Link from "next/link"
import slugify from "@/functions/slugfy"


function Post_Card({ title, cover }: PostProps) {
  return (
    <article className={styles.post_card}>

      <figure className={styles.post_card__figure}>

        <img src={cover} alt={title} />
        <figcaption>{title}</figcaption>

      </figure>

      <Link href={`/canais/${slugify(title)}`} className={styles.post_card__link}>
        <i className="fa-solid fa-play"></i>
      </Link>
    </article>
  )
}

export default Post_Card