import React from "react";
export const News = () => {
  return (
    <>
      <div className="contactus bg-gray-100">
        <div className="section-title-list mt-[50px] ">
          <div className="section-title w-[400px] h-[80px] pt-4 border-b-2 border-stone-300 m-auto text-center text-3xl font-bold ">
            <h2>LATEST NEWS</h2>
          </div>
          <div className="section-subtitle bg-gray-100 w-[50px] m-auto mt-[-15px]">
            <img
              className="mx-auto"
              src="/static/icons/hammer.png"
              height={35}
              width={35}
            ></img>
          </div>

          <div className="news-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-orange-300 ">
            <div>01</div>
            <div>01</div>
            <div>09</div>
          </div>
        </div>
      </div>
    </>
  );
};
