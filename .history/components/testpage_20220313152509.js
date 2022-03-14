import React from "react";
import styles from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <div class={styles.container}>
        <div class={styles.card}>Home</div>
        <div class={styles.cardflip}></div>
      </div>
    </div>
  );
};
