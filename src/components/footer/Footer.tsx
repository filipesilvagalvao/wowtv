import styles from "./Footer.module.css"

function Footer() {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <footer className={styles.footer}>
        <p>&copy; Alguns direitos reservados - {year}</p>
    </footer>
  )
}

export default Footer