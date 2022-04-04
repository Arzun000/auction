import React from "react";

export const Blogrightnav = () => {
  return (
    <div>
      <div className="right-nav-title">
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
        Size
        <div class="line  mt-[8px]"></div>
        <div className="py-[10px]">
          <div className="shop-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              Large(2){" "}
            </a>
          </div>

          <div className="shop-navlinks">
            <a href="#" class="  hover:text-[#ea7f23]">
              Medium(42)
            </a>
          </div>

          <div className="shop-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              Small(28){" "}
            </a>
          </div>
        </div>
      </div>
      <div className="left-nav-title mt-[40px]">
        Product Tags
        <div class="line  mt-[8px]"></div>
        <div className="py-[10px]">
          <div className="shop-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              Phones
            </a>
          </div>
          <div className="shop-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              Cars
            </a>
          </div>

          <div className="shop-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              Scooters{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="left-nav-title mt-[40px]">
        Product Categories
        <div class="line  mt-[8px]"></div>
        <div className="py-[10px]">
          <div className="shop-navlinks">
            <a href="#" class="  hover:text-[#ea7f23]">
              Phones
            </a>
            <div className="py-[10px] pl-[10px]">
              <div className="shop-navlinks py-[5px] ">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Data Cables
                </a>
              </div>

              <div className="shop-navlinks py-[5px]">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Mobile Chargers
                </a>
              </div>

              <div className="shop-navlinks py-[5px]">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Mobile phones
                </a>
              </div>

              <div className="shop-navlinks py-[5px] ">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Power Banks{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="shop-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              Computers
            </a>
            <div className="py-[10px] pl-[10px]">
              <div className="shop-navlinks py-[5px]">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Desktop PC
                </a>
              </div>

              <div className="shop-navlinks py-[5px]">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Accessories
                </a>
              </div>

              <div className="shop-navlinks py-[5px] ">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Peripherals{" "}
                </a>
              </div>

              <div className="shop-navlinks py-[5px] ">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Memory
                </a>
              </div>
            </div>
          </div>

          <div className="shop-navlinks ">
            <a href="#" class="  hover:text-[#ea7f23]">
              Gaming
            </a>
            <div className="py-[10px] pl-[10px]">
              <div className="shop-navlinks py-[5px]">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Playstation
                </a>
              </div>

              <div className="shop-navlinks py-[5px] ">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Xbox{" "}
                </a>
              </div>

              <div className="shop-navlinks py-[5px] ">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Games
                </a>
              </div>

              <div className="shop-navlinks py-[5px]">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Accessories
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
