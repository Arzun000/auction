import React from "react";
import styles from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Products ▾</a>
          <ul class="dropdown">
            <li>
              <a href="#">Laptops</a>
            </li>
            <li>
              <a href="#">Monitors</a>
            </li>
            <li>
              <a href="#">Printers</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};
