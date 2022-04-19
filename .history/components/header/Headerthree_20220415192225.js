import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Headerthree.module.css";
import { MdMenu, MdClose } from "react-icons/md";
import { createPopper } from "@popperjs/core";

export const Headerthree = () => {
  //dropdown
  // Catrgories dropdown functions
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // ham
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["header"];
  if (scrolled) {
    navbarClasses.push("header-scroll");
  }
  const showMobileMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <>
      <div className={navbarClasses.join(" ")}>
        <div className=" w-full">
          <div className="navbar hidden md:block bg-[#ea7f23]">
            <nav className=" shadow  dark:bg-gray-800 text-[#334141] text-[14px] font-[400]">
              <div className="max-w-[1400px] m-auto h-[70px] md:flex md:items-center md:justify-between">
                <div className="flex items-center justify-between">
                  <div className="cat-dropdown bg-white ml-[10px] pt-[10px] h-[70px] text-[#484848]">
                    <button
                      className=" font-bold uppercase text-sm px-6 py-4 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      ref={btnDropdownRef}
                      onClick={() => {
                        dropdownPopoverShow
                          ? closeDropdownPopover()
                          : openDropdownPopover();
                      }}
                    >
                      <div className="inline-flex">
                        <img
                          src="/static/icons/menu_50px.png"
                          className="mr-2"
                          height={15}
                          width={15}
                        ></img>
                        CATEGORIES
                      </div>
                    </button>
                    {/* Dropdown Items */}
                    <div
                      ref={popoverDropdownRef}
                      className={
                        (dropdownPopoverShow ? "block " : "hidden ") +
                        "bg-white text-base z-50 float-left pt-[10px] divide-y divide-gray-100 list-none text-left rounded shadow-lg "
                      }
                    >
                      <div className="drop-item">
                        <a
                          href="#pablo"
                          className="text-sm hover:bg-gray-100 text-gray-700 px-4 py-[10px]"
                          onClick={(e) => e.preventDefault()}
                        >
                          <div className="inline-flex py-2">
                            <img
                              src="/static/icons/tablet_phone.png"
                              height={15}
                              width={15}
                              className="mr-2"
                            ></img>
                            <div className="">Laptop, Tablets & Phones</div>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a
                          href="#pablo"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-[10px]"
                          onClick={(e) => e.preventDefault()}
                        >
                          <div className="inline-flex py-2">
                            <img
                              src="/static/icons/monitor.png"
                              height={15}
                              width={15}
                              className="mr-2"
                            ></img>
                            <div className="">PC, Pheripherals & Software</div>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a
                          href="#pablo"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-[10px]"
                          onClick={(e) => e.preventDefault()}
                        >
                          <div className="inline-flex py-2">
                            <img
                              src="/static/icons/cloud.png"
                              height={15}
                              width={15}
                              className="mr-2"
                            ></img>
                            <div className="">Laptop & IT Products</div>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a
                          href="#pablo"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-[10px]"
                          onClick={(e) => e.preventDefault()}
                        >
                          <div className="inline-flex py-2">
                            <img
                              src="/static/icons/video.png"
                              height={15}
                              width={15}
                              className="mr-2"
                            ></img>
                            <div className="">TV, Audio-Video & Photo</div>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a
                          href="#pablo"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                          onClick={(e) => e.preventDefault()}
                        >
                          <div className="inline-flex py-2">
                            <img
                              src="/static/icons/game_controller.png"
                              height={15}
                              width={15}
                              className="mr-2"
                            ></img>
                            <div className="">Game & Consoles</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 md:flex md:items-center md:justify-between">
                  <div className="flex flex-col md:flex-row md:items-center ml-[10px]">
                    <div className={styles.container}>
                      <div className={styles.card}>
                        <Link href="/">
                          <a>
                            <div className={styles.title}>Home</div>
                          </a>
                        </Link>
                      </div>
                      {/* List inside Home */}
                      <div className={styles.cardflip}>
                        <ul className="absolute bg-white shadow-sh-search w-[180px] text-center text-gray-700 group-hover:block ">
                          <li className=" px-4 pt-6 font-bold">DEMOS</li>
                          <li class="">
                            <a
                              className="hover:text-[#ea7f23] py-2 px-4 block  whitespace-no-wrap"
                              href="#"
                            >
                              Main Demo
                            </a>
                          </li>
                          <li className="">
                            <a
                              className=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Automotive
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Wordpress
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.container}>
                      <div className={styles.card}>
                        <Link href="/shop">
                          <a>
                            <div className={styles.title}>Shop</div>
                          </a>
                        </Link>
                      </div>
                      {/* List inside shop */}
                      <div className={styles.cardflip}>
                        <ul className="absolute shadow-sh-search w-[600px] bg-white text-center group-hover:block">
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
                              <li className="">
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
                                  className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
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
                                  className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
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
                        <Link href="/blog-list">
                          <a>
                            <div className={styles.title}>Blog</div>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className={styles.container}>
                      <div className={styles.card}>
                        <Link href="/aboutus">
                          <a>
                            <div className={styles.title}>About Us</div>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className={styles.container}>
                      <div className={styles.card}>
                        <Link href="/contact">
                          <a>
                            <div className={styles.title}>Contact</div>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className={styles.container}>
                      <div className={styles.card}>
                        <Link href="/404.js">
                          <a>
                            <div className={styles.title}>404</div>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className={styles.container}>
                      <div className={styles.card}>
                        <Link href="#">
                          <a>
                            <div className={styles.title}>External Links</div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="md:flex items-center mt-4 md:mt-0">
                    <div className={styles.container}>
                      <div className={styles.card}>
                        <button
                          type="button"
                          className="flex items-center text-white focus:outline-none"
                        >
                          <Link href="/sign-in">
                            <div className={styles.title}>Sign In</div>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="flex md:hidden z-100 justify-between px-8  items-center border-b-2">
            <div className="container-logo p-4 ">
              <img src="/static/logo-ibid.png" height={100} width={100}></img>
            </div>
            <div className="menu-icons ml-auto mr-0 pt-[2px] inline-flex">
              <div className="ml-[20px] pt-[7px]">
                <Link href="#">
                  <a>
                    <img
                      src="/static/icons/user.png"
                      height={15}
                      width={20}
                    ></img>
                  </a>
                </Link>
              </div>
              <div className="ml-[20px] pt-[7px]">
                <Link href="#">
                  <a>
                    <img
                      src="/static/icons/heart_black.png"
                      height={20}
                      width={20}
                    ></img>
                  </a>
                </Link>
              </div>
              <div className="ml-[20px] pt-[7px]">
                <Link href="#">
                  <a>
                    <img
                      src="/static/icons/basket_black.png"
                      height={20}
                      width={20}
                    ></img>
                  </a>
                </Link>
              </div>
              <div className="ml-[20px] pt-[7px]">
                <Link href="#">
                  <a>
                    <img
                      src="/static/icons/search_black.png"
                      height={20}
                      width={20}
                    ></img>
                  </a>
                </Link>
              </div>{" "}
            </div>
            <div className="ml-[20px] pt-[12px] text-[20px] ">
              <button
                className="md:hidden text-black text-4xl "
                onClick={() => showMobileMenu()}
              >
                {isOpen ? <MdClose /> : <MdMenu />}
              </button>
            </div>
          </div>
          {isOpen ? mobileMenu() : ""}
        </div>
      </div>
    </>
  );
};

