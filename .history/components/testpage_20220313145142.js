import React from "react";
import styles from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <div className={styles.nav}>
        <h2>Drop Down Menu</h2>
        <input id="toggle" type="checkbox" checked />
        <div className={styles.ul}>
          <li>
            <a href="#">Section 01</a>
          </li>
          <li>
            <a href="#">Section 02</a>
          </li>
          <li>
            <a href="#">Section 03</a>
          </li>
          <li>
            <a href="#">Section 04</a>
          </li>
        </div>
      </div>
    </div>
  );
};
