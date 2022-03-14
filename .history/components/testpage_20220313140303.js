import React from "react";

export const Testpage = () => {
  return (
    <div>
      <h2>CSS only Sliding menu (Hamburger menu)</h2>
      <h2>Demo:</h2>
      <span class="container">
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