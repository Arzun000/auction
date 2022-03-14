import React from "react";
import styles from "./Ourteam.module.css";

export const Ourteam = () => {
  return (
    <div className="team-container bg-gray-100">
      <div className="section-title-list mt-[30px] ">
        <div className="section-title w-[400px] h-[80px] pt-4 border-b-2 font-bold border-stone-300 m-auto text-center text-3xl ">
          <h2>OUR TEAM</h2>
        </div>
        <div className="section-subtitle bg-gray-100 w-[50px] m-auto mt-[-15px]">
          <img
            className="mx-auto"
            src="/static/icons/hammer.png"
            height={35}
            width={35}
          ></img>
        </div>
      </div>
      <div className="team-members">
        <div class="relative w-atuo h-auto bg-fuchsia-500">
          <img
            class="rounded-full border border-gray-100 shadow-sm"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="user image"
          />
          <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
        </div>
        <div className="">
          <div class={styles.container}>
            <div class={styles.card}>
              <button>Home</button>
            </div>
            <div class={styles.cardflip}>
              <ul class="absolute bg-white shadow-sh-search w-[180px] text-center text-gray-700 group-hover:block ">
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
    </div>
  );
};
