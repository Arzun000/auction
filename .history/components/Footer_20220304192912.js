import React from "react";

export const Footer = () => {
  return (
    <>
      <footer-search>
        <div className="footer-search-container grid bg-[#ea7f23] mt-[10px] h-[80px] grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 w-full">
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
        <div className="footer-link-container grid bg-[#ea7f23] mt-[1px] h-[80px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
          <div className="contact-info">
            <div className="container-logo p-2 ">
              <img src="/static/logo-ibid.png" height={150} width={150}></img>
            </div>
          </div>
          <div className="links"></div>
          <div className="policy"></div>
          <div className="subscribe"></div>
        </div>
      </footer-links>
    </>
  );
};
