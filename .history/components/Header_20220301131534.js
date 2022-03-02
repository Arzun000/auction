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
      <header className="text-gray-600 body-font h-3.5">
        <div className="container mx-auto flex flex-col md:flex-row items-center bg-[#ea7f23] ">
          <div className="dropdown-button h-12 w-30 ml-4 pl-2 pr-2 bg-white">
            <button class="inline-flex items-center focus:outline-none text-base md:mt-2">
              <img
                src="/static/icons/menu_50px.png"
                height={30}
                width={30}
              ></img>
              CATEGORIES
            </button>
            <div className="bg-white ">
              <a href="#" className="block">
                Laptops, Tablets & Phones
              </a>
              <a href="#" className="block">
                PC, Peripherals and Software
              </a>
            </div>
          </div>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l text-white	flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">Home</a>
            <a class="mr-5 hover:text-gray-900">Shop </a>
            <a class="mr-5 hover:text-gray-900">Blog </a>
            <a class="mr-5 hover:text-gray-900">About</a>
            <a class="mr-5 hover:text-gray-900">Contact</a>
            <a class="mr-5 hover:text-gray-900">404</a>
            <a class="mr-5 hover:text-gray-900">External Link</a>
          </nav>
          <a class="ml-auto mr-2 float-right text-white hover:text-gray-900">
            sign in
          </a>
        </div>
        <div class="flex items-center justify-center h-screen">
          <div class="relative inline-block">
            <button class="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
              <svg
                class="w-5 h-5 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <div class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
              <a
                href="#"
                class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {" "}
                your profile{" "}
              </a>
              <a
                href="#"
                class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {" "}
                Your projects{" "}
              </a>
              <a
                href="#"
                class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {" "}
                Help{" "}
              </a>
              <a
                href="#"
                class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {" "}
                Settings{" "}
              </a>
              <a
                href="#"
                class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {" "}
                Sign Out{" "}
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
