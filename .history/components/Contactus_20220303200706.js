import React from "react";

export const Contactus = () => {
  return (
    <>
      <canvasmid>
        <div className="mid-canvas ">
          <div className="mid-section mt-[50px] ">
            <div className="section-title-list ">
              <div className="section-title w-[400px] h-[80px] pt-4 border-b-2 border-stone-300 m-auto text-center text-3xl font-bold ">
                <h2>NEED HELP? CONTACT US</h2>
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
        <div className="grid grid-cols-1 bg-blue-200 lg:grid-cols-2 gap-2">
          <div className="map">
            <div className="h-[350px] inline-flex">
              <img
                src="/map/ktm.jpg"
                className="object-fill h-full w-full"
              ></img>
            </div>
          </div>
          <div className="contact-form">d</div>
        </div>
      </canvasmid>
    </>
  );
};
