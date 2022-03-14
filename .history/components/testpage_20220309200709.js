import React from "react";

export const Testpage = () => {
  return (
    <topheader>
      <div class="max-w-lg mx-auto">
        <button className="inline-flex items-center focus:outline-none text-base md:mt-2">
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
        <div className="order inline-flex mr-2 ">
          <img
            src="/static/icons/menu_50px.png"
            className="mr-2"
            height={15}
            width={15}
          ></img>
          CATEGORIES
        </div>

        <div
          class="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
          id="dropdown"
        >
          <div class="px-4 py-3">
            <span class="block text-sm">Bonnie Green</span>
            <span class="block text-sm font-medium text-gray-900 truncate">
              name@flowbite.com
            </span>
          </div>
          <ul class="py-1" aria-labelledby="dropdown">
            <li>
              <a
                href="#"
                class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>

        <p class="mt-5">
          This dropdown element is part of a larger, open-source library of
          Tailwind CSS components. Learn more by going to the official{" "}
          <a
            class="text-blue-600 hover:underline"
            href="https://flowbite.com/docs/getting-started/introduction/"
            target="_blank"
          >
            Flowbite Documentation
          </a>
          .
        </p>
      </div>

      <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
    </topheader>
  );
};
