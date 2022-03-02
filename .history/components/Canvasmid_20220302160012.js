import React from "react";
import styles from "./canvasmid.module.css";

export const Canvasmid = () => {
  return (
    <>
      <canvasmid>
        <div className="mid-canvas ">
          <div className="mid-section mt-[100px] ">
            <div className="section-title-list ">
              <div className="section-title w-[350px] h-[80px] pt-4 border-b-2 border-stone-300 m-auto text-center text-3xl font-bold ">
                <h2>LATEST AUCTIONS</h2>
              </div>
              <div className="section-subtitle bg-white w-[50px] m-auto mt-[-15px]">
                <img
                  src="/static/icons/hammer.png"
                  height={35}
                  width={35}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </canvasmid>
      <canvasmidcards>
        <div className="canvas-cards">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 p-5 pb-6">
            <div className="h-[250px] bg-blue-200 w-150">
              <img class="object-fill h-48 w-96" src="/images/car1.jpg"></img>
            </div>
            <div className="h-[250px] bg-blue-200 w-150">02</div>
            <div className="h-[250px] bg-blue-200 w-150">03</div>
            <div className="h-[250px] bg-blue-200 w-150">04</div>
          </div>
        </div>
      </canvasmidcards>
    </>
  );
};
