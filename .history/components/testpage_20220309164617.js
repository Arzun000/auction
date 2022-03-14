import React from "react";

export const Testpage = () => {
  return (
    <topheader>
      <div className="container m-auto py-2 flex text-[#334141] text-[14px] font-[400] md:flex-row">
        <div className="container-logo inline-block relative p-2 pl-4 ">
          <div class="group inline-block border-r relative">
            <button class="text-gray-700 font-semibold py-2 rounded hover:text-[#ea7f23] inline-flex items-center">
              <span class="mr-1">EN</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="absolute hidden bg-white  shadow-sh-search text-gray-700 pt-1 group-hover:block">
              <li class="">
                <a
                  class="hover:text-[#ea7f23] py-2 w-[80px] px-4 block whitespace-no-wrap"
                  href="#"
                >
                  EN
                </a>
              </li>
              <li class="">
                <a
                  class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  GE
                </a>
              </li>
              <li class="">
                <a
                  class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  FR
                </a>
              </li>
            </ul>
          </div>

          <div className="currency-box w-16 items-center pl-4 inline-flex">
            <div class="group inline-block relative">
              <button class="text-gray-700 font-semibold py-2 rounded hover:text-[#ea7f23] inline-flex items-center">
                <span class="mr-1">EUR</span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul class="absolute hidden bg-white  shadow-sh-search text-gray-700 pt-1 group-hover:block">
                <li class="">
                  <a
                    class="hover:text-[#ea7f23] py-2 w-[80px] px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    EUR
                  </a>
                </li>
                <li class="">
                  <a
                    class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    RON
                  </a>
                </li>
                <li class="">
                  <a
                    class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    JPY
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-top-contact-methods ml-[2px] hidden float-left lg:inline-flex m-auto">
          <div className="header-top-contact-phone ">
            Call us toll free: +40 712 345 678
          </div>
          <div className="header-top-contact-email  mx-4">
            Send us an email: sale@modeltheme.com
          </div>
        </div>
        <button>
          <div className="icons-right float-right pl-[50px] inline-flex">
            <div className="order inline-flex mr-2 p-0">
              <img
                src="/static/icons/truck.png"
                className="p-[4px]"
                height={25}
                width={25}
              ></img>
              Order Tracking
            </div>
            <div className="wish inline-flex">
              <img
                src="/static/icons/heart.png"
                className="p-[4px]"
                height={25}
                width={25}
              ></img>
              Wish List
            </div>
          </div>
        </button>
      </div>
    </topheader>
  );
};
