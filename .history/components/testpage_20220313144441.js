import React from "react";
import styles from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <div class="dots" onclick="this.classList.toggle('active');">
        menu
      </div>

      <div class="list">
        <ul>
          <li>Mark as read</li>
          <li>Flag as important</li>
          <li>Save for later</li>
          <li>Move to trash</li>
          <li>Mark as spam</li>
        </ul>
      </div>
      <div class="dot"></div>

      <div
        class="cursor"
        onclick="document.querySelector('.dots').classList.toggle('active');"
      ></div>
    </div>
  );
};
