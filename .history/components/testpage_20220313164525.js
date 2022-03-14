import React from "react";

export const Testpage = () => {
  return (
    <div>
      <div className="search-pro bg-white h-auto w-80 shadow-sh-search1 border-gray-200 flex  items-center">
        <input
          type="text"
          placeholder="Search Products..."
          className="bg-transparent text-gray-600 px-4 focus:outline-none w-full"
        />
      </div>
    </div>
  );
};
