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
          <map>
            <div className="map">
              <div className="w-full h-[450px] p-5 inline-flex">
                <img
                  src="/map/ktm.jpg"
                  className="object-fill h-full w-full"
                ></img>
              </div>
            </div>
          </map>
          {/* Divs containing map and contact us form */}
          <container-form>
            <div className="contact-form p-3">
              <form class="space-y-4 text-gray-700">
                <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                  <div class="w-full px-2 md:w-1/2">
                    <label class="block mb-1" for="formGridCode_name">
                      First name: *
                    </label>
                    <input
                      class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="formGridCode_name"
                    />
                  </div>
                  <div class="w-full px-2 md:w-1/2">
                    <label class="block mb-1" for="formGridCode_last">
                      Last name:
                    </label>
                    <input
                      class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="formGridCode_last"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                  <div class="w-full px-2 md:w-1/2">
                    <label class="block mb-1" for="formGridCode_name">
                      email *
                    </label>
                    <input
                      class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="formGridCode_name"
                    />
                  </div>
                  <div class="w-full px-2 md:w-1/2">
                    <label class="block mb-1" for="formGridCode_last">
                      Subject: *
                    </label>
                    <input
                      class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
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
                  type="submit"
                  class=" w-full px-6 py-2.5 bg-blue-600  text-white font-medium text-xs leading-tight
            uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Sign up
                </button>
              </form>
            </div>
          </container-form>
        </div>
      </canvasmid>
    </>
  );
};
