import React from "react";

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
                {/* <div
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
                <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script> */}
              </div>
            </div>
          </div>
        </header-nav>
      </div>
    </div>
  );
};
