import React from "react";

export const Testpage = () => {
  return (
    <div>
      <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
        <option>
          <a
            href="#"
            class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
          >
            Laptop, Tablets & Phones
          </a>
        </option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
      </select>

      <div
        class="bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4
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
  );
};
