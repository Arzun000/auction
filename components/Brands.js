import React from "react";
//+import "./Brands.module.css";
export const Brands = () => {
  return (
    <div>
      <div className="news-container bg-gray-100">
        <div className="section-title-list mt-[50px] ">
          <div className="section-title w-[400px] h-[80px] pt-4 border-b-2 border-stone-300 m-auto text-center text-3xl font-bold ">
            <h2>SHOP BY BRAND</h2>
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
        <div className="slider-images">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
            <a href="#">
              <div>
                <img src="https://picsum.photos/seed/3/342/180" alt="" />
              </div>
            </a>
            <a href="#">
              <div>
                <img src="https://picsum.photos/seed/4/342/180" alt="" />
              </div>
            </a>
            <a href="#">
              <div>
                <img src="https://picsum.photos/seed/5/342/180" alt="" />
              </div>
            </a>
            <a href="#">
              <div>
                <img src="https://picsum.photos/seed/6/342/180" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
