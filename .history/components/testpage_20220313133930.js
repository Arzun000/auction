import React from "react";
import styles from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <body>
        <ul className={styles.ul}>
          <li className={styles.li}>
            {" "}
            Menu Item
            <ul className={styles.ul}>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
            </ul>{" "}
          </li>
        </ul>
      </body>
    </div>
  );
};
