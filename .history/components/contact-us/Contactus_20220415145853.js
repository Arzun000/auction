import React from "react";

export const Contactus = () => {
  return (
    <>
      <div className="flex grid-cols-2 flex-row max-w-[1400px] m-auto gap-4 my-[120px]">
        <div className="hidden lg:block h-[380px] mt-[40px] ml-[22px] w-[320px]  bg-[#ea7f23]">
          <div className="contact-info">
            <div className="text-secttl text-center mt-[50px] text-white">
              Contact Us
            </div>
            <div className="contact-info-detail text-white ml-[50px] mt-[20px]">
              <div className="section-subtitle mt-[10px] text-[14px] inline-flex">
                <img
                  src="/static/icons/location_white.png"
                  height={15}
                  width={15}
                  className="mr-[10px] ml-[5px]"
                ></img>
                211 Ullamcorper St Roseville
              </div>
              <div className="section-subtitle mt-[10px] text-[14px] inline-flex">
                <img
                  src="/static/icons/letter_white.png"
                  height={15}
                  width={15}
                  className="mr-[10px] ml-[5px]"
                ></img>
                sale@modeltheme.com
              </div>
              <div className="section-subtitle mt-[10px] text-[14px] inline-flex">
                <img
                  src="/static/icons/phone_white.png"
                  height={15}
                  width={15}
                  className="mr-[10px] ml-[5px]"
                ></img>
                +40 712 345 6789
              </div>
            </div>
          </div>
        </div>

        <div className="h-[560px] lg:h-[500px] pt-[60px] pr-[30px] pl-[160px] -z-0 lg:w-[90%] ml-[-120px] rounded shadow-box-sh">
          <div className="pb-[40px] ml-[20px]">
            <div className="text-secttl ">Get in Touch</div>
            <div className="section-subtitle text-[#817f7f] mt-[10px] text-[14px]">
              Feel free to drop us a line below!!
            </div>
          </div>
          <form className="space-y-4 text-gray-700 px-6" action="/">
            <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
              <div className="w-full px-2 md:w-1/2">
                <input
                  className="w-full bg-[#efefef] p-[20px] rounded-[12px] focus:outline-none  "
                  type="text"
                  placeholder="Your Name"
                  id="formGridCode_name"
                />
              </div>
              <div className="w-full px-2 md:w-1/2">
                <input
                  className="w-full p-[20px] bg-[#efefef] rounded-[12px] focus:outline-none  "
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
                  className="textarea bg-[#efefef] border-none rounded-[12px] focus:border-none"
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
