import React from "react";
import { useState } from "react";
export const Testpage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[250px] bg-blue-600  text-white fixed h-[250px] z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-y-full"
        }`}
      >
        <ul class="absolute bg-white shadow-sh-search w-[180px] ease-in-out duration-1000 text-center text-gray-700 group-hover:block">
          <li className=" px-4 pt-6 font-bold">DEMOS</li>
          <li class="">
            <a
              class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
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
  );
};
