import React from "react";
import styles from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <h2>CSS only Sliding menu (Hamburger menu)</h2>
      <h2>Demo:</h2>
      <span class={styles.container}>
        <span class={styles.checkbox - container}>
          <input class={styles.checkbox - trigger} type="checkbox" />
          <span class={styles.menu - content}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <span class={styles.hamburger - menu}></span>
          </span>
        </span>
      </span>
    </div>
  );
};
