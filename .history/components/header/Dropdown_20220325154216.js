import React from "react";
import Link from "next/link";

import styles from ".Headerthree.module.css";
import { createPopper } from "@popperjs/core";

export const Dropdown = () => {
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
  return (
    <div>
      <button
        className=" font-bold uppercase text-sm px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        ref={btnDropdownRef}
        onClick={() => {
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
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
          "bg-white text-base z-50 float-left pt-[10px] divide-y divide-gray-100 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <div>
          <a
            href="#pablo"
            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-[10px]"
            onClick={(e) => e.preventDefault()}
          >
            Laptop, Tablets & Phones
          </a>
        </div>
        <div>
          <a
            href="#pablo"
            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-[10px]"
            onClick={(e) => e.preventDefault()}
          >
            PC, Pheripherals & Software
          </a>
        </div>
        <div>
          <a
            href="#pablo"
            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-[10px]"
            onClick={(e) => e.preventDefault()}
          >
            Laptop & IT Products
          </a>
        </div>
        <div>
          <a
            href="#pablo"
            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-[10px]"
            onClick={(e) => e.preventDefault()}
          >
            TV, Audio-Video & Photo
          </a>
        </div>
        <div>
          <a
            href="#pablo"
            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
            onClick={(e) => e.preventDefault()}
          >
            Game & Consoles
          </a>
        </div>
      </div>
    </div>
  );
};
