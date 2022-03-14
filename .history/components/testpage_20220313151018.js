import React from "react";
import styles from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a href="#">Home</a>
        </li>
        <li className={styles.li}>
          <a href="#">About</a>
        </li>
        <li className={styles.li}>
          <a href="#">Products ▾</a>
          <ul class={styles.dropdown}>
            <li className={styles.li}>
              <a href="#">Laptops</a>
            </li>
            <li className={styles.li}>
              <a href="#">Monitors</a>
            </li>
            <li className={styles.li}>
              <a href="#">Printers</a>
            </li>
          </ul>
        </li>
        <li className={styles.li}>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};
