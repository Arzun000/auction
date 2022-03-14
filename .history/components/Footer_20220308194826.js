import React from "react";

export const Footer = () => {
  return (
    <>
      <footer-search>
        <div className="footer-search-container grid bg-[#ea7f23] mt-[10px] h-auto p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 w-full">
          <div className="footer-cap m-auto">
            <p className="font-serif text-[24px]">
              Browse through our products library!
            </p>
          </div>
          <div className="footer-search m-auto">
            <div className="cat-search inline-flex">
              <div className="search-pro bg-gray-100 h-12 w-80 rounded-l-lgx border-gray-200 flex items-center">
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
                />
              </div>
              <div className="search-btn ">
                <button
                  className="py-2 h-12 px-4 bg-white text-gray-600 rounded-full 
                border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 
                focus:outline-none rounded-l-lgx"
                >
                  <img
                    src="/static/icons/search.png"
                    height={30}
                    width={30}
                  ></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer-search>
      <footer-links>
        <div className="footer-link-container grid bg-[#c5c4c1] mt-[1px] h-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
          <div className="contact-info ">
            <div className="container-logo ml-[100px] mt-[20px]">
              <img src="/static/logo-ibid.png" height={150} width={150}></img>
            </div>
            <div className="image-caption-one text-l text-center font-bold">
              <p>
                <a href="#" class="no-underline hover:text-[#ea7f23]">
                  sale@123.com
                </a>
              </p>
              <a href="#" class="no-underline hover:text-[#ea7f23]">
                +977 125 1251 114
              </a>
            </div>
          </div>

          <div className="links bg-red-500">
            <div className="image-caption-two ml-[20px] text-center font-bold p-1">
              Useful links
            </div>
            <div className="links-container text-left">
              <div className="link-one text-l ml-[20px] ">
                <a
                  href="#"
                  class="no-underline text-[#5a5957] hover:text-[#a19e9b]"
                >
                  Mobile Phones
                </a>
              </div>
              <div className="link-one text-l ml-[20px] text-center ">
                <a
                  href="#"
                  class="no-underline text-[#5a5957] hover:text-[#a19e9b]"
                >
                  Laptop
                </a>
              </div>
              <div className="link-one text-l ml-[20px] text-center ">
                <a
                  href="#"
                  class="no-underline text-[#5a5957] hover:text-[#a19e9b]"
                >
                  HeadPhone
                </a>
              </div>
            </div>
          </div>
          <div className="policy">
            <div className="image-caption-two ml-[20px] text-center font-bold p-1">
              Our Policy
            </div>
            <div className="link-one text-l ml-[20px] text-center ">
              <a
                href="#"
                class="no-underline text-[#5a5957] hover:text-[#a19e9b]"
              >
                Home Page
              </a>
            </div>
            <div className="link-one text-l ml-[20px] text-center ">
              <a
                href="#"
                class="no-underline text-[#5a5957] hover:text-[#a19e9b]"
              >
                Blog
              </a>
            </div>
            <div className="link-one text-l ml-[20px] text-center ">
              <a
                href="#"
                class="no-underline text-[#5a5957] hover:text-[#a19e9b]"
              >
                Services
              </a>
            </div>
          </div>
          <div className="subscribe p-2">
            <div className="image-caption-two ml-[20px] text-center text-2xl font-bold p-1">
              Subscribe to our newsletter
            </div>
            <div className="cat-search inline-flex w-[90%]">
              <div className="search-pro bg-gray-100 h-12 w-80 rounded-l-lgx border-gray-200 flex items-center">
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
                />
              </div>
              <div className="search-btn ">
                <button
                  className="py-2 h-12 px-4 bg-white text-gray-600 rounded-full 
                border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 
                focus:outline-none rounded-l-lgx"
                >
                  <img
                    src="/static/icons/search.png"
                    height={30}
                    width={30}
                  ></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer-links>
      <copyright>
        <div className="copy-right h-[50px]"></div>
      </copyright>
    </>
  );
};
