import styles from "./not-found.module.css"
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className={styles.not404}>
      <section >
        <h1>404 - Página Não Encontrada</h1>
        <p>Desculpe, a página que você está procurando não existe.</p>
        <Link href="/" className="link">
          Voltar para a página inicial
        </Link>
      </section>
    </main>
  );
}