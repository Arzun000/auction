import React from "react";

export const Shopcontent = () => {
  return (
    <div>
      <div class="grid grid-rows-4 grid-flow-col gap-4">
        <div class="row-span-4 ...">01</div>
        <div class="col-span-2 ...">02</div>
        <div class="row-span-1 col-span-2 ...">
          <div class="grid grid-cols-4 gap-4">
            <div>01</div>

            <div>09</div>
          </div>
        </div>
      </div>
    </div>
  );
};
