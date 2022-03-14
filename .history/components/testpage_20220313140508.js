import React from "react";
import styles from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <h2>CSS only Sliding menu (Hamburger menu)</h2>
      <h2>Demo:</h2>
      <span class={styles.container}>
        <span class="checkbox-container">
          <input class="checkbox-trigger" type="checkbox" />
          <span class="menu-content">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <span class="hamburger-menu"></span>
          </span>
        </span>
      </span>
    </div>
  );
};
