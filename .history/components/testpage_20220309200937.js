import React from "react";

export const Testpage = () => {
  return (
    <topheader>
      <div class="max-w-lg mx-auto">
        <button className="inline-flex items-center focus:outline-none text-base md:mt-2"></button>

        <div
          class="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
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

      <div class="max-w-lg mx-auto">
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
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
          class="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
          id="dropdown"
        ></div>
      </div>

      <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
    </topheader>
  );
};
