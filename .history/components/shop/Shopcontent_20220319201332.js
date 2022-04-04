import React from "react";
import { Shopleftnav } from "./Shopleftnav";

export const Shopcontent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 ml-[20px] mt-[120px] lg:grid-cols-4 lg:grid-rows-4 lg:grid-flow-col gap-4">
        <div className="col-span-1 row-span-4 bg-gray-50 ">
          <Shopleftnav />
        </div>
        <div className="col-span-3 bg-blue-400 h-[120px] ">
          <div className="grid grid-cols-6 gap-4">
            <div class="col-start-1 col-end-3 bg-blue-800">02</div>
            <div class="col-end-7 col-span-2 bg-green-800">
              <div className="dropdown-button bg-white p-2 ">
                <button
                  class="inline-flex items-center focus:outline-none text-base md:mt-2"
                  type="button"
                  data-dropdown-toggle="dropdown"
                >
                  <div className="navlink-cat order inline-flex mr-2 ">
                    CATEGORIES
                    <img
                      src="/static/icons/menu_50px.png"
                      className="mr-2"
                      height={15}
                      width={15}
                    ></img>
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
            </div>
          </div>
        </div>
        <div className="row-span-3 bg-red-400 col-span-3 mt-[-280px] gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-green-400 ">01</div>
            <div className="bg-green-400">02</div>
            <div className="bg-green-400">03</div>
            <div className="bg-green-400 ">04</div>
            <div className="bg-green-400">05</div>
            <div className="bg-green-400">06</div>
            <div className="bg-green-400 ">07</div>
            <div className="bg-green-400">08</div>
            <div className="bg-green-400">09</div>
          </div>
        </div>
      </div>
    </div>
  );
};
