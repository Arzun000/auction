import React from "react";
import classes from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <div className="card">
        <div className={classes.card}>g</div>
        <div className={classes.card.foreground}>t</div>
      </div>
    </div>
  );
};
