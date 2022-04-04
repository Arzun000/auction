import React from "react";

export const Blogrightnav = () => {
  return (
    <div>
      <div className="right-nav-title mr-[30px]">
        <div className="cat-search  inline-flex">
          <form className="search-pro1 text-[14px] mt-[10px] h-[40px] w-[250px] flex rounded-lgx items-center">
            <input
              type="text"
              placeholder="Search ..."
              className="input-text text-[#cecece] bg-white text-[14px] w-full px-4 "
            />

            <div className="search-btn h-[40px]">
              <button className="h-[40px] px-[10px] ml-[-40px] bg-[#484848] text-gray-600 rounded-full  border-gray-200 hover:bg-[#ea7f23] ">
                <img
                  src="/static/icons/search.png"
                  height={20}
                  width={20}
                ></img>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="left-nav-title mt-[40px]">
        Recent Posts
        <div class="line  mt-[8px]"></div>
        <div className="py-[10px]">
          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              A Phone Keeps Your Friends Away
            </a>
          </div>

          <div className="blog-navlinks">
            <a href="#" class="  hover:text-[#ea7f23]">
              Chromebook Tab 10 review
            </a>
          </div>

          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              Alexa isn't just an assistant
            </a>
          </div>
          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              VR Boxes Sales for Black Friday
            </a>
          </div>
          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              ebay is now selling wirelessplans
            </a>
          </div>
        </div>
      </div>
      <div className="left-nav-title mt-[40px]">
        Categories
        <div class="line  mt-[8px]"></div>
        <div className="py-[10px]">
          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              Gadgets
            </a>
          </div>
          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              Smart
            </a>
          </div>

          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              Technology
            </a>
          </div>
        </div>
      </div>
      <div className="left-nav-title mt-[40px]">
        Post Tags
        <div class="line  mt-[8px]"></div>
        <div className="py-[10px]">
          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              Android
            </a>
          </div>
          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              Devices
            </a>
          </div>

          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              Gaming
            </a>
          </div>
          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              Laptop
            </a>
          </div>
        </div>
      </div>
      <div className="left-nav-title mt-[40px]">
        Archives
        <div class="line  mt-[8px]"></div>
        <div className="py-[10px]">
          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              September 2021
            </a>
          </div>
          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              August 2021
            </a>
          </div>

          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              July 2021
            </a>
          </div>
          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              June 2021
            </a>
          </div>
          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              May 2021
            </a>
          </div>
          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              April 2021
            </a>
          </div>
          <div className="blog-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              January 2021
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
