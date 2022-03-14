import React from "react";
import classes from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.foreground}>
          <div>
            <div className=" py-2 px-4 block  whitespace-no-wrap">DEMOS</div>
            <div>
              <a
                class="hover:text-[#ea7f23] py-2 px-4 block  whitespace-no-wrap"
                href="#"
              >
                Main Demo
              </a>
            </div>
            <div>
              <a
                class="hover:text-[#ea7f23] py-2 px-4 block  whitespace-no-wrap"
                href="#"
              >
                Automotive
              </a>
            </div>
            <div>
              <a
                class="hover:text-[#ea7f23] py-2 px-4 block  whitespace-no-wrap"
                href="#"
              >
                Wordpress
              </a>
            </div>
          </div>
        </div>
        <div className="">t</div>
      </div>
    </div>
  );
};
