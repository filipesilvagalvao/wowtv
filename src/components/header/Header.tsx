import Link from "next/link"
import styles from "./Header.module.css"
import Search_bar from "./search_bar/Search_bar"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>

                <input type="checkbox" id="menu-toggle" className={styles.header__checkbox} />
                <label htmlFor="menu-toggle" className={styles.header__hamburguer}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <nav className={styles.header__nav}>
                    <a href="/"><i className="fa-regular fa-house"></i> Home</a>
                    <a href="/categoria/tv-aberta">TV Aberta</a>
                    <a href="/categoria/series">Séries</a>
                    <a href="/categoria/filmes">Filmes</a>
                    <a href="/categoria/variedade">Variedades</a>
                    <a href="/categoria/desenhos">Desenhos</a>
                    <a href="/categoria/noticias">Notícias</a>
                    <a href="/categoria/webtv">WebTV</a>
                    <a href="/categoria/educacao">Educação</a>
                    <a href="/categoria/tv-local">TV Local</a>
                    <a href="/categoria/turismo">Turismo</a>
                    <a href="/categoria/esportes">Esportes</a>
                    <a href="/categoria/documentarios">Documentários</a>
                    <a href="/categoria/religiosos">Religiosos</a>
                    <a href="/categoria/culinaria">Culinária</a>
                </nav>

                <div className={styles.header__logo}>
                    <Link href="/">
                        <h1>WowTV!</h1>
                    </Link>
                </div>

                <Search_bar/>

            </div>
        </header>
    )
}

export default Header