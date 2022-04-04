import React from "react";

export const Blogbody = () => {
  return (
    <div>
      <div className="grid grid-cols-1 ml-[20px] mt-[10px] lg:grid-cols-4 lg:grid-rows-4 lg:grid-flow-col gap-4">
        <div className="col-span-1 row-span-4 bg-gray-50 ">
          <Shopleftnav />
        </div>
      </div>
    </div>
  );
};
