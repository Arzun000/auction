import React from "react";
import styles from "./Test.module.css";
export const Testpage = () => {
  return (
    <div>
      <div>
        <h1>CSS Dropdown Menu</h1>

        <nav className={styles.nav}>
          <label for="touch">
            <span>titre</span>
          </label>
          <input type="checkbox" id="touch" />

          <ul class={styles.slide}>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
          </ul>
        </nav>

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
              </div>
              <div className="header-links ml-[2px] hidden text-white md:mr-auto md:ml-4 md:pl-4 float-left lg:inline-flex m-auto">
                <div class={styles.container}>
                  <div class={styles.card}>
                    <button>Home</button>
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
                          <li class="">
                            <a
                              class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Laptops
                            </a>
                          </li>
                          <li class="">
                            <a
                              class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Desktops
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Graphic Cards
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Work Stations
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
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
                              class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Smart Watches
                            </a>
                          </li>
                          <li class="">
                            <a
                              class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Fitness Bracelets
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Masks
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Electronic Tagging
                            </a>
                          </li>
                        </div>
                        <div className="shop-menu-right">
                          {" "}
                          <li className=" px-4 pt-6 font-bold">PHONES</li>
                          <li class="">
                            <a
                              class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Phone Cases
                            </a>
                          </li>
                          <li class="">
                            <a
                              class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Android
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Smart Phones
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Chargers
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
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

                <div class={styles.container}>
                  <div class={styles.card}>
                    <button>Blog</button>
                  </div>
                </div>
                <div class={styles.container}>
                  <div class={styles.card}>
                    <button>About</button>
                  </div>
                </div>
                <div class={styles.container}>
                  <div class={styles.card}>
                    <button>Contact</button>
                  </div>
                </div>
                <div class={styles.container}>
                  <div class={styles.card}>
                    <button>404</button>
                  </div>
                </div>
                <div class={styles.container}>
                  <div class={styles.card}>
                    <button>External Link</button>
                  </div>
                </div>
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
