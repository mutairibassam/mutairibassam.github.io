import styles from "../styles/Registration.module.scss";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createUser = async (data: any) => {
    const { name, email, program } = data;
    console.log("data", data);

    try {
      await fetch("/api/createUser", {
        method: "POST",
        body: JSON.stringify({ name, email, program }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log(err);
    }

    // let _name = (document.getElementById("name_id") as HTMLInputElement).value;

    /**
     *    Clear user input
     *
     */
    (document.getElementById("name_id") as HTMLInputElement).value = "";
    (document.getElementById("email_id") as HTMLInputElement).value = "";
    (document.getElementById("program_id") as HTMLInputElement).value = "";
  };

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

            <form onSubmit={handleSubmit(createUser)}>
              <div className={styles.category}>
                <label>Full Name:</label>
                {errors.name && <span className={styles.mandatory}>*</span>}
              </div>
              <input
                id="name_id"
                placeholder="Name"
                className={styles.field_input}
                {...register("name", {
                  required: "Required",
                })}
              />

              <div className={styles.category}>
                <label>Email:</label>
                {errors.email && <span className={styles.mandatory}>*</span>}
              </div>

              <input
                id="email_id"
                placeholder="Email"
                className={styles.field_input}
                {...register("email", {
                  required: "Required",
                })}
              ></input>

              <div className={styles.category}>
                <label>Program name:</label>
                {errors.program && <span className={styles.mandatory}>*</span>}
              </div>
              <input
                id="program_id"
                placeholder="Program name"
                className={styles.field_input}
                {...register("program", {
                  required: "Required",
                })}
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
