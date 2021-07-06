import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Soon() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Coming soon!</h1>

        <p className={styles.description}>
          Our team is assessing the content to make sure it&apos;s flawless
        </p>

        <Link href="/">
          <a className={styles.main}>
            <p> BACK </p>
          </a>
        </Link>
      </main>
    </div>
  );
}
