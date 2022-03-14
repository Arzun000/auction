import React from "react";
import styles from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <div class={styles.container}>
        <div class={styles.card}>Home</div>
        <div class={styles.cardflip}>
          <div class="">
            <ul class="absolute hidden bg-white shadow-sh-search w-[180px] ease-in-out duration-1000 text-center text-gray-700 group-hover:block ">
              <li className=" px-4 pt-6 font-bold">DEMOS</li>
              <li class="">
                <a
                  class="hover:text-[#ea7f23] py-2 px-4 block  whitespace-no-wrap"
                  href="#"
                >
                  Main Demo
                </a>
              </li>
              <li class="">
                <a
                  class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Automotive
                </a>
              </li>
              <li class="">
                <a
                  class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Wordpress
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
