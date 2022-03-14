import React from "react";
import styles from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <h2 className={styles.h2}>Drop Down Menu</h2>
        <input id="toggle" type="checkbox" checked />
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href="#" className={styles.a}>
              Section 01
            </a>
          </li>
          <li className={styles.li}>
            <a href="#" className={styles.a}>
              Section 02
            </a>
          </li>
          <li className={styles.li}>
            <a href="#" className={styles.a}>
              Section 03
            </a>
          </li>
          <li className={styles.li}>
            <a href="#" className={styles.a}>
              Section 04
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
