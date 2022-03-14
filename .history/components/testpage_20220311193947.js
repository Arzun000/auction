import React from "react";
import { createPopper } from "@popperjs/core";
//import classes from "./Test.module.css";
export const Testpage = () => {
  <script>const popcorn = document.querySelector('#popcorn');
  const tooltip = document.querySelector('#tooltip');
  createPopper(popcorn, tooltip, {
    placement: 'bottom',
  });</script>
  return (
    <div>
      <button id="testbutton">ff</button>
    </div>
   
  );
};
