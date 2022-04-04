import React from "react";

export const Shopcontent = () => {
  return (
    <div>
      <div class="grid grid-rows-4 grid-flow-col  gap-4">
        <div class="row-span-4 bg-green-400">01</div>
        <div class="col-span-2 bg-green-400">02</div>
        <div class="row-span-1 col-span-2 bg-green-400">
          <div class="grid grid-cols-3 gap-4">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div>06</div>
            <div>07</div>
            <div>08</div>
            <div>09</div>
          </div>
        </div>
      </div>
    </div>
  );
};
