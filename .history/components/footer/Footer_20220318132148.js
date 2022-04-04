import React from "react";

export const Footer = () => {
  return (
    <>
      <footer-search>
        <div className="footer-search-container grid bg-[#ea7f23] py-[20px] h-auto p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 w-full">
          <div className="footertxt ">
            <p>Browse through our products library!</p>
          </div>
          <div className="footer-search m-auto">
            <div className="cat-search md:ml-[220px] inline-flex">
              <div className="search-pro1 text-[14px] bg-white h-[40px] w-[400px] shadow-sh-search1 border-gray-200 focus:outline-none flex rounded-lgx items-center">
                {/* <div className="input-text"> */}
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="bg-transparent text-[#cecece] text-[14px] w-full px-4 focus:outline-none"
                  //className="input-text1"
                />
              </div>
              <div className="search-btn h-[40px]">
                <button
                  className="h-[40px] px-[10px] ml-[-40px] bg-[#484848] text-gray-600 rounded-full 
                  border-gray-200 hover:bg-[#ea7f23] active:bg-gray-200 disabled:opacity-50 
                  focus:outline-none  shadow-sh-search"
                >
                  <img
                    src="/static/icons/search.png"
                    height={20}
                    width={20}
                  ></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer-search>
      <footer-links>
        <div className="footer-link-container grid bg-[#f9f9f9] mt-[1px] h-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
          <div className="contact-info ">
            <div className="container-logo ml-[100px] mt-[20px]">
              <img src="/static/logo-ibid.png" height={150} width={150}></img>
            </div>
            <div className="image-caption-one">
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

          <div className="links ">
            <div className="image-caption-two ml-[20px] text-center font-bold p-1">
              Useful links
            </div>
            <div className="links-container text-[#afafaf] mx-[80px] ">
              <div className="link-one text-l ml-[20px] flex">
                <div className="">
                  <img
                    src="/static/icons/double_right.png"
                    height={15}
                    width={15}
                    className="pt-1"
                  ></img>
                </div>
                <a href="#" class="no-underline  hover:text-[#a19e9b]">
                  <div className=" ">Mobile Phones</div>
                </a>
              </div>
              <div className="link-one text-l ml-[20px] flex">
                <div className="">
                  <img
                    src="/static/icons/double_right.png"
                    height={15}
                    width={15}
                    className="pt-1"
                  ></img>
                </div>
                <a href="#" class="no-underline  hover:text-[#a19e9b]">
                  <div className=" ">Laptop</div>
                </a>
              </div>
              <div className="link-one text-l ml-[20px] flex">
                <div className="">
                  <img
                    src="/static/icons/double_right.png"
                    height={15}
                    width={15}
                    className="pt-1"
                  ></img>
                </div>
                <a href="#" class="no-underline  hover:text-[#a19e9b]">
                  <div className=" ">Head Phones</div>
                </a>
              </div>
            </div>
          </div>
          <div className="policy">
            <div className="image-caption-two ml-[20px] text-center font-bold p-1">
              Our Policy
            </div>
            <div className="links-container text-[#afafaf] mx-[80px] ">
              <div className="link-one text-l ml-[20px] flex">
                <div className="">
                  <img
                    src="/static/icons/double_right.png"
                    height={15}
                    width={15}
                    className="pt-1"
                  ></img>
                </div>
                <a href="#" class="no-underline  hover:text-[#a19e9b]">
                  <div className=" ">Homepage</div>
                </a>
              </div>
              <div className="link-one text-l ml-[20px] flex">
                <div className="">
                  <img
                    src="/static/icons/double_right.png"
                    height={15}
                    width={15}
                    className="pt-1"
                  ></img>
                </div>
                <a href="#" class="no-underline  hover:text-[#a19e9b]">
                  <div className=" ">Blog</div>
                </a>
              </div>
              <div className="link-one text-l ml-[20px] flex">
                <div className="">
                  <img
                    src="/static/icons/double_right.png"
                    height={15}
                    width={15}
                    className="pt-1"
                  ></img>
                </div>
                <a href="#" class="no-underline  hover:text-[#a19e9b]">
                  <div className=" ">Services</div>
                </a>
              </div>
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
