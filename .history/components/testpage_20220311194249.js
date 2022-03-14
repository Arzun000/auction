import React from "react";
import { createPopper } from "@popperjs/core";
//import classes from "./Test.module.css";
export const Testpage = () => {
  const popcorn = document.querySelector("#popcorn");
  const tooltip = document.querySelector("#tooltip");
  return (<>
    createPopper(popcorn, tooltip, {
      placement: 'right',
    });</>
  
};