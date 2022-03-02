import React from "react";
import Link from "next/link";
export const Header = () => {
  return (
    // <>
    //   {" "}
    //   <header className="mx-auto flex max-w-7xl justify-between p-5">
    //     <div className="navbar bg-[#ea7f23]">
    //       <div className="container flex w-full">
    //         <div className="nav-item-dropdown h-6 w-28 ">
    //           <button class="inline-flex bg-white">
    //             <img
    //               src="/static/icons/menu_50px.png"
    //               height={30}
    //               width={30}
    //             ></img>
    //             CATEGORIES
    //           </button>
    //           <div>
    //             <a href="#">Laptops, Tablets & Phones</a>
    //             <a href="#">PC, Peripherals and Software</a>
    //           </div>
    //         </div>

    //         <div className="flex items-left space-x-5">
    //           <div className="hidden items-center space-x-5 md:inline-flex">
    //             <a href="#" class="font-medium text-white hover:text-gray-900">
    //               Home
    //             </a>
    //             <a href="#" class="font-medium text-white hover:text-gray-900">
    //               Shop
    //             </a>
    //             <a href="#" class="font-medium text-white hover:text-gray-900">
    //               Blog
    //             </a>
    //             <a href="#" class="font-medium text-white hover:text-gray-900">
    //               About
    //             </a>
    //             <a href="#" class="font-medium text-white hover:text-gray-900">
    //               Contact
    //             </a>
    //             <a href="#" class="font-medium text-white hover:text-gray-900">
    //               404
    //             </a>
    //             <a href="#" class="font-medium text-white hover:text-gray-900">
    //               External Link
    //             </a>
    //             {/* <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
    //             Follow
    //           </h3> */}
    //           </div>
    //         </div>
    //         <div className="flex items-center space-x-5 text-green-600">
    //           <h3>sign In</h3>
    //           {/* <h3 className="rounded-full border border-green-600 px-4 py-1">
    //           Get Started
    //         </h3> */}
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    //   <div>this is head</div>
    //   <div>this is head</div>
    // </>

    <>
      <topheader>
        <div className="header-top bg-slate-500 h-10">
          <div className="container m-auto py-2 flex bg-yellow-500 md:flex-row   ">
            <div className="row-top-header items-center">
              <div className="flex flex-row ">
                <div className="language-box w-14 pl-1 border-r border-gray-400 items-center inline-flex ">
                  EN
                  <img
                    src="/static/icons/expand_arrow.png"
                    height={15}
                    width={15}
                  ></img>
                </div>

                <div className="currency-box w-16 items-center pl-2 inline-flex">
                  EUR
                  <img
                    src="/static/icons/expand_arrow.png"
                    height={15}
                    width={15}
                  ></img>
                </div>

                <div className="header-top-contact-methods inline-flex ">
                  <div className="header-top-contact-phone">
                    Call us toll free: +40 712 345 678
                  </div>
                  <div className="header-top-contact-email mx-4">
                    Send us an email: sale@modeltheme.com
                  </div>
                </div>
              </div>
            </div>
            <div className="account-urls ml-80">
              <div className="order inline-flex mr-2 p-0">
                <img src="/static/icons/truck.png" height={15} width={15}></img>
                Order Tracking
              </div>
              <div className="wish inline-flex">
                <img src="/static/icons/heart.png" height={15} width={15}></img>
                Wish List
              </div>
            </div>
          </div>
        </div>
      </topheader>
      <top-container>
        <div className="container-top bg-green-500 ">
          <div className="flex flex-row justify-between">
            <div className="container-logo p-8 ml-14">
              <img src="/static/logo-ibid.png" height={150} width={150}></img>
            </div>
            <div className="container-search">
              <div class="bg-gray-100 rounded border border-gray-200 flex items-center">
                <input
                  type="text"
                  placeholder="Search Products..."
                  class="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
                />
                <button
                  class="py-2 px-4 bg-white text-gray-600 rounded-l border-r-24 
                border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 
                inline-flex items-center focus:outline-none"
                >
                  <img
                    src="/static/icons/search.png"
                    height={40}
                    width={40}
                  ></img>
                </button>{" "}
              </div>
            </div>
            <div className="container-cart">a</div>
          </div>
        </div>
      </top-container>
      <header-nav>
        <div className="navbar bg-[#ea7f23]">
          <div className="container mx-auto flex flex-col  md:flex-row items-center ">
            <div className="dropdown-button h-12 w-30 pl-2 pr-2 bg-white">
              <button class="inline-flex items-center focus:outline-none text-base md:mt-2">
                <img
                  src="/static/icons/menu_50px.png"
                  height={30}
                  width={30}
                ></img>
                CATEGORIES
              </button>
              {/* Dropdown toggle items */}
              {/* <div className="bg-white ">
              <a href="#" className="block">
                Laptops, Tablets & Phones
              </a>
              <a href="#" className="block">
                PC, Peripherals and Software
              </a>
            </div> */}
            </div>
            <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md text-white	flex flex-wrap items-center text-base justify-center">
              <a class="mr-5 hover:text-gray-900">Home</a>
              <a class="mr-5 hover:text-gray-900">Shop </a>
              <a class="mr-5 hover:text-gray-900">Blog </a>
              <a class="mr-5 hover:text-gray-900">About</a>
              <a class="mr-5 hover:text-gray-900">Contact</a>
              <a class="mr-5 hover:text-gray-900">404</a>
              <a class="mr-5 hover:text-gray-900">External Link</a>
            </nav>
            <a class="ml-auto mr-20 float-right text-white hover:text-gray-900">
              sign in
            </a>
          </div>
        </div>
      </header-nav>
    </>
  );
};
