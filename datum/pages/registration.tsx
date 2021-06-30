import styles from "../styles/Registration.module.scss";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Registration() {
  return (
    <div>
      <main>
        <div className={styles.container}>
          <div className={styles.box}>
            <Link href="/">
              <div className={styles.back}>
                <AiOutlineArrowLeft />
              </div>
            </Link>
            <p className={styles.description}>Registration form</p>

            <form>
              <div className={styles.category}>
                <label>Full Name:</label>
              </div>
              <input placeholder="Name" className={styles.field_input}></input>

              <div className={styles.category}>
                <label>Email:</label>
              </div>

              <input placeholder="Email" className={styles.field_input}></input>

              <div className={styles.category}>
                <label>Program name:</label>
              </div>
              <input
                placeholder="Program name"
                className={styles.field_input}
              ></input>

              <div>
                <button className={styles.submit}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
