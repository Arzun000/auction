import React from "react";
export const news = () => {
  return (
    <>
      <div className="contactus bg-gray-100">
        <div className="section-title-list mt-[50px] ">
          <div className="section-title w-[400px] h-[80px] pt-4 border-b-2 border-stone-300 m-auto text-center text-3xl font-bold ">
            <h2>NEED HELP? CONTACT US</h2>
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
      </div>
    </>
  );
};
