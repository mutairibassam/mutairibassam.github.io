// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import styles from '../styles/Home.module.css'
import Link from 'next/link'

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


            <Link href="/">
                <a>
                    <h2>Back</h2>
                </a>
            </Link>

        </main>
        </div>
    )
}