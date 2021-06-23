// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import styles from '../styles/Home.module.css'

export default function Soon() {
    return (
        <div>
        <main className={styles.main}>
            <h1 className={styles.title}>
                Coming soon!
            </h1>

            <p className={styles.description}>
                Our team is assessing the content to make sure it&apos;s flawless
            </p>
        </main>
        </div>
    )
}