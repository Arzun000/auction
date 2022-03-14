import React from "react";
import styles from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <div>
        <header-nav>
          <div className="navbar bg-[#ea7f23]">
            <div className="container navbar  m-auto flex  md:flex-row">
              <div className="dropdown-button bg-white p-2 ">
                <button
                  class="inline-flex items-center focus:outline-none text-base md:mt-2"
                  type="button"
                  data-dropdown-toggle="dropdown"
                >
                  <div className="order inline-flex mr-2 ">
                    <img
                      src="/static/icons/menu_50px.png"
                      className="mr-2"
                      height={15}
                      width={15}
                    ></img>
                    CATEGORIES
                  </div>
                </button>
                <div
                  class="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4
            "
                  id="dropdown"
                >
                  <div class="px-1 py-1.5">
                    <a
                      href="#"
                      class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Laptop, Tablets & Phones
                    </a>
                  </div>
                  <div class="px-1 py-1.5">
                    <a
                      href="#"
                      class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      PC, Pheripherals & Software
                    </a>
                  </div>
                  <div class="px-1 py-1.5">
                    <a
                      href="#"
                      class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Laptop & IT Products
                    </a>
                  </div>
                  <div class="px-1 py-1.5">
                    <a
                      href="#"
                      class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      TV, Audio-Video & Photo
                    </a>
                  </div>
                  <div class="px-1 py-1.5">
                    <a
                      href="#"
                      class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Game & Consoles
                    </a>
                  </div>
                </div>
                <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
              </div>
              <div className="header-links ml-[2px] hidden text-white md:mr-auto md:ml-4 md:pl-4 float-left lg:inline-flex m-auto">
                <div class={styles.container}>
                  <div class={styles.card}>
                    <button>Home</button>
                  </div>
                  <div class={styles.cardflip}>
                    <ul class="absolute bg-white shadow-sh-search w-[180px] ease-in-out duration-1000 text-center text-gray-700 group-hover:block ">
                      <li className=" px-4 pt-6 font-bold">DEMOS</li>
                      <li class="">
                        <a
                          class="hover:text-[#ea7f23] py-2 px-4 block  whitespace-no-wrap"
                          href="#"
                        >
                          Main Demo
                        </a>
                      </li>
                      <li class="">
                        <a
                          class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Automotive
                        </a>
                      </li>
                      <li class="">
                        <a
                          class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Wordpress
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class={styles.container}>
                  <div class={styles.card}>
                    <button>Home</button>
                  </div>
                  <div class={styles.cardflip}>
                    <ul class="absolute bg-white shadow-sh-search w-[180px] ease-in-out duration-1000 text-center text-gray-700 group-hover:block ">
                      <li className=" px-4 pt-6 font-bold">DEMOS</li>
                      <li class="">
                        <a
                          class="hover:text-[#ea7f23] py-2 px-4 block  whitespace-no-wrap"
                          href="#"
                        >
                          Main Demo
                        </a>
                      </li>
                      <li class="">
                        <a
                          class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Automotive
                        </a>
                      </li>
                      <li class="">
                        <a
                          class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Wordpress
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <button class="text-white   h-[60px] pr-4 inline-flex items-center">
                  Blog
                </button>
                <button class="text-white  h-[60px] pr-4 inline-flex items-center">
                  About
                </button>
                <button class="text-white  h-[60px] pr-4 inline-flex items-center">
                  Contact
                </button>
                <button class="text-white h-[60px] pr-4 inline-flex items-center">
                  404
                </button>
                <button class="text-white  h-[60px] pr-4 inline-flex items-center">
                  External Link
                </button>
              </div>
              <button>
                <div className="signin float-right pl-[210px] text-white inline-flex">
                  <a href="#" class="mr-5 no-underline  hover:text-gray-900">
                    Sign in
                  </a>
                </div>
              </button>
            </div>
          </div>
        </header-nav>
      </div>
    </div>
  );
};