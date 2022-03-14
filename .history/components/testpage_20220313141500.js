import React from "react";
import styles from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <div class={styles.menu}>
        <span>
          <a href="#">Home</a>
        </span>
        <span>
          <a href="#">About</a>
        </span>
        <span>
          <a href="#">Contact Me</a>
        </span>
      </div>
    </div>
  );
};
