import React from "react";
import styles from "@/styles/loginCounter.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Welly Interview</div>
        <a className={styles.context} href="questionOneToThree">
          Question 1 to 3 javaScript
        </a>
        <a className={styles.context} href="isLoggedIn">
          Question 4 條件渲染
        </a>
        <a className={styles.context} href="counter">
          Question 5 計數器
        </a>
      </div>
    </>
  );
}
