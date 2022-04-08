import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";

export const Testpage = () => {
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
        <div className=" w-full ">
          <div className="md:block hidden ">
            {/* <Link href="/">
              <a>
                <img src="https://www.pylontoken.com/images/logo-fixed.svg" />
              </a>
            </Link> */}
            <ul className="flex  list-none  flex-end justify-end mr-32  items-center gap-6 uppercase text-white font-semibold ">
              <li>
                <Link href="https://whitepaper.pylontoken.com/en">
                  Whitepapaer
                </Link>
              </li>
              <li>
                <Link href="https://whitepaper.pylontoken.com/en#ecosystem">
                  ecosystem
                </Link>
              </li>
              <li>
                <Link href="https://whitepaper.pylontoken.com/en#roadmap">
                  roadmap
                </Link>
              </li>
              <li>
                <Link href="https://whitepaper.pylontoken.com/en#executive-team">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/faq">Faq</Link>
              </li>
              <li>
                <Link href="/https://blog.pylontoken.com/">blog</Link>
              </li>
            </ul>
          </div>
          <div className="flex z-100 justify-between px-8">
            <div className="md:hidden text-white ">
              <Image
                src="https://www.pylontoken.com/images/logo-fixed.svg"
                height={50}
                width={150}
                alt=""
              />
            </div>{" "}
            <button
              className="md:hidden text-white text-4xl "
              onClick={() => showMobileMenu()}
            >
              {isOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
          {isOpen ? mobileMenu() : ""}
        </div>
      </div>
    </>
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
