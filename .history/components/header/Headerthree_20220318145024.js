import React from "react";
import Link from "next/link";

import styles from "./Headerthree.module.css";
export const Headerthree = () => {
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
                  <div className="navlink-cat order inline-flex mr-2 ">
                    <img
                      src="/static/icons/menu_50px.png"
                      className="mr-2"
                      height={15}
                      width={15}
                    ></img>
                    CATEGORIES
                  </div>
                </button>
                <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>

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
              </div>
              <div className="navlinks ml-[2px] hidden md:mr-auto md:ml-4 md:pl-4 float-left lg:inline-flex m-auto">
                <div class={styles.container}>
                  <div class={styles.card}>
                    <Link href="/">Home</Link>
                  </div>
                  <div class={styles.cardflip}>
                    <ul class="absolute bg-white shadow-sh-search w-[180px] text-center text-gray-700 group-hover:block ">
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
                    <button>Shop</button>
                  </div>
                  <div class={styles.cardflip}>
                    <ul class="absolute bg-white shadow-sh-search w-[600px] text-center text-gray-700 group-hover:block ">
                      <div className="inline-flex">
                        <div className="shop-menu-left">
                          <li className=" px-4 pt-6 font-bold">
                            IT & Computer
                          </li>
                          <li className="">
                            <a
                              className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Laptops
                            </a>
                          </li>
                          <li className="">
                            <a
                              className=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Desktops
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Graphic Cards
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Work Stations
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              RAM
                            </a>
                          </li>
                        </div>
                        <div className="shop-menu-mid">
                          <li className=" px-4 pt-6 font-bold">WEARABLE</li>
                          <li class="">
                            <a
                              className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Smart Watches
                            </a>
                          </li>
                          <li className="">
                            <a
                              className=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Fitness Bracelets
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Masks
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Electronic Tagging
                            </a>
                          </li>
                        </div>
                        <div className="shop-menu-right">
                          {" "}
                          <li className=" px-4 pt-6 font-bold">PHONES</li>
                          <li className="">
                            <a
                              class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Phone Cases
                            </a>
                          </li>
                          <li className="">
                            <a
                              className=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Android
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Smart Phones
                            </a>
                          </li>
                          <li className="">
                            <a
                              class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Chargers
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Apple Phones
                            </a>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>

                <div className={styles.container}>
                  <div className={styles.card}>
                    <Link href="#">Blog</Link>
                  </div>
                </div>
                <div className={styles.container}>
                  <div className={styles.card}>
                    <Link href="./aboutus">About</Link>
                  </div>
                </div>
                <div className={styles.container}>
                  <div className={styles.card}>
                    <button>Contact</button>
                  </div>
                </div>
                <div className={styles.container}>
                  <div className={styles.card}>
                    <button>404</button>
                  </div>
                </div>
                <div className={styles.container}>
                  <div className={styles.card}>
                    <button>External Link</button>
                  </div>
                </div>
              </div>
              <button>
                <div className="signin float-right pl-[210px] text-white inline-flex">
                  <a
                    href="#"
                    className="mr-5 no-underline  hover:text-gray-900"
                  >
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
