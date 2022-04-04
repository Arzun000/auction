import React from "react";
import Styles from "./latestauction.module.css";

export const Latestauctions = () => {
  return (
    <>
      <div className="section-title-list mt-[100px] ">
        <div className="section-title w-[350px] h-[80px] pt-4 border-b-2 border-stone-300 m-auto text-center ">
          <h2 className="text-secttl">LATEST AUCTIONS</h2>
        </div>
        <div className="section-subtitle bg-white w-[50px] m-auto pb-[20px] mt-[-15px]">
          <img
            className="mx-auto"
            src="/static/icons/hammermain.png"
            height={25}
            width={25}
          ></img>
        </div>
      </div>

      {/* list of latest auction items */}

      <div class="flex gap-6  flex-warp ">
        <div class="w-1/4 h-[200px]">
          <a href="">
            <img
              src="https://picsum.photos/seed/1/2000/1000"
              class="rounded-xl brightness-75"
            />
          </a>
          <p class="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3">
            {" "}
            thick soup{" "}
          </p>
        </div>

        <div class="">
          <a href="">
            <img
              src="https://picsum.photos/seed/2/2000/1000"
              class="rounded-xl brightness-75"
            />
          </a>
          <p class="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3">
            {" "}
            egg{" "}
          </p>
        </div>

        <div class="col-span-2">
          <a href="">
            <img
              src="https://picsum.photos/seed/3/2000/1000"
              class="rounded-xl brightness-75"
            />
          </a>
          <p class="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3">
            {" "}
            french toast{" "}
          </p>
        </div>

        <div class="col-span-2">
          <a href="">
            <img
              src="https://picsum.photos/seed/4/2000/1000"
              class="rounded-xl brightness-75"
            />
          </a>
          <p class="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3">
            {" "}
            bread{" "}
          </p>
        </div>

        <div class="col-span-2">
          <a href="">
            <img
              src="https://picsum.photos/seed/5/2000/1000"
              class="rounded-xl brightness-75"
            />
          </a>
          <p class="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3">
            {" "}
            pasta{" "}
          </p>
        </div>
      </div>
    </>
  );
};
