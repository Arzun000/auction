import React from "react";
import styles from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <div class="dropdown">
        <input type="checkbox" id="dropdown" />

        <label class="dropdown__face" for="dropdown">
          <div class="dropdown__text">Dropdown</div>

          <div class="dropdown__arrow"></div>
        </label>

        <ul class="dropdown__items">
          <li>🙂</li>
          <li>😺</li>
          <li>😽</li>
          <li>😎</li>
          <li>🤗</li>
        </ul>
      </div>

      <svg>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
    </div>
  );
};
