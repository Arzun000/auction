import React from "react";

export const Canvaslow = () => {
  return (
    <>
      <canvaslow>
        <div className="canvas-low-cards mt-[50px]">
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 p-5 pb-6">
            {/* Item 1 */}
            <div className="h-[350px] w-150 bg-blue-200">
              <img src="/images/oldcar01.jpg"></img>
              <div className="image-caption absolute text-center bg-red-500">
                <div className="image-caption-one text-xl font-bold">
                  <a href="#" class="no-underline">
                    Item Info
                  </a>
                </div>
                <div className="image-caption-two pb-2">Current Bid: $100</div>
              </div>
            </div>

            <div>02</div>
          </div>
        </div>
      </canvaslow>
    </>
  );
};
