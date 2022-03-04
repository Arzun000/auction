import React from "react";

export const Test = () => {
  return (
    <>
      {" "}
      <tests>
        <form class="space-y-4 text-gray-700">
          <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
            <div class="w-full px-2 md:w-1/2">
              <label class="block mb-1" for="formGridCode_name">
                First name: *
              </label>
              <input
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                id="formGridCode_name"
              />
            </div>
            <div class="w-full px-2 md:w-1/2">
              <label class="block mb-1" for="formGridCode_last">
                Last name:
              </label>
              <input
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                id="formGridCode_last"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
            <div class="w-full px-2 md:w-1/2">
              <label class="block mb-1" for="formGridCode_name">
                email *
              </label>
              <input
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                id="formGridCode_name"
              />
            </div>
            <div class="w-full px-2 md:w-1/2">
              <label class="block mb-1" for="formGridCode_last">
                Subject: *
              </label>
              <input
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                id="formGridCode_last"
              />
            </div>
          </div>
          <button
            type="submit"
            class=" w-full px-6 py-2.5 bg-blue-600  text-white font-medium text-xs leading-tight
            uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Sign up
          </button>
        </form>
      </tests>
    </>
  );
};
