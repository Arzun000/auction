import React from "react";

export const Contactus = () => {
  return (
    <>
      <div className="flex grid-cols-2 flex-row gap-4 my-[120px]">
        <div className="h-[380px] mt-[40px] ml-[22px] w-[320px] z-10 bg-red-400">
          01
        </div>

        <div className="h-[500px] pt-[60px] pr-[30px] pl-[160px] -z-0 w-[90%] ml-[-120px] rounded shadow-2xl">
          <div className="pb-[40px] ml-[20px]">
            <div className="text-secttl ">Get in Touch</div>
            <div className="section-subtitle text-[#484848] mt-[10px] text-[14px]">
              Feel free to drop us a line below!!
            </div>
          </div>
          <form className="space-y-4 text-gray-700 px-6" action="/">
            <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
              <div className="w-full px-2 md:w-1/2">
                <input
                  className="w-full h-10 px-3 border-b-[1px]  focus:outline-none focus:border-b-[#ea7f23] focus:border-b-[1px] "
                  type="text"
                  placeholder="Your Name"
                  id="formGridCode_name"
                />
              </div>
              <div className="w-full px-2 md:w-1/2">
                <input
                  className="w-full h-10 px-3 border-b-[1px]  focus:outline-none focus:border-b-[#ea7f23] focus:border-b-[1px] "
                  type="text"
                  placeholder="Email Address"
                  id="formGridCode_last"
                />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full">
                <textarea
                  id="message"
                  rows="4"
                  className="textarea"
                  placeholder="Your Message"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="py-[10px] px-[20px] w-auto text-sm text-white rounded-full border-[2px] border-[#ea7f23] bg-[#ea7f23]
           hover:bg-white hover:border-[#ea7f23] hover:text-[#ea7f23] font-bold focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
             dark:hover:text-white dark:hover:bg-gray-700"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </>
  );
};