const mobileMenu = () => {
  return (
    <div className="mobile_menu absolute w-full z-10 bg-gray-300">
      <ul className="flex  flex-col justify-start px-20   w-full py-6   gap-2 uppercase text-white font-semibold ">
        <li className="hover:bg-white hover:text-black">
          <Link href="/">
            <a>
              <div className={styles.title}>Home</div>
            </a>
          </Link>
        </li>
        <li className="hover:bg-white hover:text-black">
          <Link href="/shop">
            <a>
              <div className={styles.title}>Shop</div>
            </a>
          </Link>
        </li>
        <li className="hover:bg-white hover:text-black">
          <Link href="/blog">
            <a>
              <div className={styles.title}>Blog</div>
            </a>
          </Link>
        </li>
        <li className="hover:bg-white hover:text-black">
          <Link href="/about-us">
            <a>
              <div className={styles.title}>About us</div>
            </a>
          </Link>
        </li>
        <li className="hover:bg-white hover:text-black">
          <Link href="/contact">
            <a>
              <div className={styles.title}>Contact</div>
            </a>
          </Link>
        </li>
        <li className="hover:bg-white hover:text-black">
          <Link href="/">
            <a>
              <div className={styles.title}>External Links</div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

// const mobileMenu = () => {
//   return (
//     <div className="mobile_menu absolute w-full">
//       <ul className="flex  flex-col justify-start px-20   w-full py-6   gap-2 uppercase text-white font-semibold ">
//         <li className="hover:bg-white hover:text-black">
//           <Link href="https://whitepaper.pylontoken.com/en">whitepaper</Link>
//         </li>
//         <li className="hover:bg-white hover:text-black">
//           <Link href="https://whitepaper.pylontoken.com/en#ecosystem">
//             <a target="_blank">ecosystem</a>
//           </Link>
//         </li>
//         <li className="hover:bg-white hover:text-black">
//           <Link href="https://whitepaper.pylontoken.com/en#roadmap">
//             <a target="_blank">roadmap</a>
//           </Link>
//         </li>
//         <li className="hover:bg-white hover:text-black">
//           <Link href="https://whitepaper.pylontoken.com/en#executive-team">
//             <a target="_blank">Team</a>
//           </Link>
//         </li>
//         <li className="hover:bg-white hover:text-black">
//           <Link href="/faq">
//             <a target="_blank">Faq</a>
//           </Link>
//         </li>
//         <li className="hover:bg-white hover:text-black">
//           <Link href="/https://blog.pylontoken.com/">
//             <a target="_blank">blog</a>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };
