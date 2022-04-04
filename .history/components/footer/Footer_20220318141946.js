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
            <div className="container-logo ml-[20px] mt-[20px]">
              <img src="/static/logo-ibid.png" height={150} width={150}></img>
            </div>
            <div className="footer-contact">
              <p>
                <a href="#" class="no-underline hover:text-[#ea7f23]">
                  sale@123.com
                </a>
              </p>
              <a href="#" class="no-underline hover:text-[#ea7f23]">
                +977 125 1251 114
              </a>
            </div>
            <div className="socials inline-flex mt-[1px] ml-[20px]">
              <div className="iconbutton">
                <a className="" href="#">
                  <img src="/socials/facebook.png" height={20} width={20}></img>
                </a>
              </div>
              <div className="iconbutton">
                <a className="" href="#">
                  <img src="/socials/twitter.png" height={20} width={20}></img>
                </a>
              </div>
              <div className="iconbutton">
                <a className="" href="#">
                  <img src="/socials/linkedin.png" height={20} width={20}></img>
                </a>
              </div>
              <div className="iconbutton">
                <a className="" href="#">
                  <img src="/socials/twitter.png" height={20} width={20}></img>
                </a>
              </div>
            </div>
          </div>

          <div className="links">
            <div className="footer-link-title ">Our Policy</div>
            <div className="footer-links">
              <div className="link-one flex">
                <div className="">
                  <img
                    src="/static/icons/double_right.png"
                    height={15}
                    width={15}
                    className="pt-1"
                  ></img>
                </div>
                <a href="#" class="no-underline  hover:text-[#ea7f23]">
                  <div className=" ">Home Page</div>
                </a>
              </div>
              <div className="link-one flex">
                <div className="">
                  <img
                    src="/static/icons/double_right.png"
                    height={15}
                    width={15}
                    className="pt-1"
                  ></img>
                </div>
                <a href="#" class="no-underline  hover:text-[#ea7f23]">
                  <div className=" ">Blogs</div>
                </a>
              </div>
              <div className="link-one flex">
                <div className="">
                  <img
                    src="/static/icons/double_right.png"
                    height={15}
                    width={15}
                    className="pt-1"
                  ></img>
                </div>
                <a href="#" class="no-underline  hover:text-[#ea7f23]">
                  <div className=" ">Services</div>
                </a>
              </div>
            </div>
          </div>
          <div className="links">
            <div className="footer-link-title ">Useful links</div>
            <div className="footer-links">
              <div className="link-one flex">
                <div className="">
                  <img
                    src="/static/icons/double_right.png"
                    height={15}
                    width={15}
                    className="pt-1"
                  ></img>
                </div>
                <a href="#" class="no-underline  hover:text-[#ea7f23]">
                  <div className=" ">Mobile Phones</div>
                </a>
              </div>
              <div className="link-one flex">
                <div className="">
                  <img
                    src="/static/icons/double_right.png"
                    height={15}
                    width={15}
                    className="pt-2"
                  ></img>
                </div>
                <a href="#" class="no-underline  hover:text-[#ea7f23]">
                  <div className=" ">Laptop</div>
                </a>
              </div>
              <div className="link-one flex">
                <div className="">
                  <img
                    src="/static/icons/double_right.png"
                    height={15}
                    width={15}
                    className="pt-1"
                  ></img>
                </div>
                <a href="#" class="no-underline  hover:text-[#ea7f23]">
                  <div className=" ">Head Phones</div>
                </a>
              </div>
            </div>
          </div>
          <div className="subscribe p-2">
            <div className="footer-link-title ">
              Subscribe to our newsletter
            </div>

            <div className="cat-search inline-flex w-[90%] pt-[20px] ">
              <div className="search-email bg-white h-[40px] shadow-sh-search1 border-gray-200 focus:outline-none flex rounded-lgx items-center">
                <input
                  type="text"
                  placeholder="Enter your Email.."
                  className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
                />
              </div>
              <div className="submit-btn ">
                <button
                  className="h-[40px] px-[10px] ml-[-40px] bg-[#484848] text-white font-[600] rounded-full 
                  border-gray-200 hover:bg-[#ea7f23] active:bg-gray-200 focus:outline-none  shadow-sh-search"
                >
                  SUBMIT
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
