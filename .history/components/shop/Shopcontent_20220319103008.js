import React from "react";

export const Shopcontent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:grid-flow-col gap-4">
        <div className="row-span-4 bg-green-400 w-[120px] ">01</div>
        <div className="col-span-1 grow bg-blue-400 h-10">02</div>
        <div className="row-span-1 grow col-span-1 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-green-400 h-10">01</div>
            <div className="bg-green-400">02</div>
            <div className="bg-green-400">03</div>
            <div className="bg-green-400 h-10">04</div>
            <div className="bg-green-400">05</div>
            <div className="bg-green-400">06</div>
            <div className="bg-green-400 h-10">07</div>
            <div className="bg-green-400">08</div>
            <div className="bg-green-400">09</div>
          </div>
        </div>
      </div>
    </div>
  );
};
