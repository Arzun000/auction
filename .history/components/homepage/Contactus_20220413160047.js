import React from "react";

export const Contactus = () => {
  return (
    <>
      <div className="contactus mt-[60px] max-w-[1400px] m-auto">
        <div className="section-title-list ">
          <div className="section-title w-[400px] h-[120px] pt-4 border-b-2 border-stone-300 m-auto text-center ">
            <h2 className="text-secttl break-words ">
              NEED HELP? <br /> CONTACT US
            </h2>
          </div>
          <div className="section-subtitle bg-white w-[50px] m-auto mt-[-15px]">
            <img
              className="mx-auto"
              src="/static/icons/hammermain.png"
              height={25}
              width={25}
            ></img>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-[20px] lg:grid-cols-2 gap-2">
          <container-map>
            <div className="map">
              <div className="w-full h-[450px] px-5 inline-flex">
                <img
                  src="/map/ktm.jpg"
                  className="object-fill h-full w-full"
                ></img>
              </div>
            </div>
          </container-map>
          {/* Divs containing contact us form */}
          <container-form>
            <div className="contact-form bg-white p-6 h-[450px] rounded shadow-2xl">
              <form className="space-y-4 text-gray-700 px-6" action="/">
                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                  <div className="w-full px-2 md:w-1/2">
                    <label className="block mb-1">
                      First name: <span style={{ color: "#ea7f23" }}>*</span>
                    </label>
                    <input
                      className="w-full h-10 px-3 border-b-[1px]  focus:outline-none focus:border-b-[#ea7f23] focus:border-b-[1px] "
                      type="text"
                      id="formGridCode_name"
                    />
                  </div>
                  <div className="w-full px-2 md:w-1/2">
                    <label className="block mb-1">Last name:</label>
                    <input
                      className="w-full h-10 px-3 border-b-[1px]  focus:outline-none focus:border-b-[#ea7f23] focus:border-b-[1px] "
                      type="text"
                      id="formGridCode_last"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                  <div className="w-full px-2 md:w-1/2">
                    <label className="block mb-1" for="formGridCode_name">
                      email: <span style={{ color: "#ea7f23" }}>*</span>
                    </label>
                    <input
                      className="w-full h-10 px-3 border-b-[1px]  focus:outline-none focus:border-b-[#ea7f23] focus:border-b-[1px] "
                      type="text"
                      id="formGridCode_name"
                    />
                  </div>
                  <div className="w-full px-2 md:w-1/2">
                    <label className="block mb-1">
                      Subject: <span style={{ color: "#ea7f23" }}>*</span>
                    </label>
                    <input
                      className="w-full h-10 px-3 border-b-[1px]  focus:outline-none focus:border-b-[#ea7f23] focus:border-b-[1px] "
                      type="text"
                      id="formGridCode_last"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <label
                      for="message"
                      className="block mb-2 text-sm font-medium dark:text-gray-400"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="textarea"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="py-[10px] w-full text-sm text-white rounded-full border-[2px] border-[#ea7f23] bg-[#ea7f23]
           hover:bg-white hover:border-[#ea7f23] hover:text-[#ea7f23] font-bold focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
             dark:hover:text-white dark:hover:bg-gray-700"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </container-form>
        </div>
      </div>
    </>
  );
};
