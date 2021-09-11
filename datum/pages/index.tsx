import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
// import {
//   Document, Page,
// } from 'react-pdf/dist/esm/entry.webpack';

// import beatFile from "../public/beat"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by datum" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to, <span>datum!</span>
        </h1>

        <p className={styles.description}>WE FILL THE GAPS</p>

        <div className={styles.grid}>
          <a href="android" className={styles.card}>
            <h2>Beat-android &rarr;</h2>
            <p>Build a variety of apps, using the Java programming language.</p>
          </a>

          <Link href="/soon">
            <a className={styles.card}>
              <h2>Beat-data &rarr;</h2>
              <p>Learn how gather, assess, and visualize your data!</p>
            </a>
          </Link>

          <Link href="/soon">
            <a className={styles.card}>
              <h2>Beat-git &rarr;</h2>
              <p>
                Control your projects, and learn how to contribute to
                open-source
              </p>
            </a>
          </Link>

          <Link href="/soon">
            <a className={styles.card}>
              <h2>Beat-flutter &rarr;</h2>
              <p>Develop cross platform applications from single codebase</p>
            </a>
          </Link>
        </div>

        <div className={styles.bottom_grid}>
          <Link href="/registration">
            <a className={styles.reg_btn}>
              <p>Join us</p>
            </a>
          </Link>

          <Link href="/support">
            <a className={styles.reg_btn}>
              <p>Support</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by datum</p>
      </footer>
    </div>
  );
}
