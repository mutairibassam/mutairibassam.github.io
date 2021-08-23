import styles from "../styles/Support.module.scss";
import Link from "next/link";

export default function Support() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>You will never be late</h1>
        <p className={styles.description}>Book a slot</p>

        <div>
          <div className={styles.main_container}>
            <p>Select your instructors</p>
            <div className={styles.body_container}>
              <div className={styles.grid}>
                <a
                  href="https://calendly.com/mutairibassam"
                  className={styles.card}
                >
                  <h3>Bassam A. Mutairi</h3>
                </a>
              </div>

              <div className={styles.grid}>
                <a
                  href="https://calendly.com/hassan109"
                  className={styles.card}
                >
                  <h3>Hassan alkheliaf</h3>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.rules_section}>
            <p className={styles.rules}>Rules</p>
            <ul>
              <li>
                Attendance is a must, otherwise, you will get
                <span> NO SHOW.</span>{" "}
                <i>(you will be suspended if you have 3 times)</i>
              </li>
              <li>
                Specify your needs by typing in the subject.{" "}
                <i>(teaching, debugging, open discussion)</i>
              </li>
              <li>Briefly describe your challenge.</li>
              <li>Session evalution is required.</li>
              <li>
                Any cancellation or reschedule should be made at least one hour
                in advance.
              </li>
            </ul>
          </div>
          <Link href="/">
            <a className={styles.btn_back}>
              <p> Back </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
