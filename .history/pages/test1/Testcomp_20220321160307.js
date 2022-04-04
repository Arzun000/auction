import React from "react";
import Styles from "./Testcomp.module.css";
import { Iconsverticalbid } from "../../components/icons/Iconsverticalbid";
import { Iconsverticalbuy } from "../../components/icons/Iconsverticalbuy";

export const Testcomp = () => {
  return (
    <div>
      <div class="w3-container">
        <h2>Tabs</h2>
        <p>
          Tabs are perfect for single page web applications, or for web pages
          capable of displaying different subjects. Click on the links below.
        </p>
      </div>

      <div class="w3-bar w3-black">
        <button class="w3-bar-item w3-button" onclick="openCity('London')">
          London
        </button>
        <button class="w3-bar-item w3-button" onclick="openCity('Paris')">
          Paris
        </button>
        <button class="w3-bar-item w3-button" onclick="openCity('Tokyo')">
          Tokyo
        </button>
      </div>

      <div id="London" class="w3-container city">
        <h2>London</h2>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" class="w3-container city" style="display:none">
        <h2>Paris</h2>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" class="w3-container city" style="display:none">
        <h2>Tokyo</h2>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </div>
  );
};