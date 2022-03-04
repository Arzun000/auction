import React from "react";

export const Contactus = () => {
  return (
    <>
      <div className="contactuscanvas bg-gray-100">
        <div className="mid-canvas  ">
          <div className="mid-section mt-[50px] ">
            <div className="section-title-list ">
              <div className="section-title w-[400px] h-[80px] pt-4 border-b-2 border-stone-300 m-auto text-center text-3xl font-bold ">
                <h2>NEED HELP? CONTACT US</h2>
              </div>
              <div className="section-subtitle bg-gray-100 w-[50px] content-center m-auto mt-[-15px]">
                <img
                  src="/static/icons/hammer.png"
                  height={35}
                  width={35}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
          <container-map>
            <div className="map">
              <div className="w-full h-[450px] p-5 inline-flex">
                <img
                  src="/map/ktm.jpg"
                  className="object-fill h-full w-full"
                ></img>
              </div>
            </div>
          </container-map>
          {/* Divs containing map and contact us form */}
          <container-form>
            <div className="contact-form bg-white p-4 m-[30px] rounded shadow-2xl">
              <form class="space-y-4 text-gray-700 px-6">
                <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                  <div class="w-full px-2 md:w-1/2">
                    <label class="block mb-1" for="formGridCode_name">
                      First name: <span style={{ color: "#ea7f23" }}>*</span>
                    </label>
                    <input
                      class="w-full h-10 px-3 border-b-[1px]  focus:outline-none focus:border-b-[#ea7f23] focus:border-b-[1px] "
                      type="text"
                      id="formGridCode_name"
                    />
                  </div>
                  <div class="w-full px-2 md:w-1/2">
                    <label class="block mb-1" for="formGridCode_last">
                      Last name:
                    </label>
                    <input
                      class="w-full h-10 px-3 border-b-[1px]  focus:outline-none focus:border-b-[#ea7f23] focus:border-b-[1px] "
                      type="text"
                      id="formGridCode_last"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                  <div class="w-full px-2 md:w-1/2">
                    <label class="block mb-1" for="formGridCode_name">
                      email: <span style={{ color: "#ea7f23" }}>*</span>
                    </label>
                    <input
                      class="w-full h-10 px-3 border-b-[1px]  focus:outline-none focus:border-b-[#ea7f23] focus:border-b-[1px] "
                      type="text"
                      id="formGridCode_name"
                    />
                  </div>
                  <div class="w-full px-2 md:w-1/2">
                    <label class="block mb-1" for="formGridCode_last">
                      Subject: <span style={{ color: "#ea7f23" }}>*</span>
                    </label>
                    <input
                      class="w-full h-10 px-3 border-b-[1px]  focus:outline-none focus:border-b-[#ea7f23] focus:border-b-[1px] "
                      type="text"
                      id="formGridCode_last"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="w-full">
                    <label
                      for="message"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                </div>
                <button
                  type="button"
                  className="py-2.5 px-5 mr-2 mb-2 w-full text-sm text-white rounded-full border-[2px] border-[#ea7f23] bg-[#ea7f23]
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
