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
                src="/images/oldcar01.jpg"
                className="object-fill h-full w-full"
              ></img>
              <div className="image-caption absolute text-center mt-[50px] ml-[80px] ">
                <div className="image-caption-one text-xl font-bold">
                  <p>Super Cars</p>
                </div>
                <div className="image-caption-two pb-2">150 products</div>
                <button
                  type="button"
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-grey-800 rounded-full border-[2px] border-grey-400
           hover:bg-yellow-500 hover:border-yellow-500 hover:text-white font-bold focus:z-10 focus:ring-2 focus:ring-blue-700
            focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
             dark:hover:text-white dark:hover:bg-gray-700"
                >
                  VIEW MORE
                </button>
              </div>
            </div>
          </div>
          <div className="contact-form">d</div>
        </div>
      </canvasmid>
    </>
  );
};
