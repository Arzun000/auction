import React from "react";
import classes from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <div className={classes.card}>
        <div className="">t</div>
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
      </div>

      <div className={classes.card2}>
        <div className="">t</div>
        <div className={classes.foreground}>
          <div>
            <div className=" py-2 px-4 block  whitespace-no-wrap">DEMOS2</div>
            <div className="shop-menu-left">
              <li className=" px-4 pt-6 font-bold">IT & Computer</li>
              <li class="">
                <a
                  class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Laptops
                </a>
              </li>
              <li class="">
                <a
                  class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Desktops
                </a>
              </li>
              <li class="">
                <a
                  class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Graphic Cards
                </a>
              </li>
              <li class="">
                <a
                  class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Work Stations
                </a>
              </li>
              <li class="">
                <a
                  class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  RAM
                </a>
              </li>
            </div>
            <div className="shop-menu-mid">
              <li className=" px-4 pt-6 font-bold">WEARABLE</li>
              <li class="">
                <a
                  class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Smart Watches
                </a>
              </li>
              <li class="">
                <a
                  class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Fitness Bracelets
                </a>
              </li>
              <li class="">
                <a
                  class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Masks
                </a>
              </li>
              <li class="">
                <a
                  class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Electronic Tagging
                </a>
              </li>
            </div>
            <div className="shop-menu-right">
              {" "}
              <li className=" px-4 pt-6 font-bold">PHONES</li>
              <li class="">
                <a
                  class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Phone Cases
                </a>
              </li>
              <li class="">
                <a
                  class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Android
                </a>
              </li>
              <li class="">
                <a
                  class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Smart Phones
                </a>
              </li>
              <li class="">
                <a
                  class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Chargers
                </a>
              </li>
              <li class="">
                <a
                  class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Apple Phones
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
