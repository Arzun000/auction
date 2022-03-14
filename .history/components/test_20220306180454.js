import React from "react";

export const Test = () => {
  return (
    <>
      <div className="canv-top-containerabsolute bg-green-200">
        <div class="flex-column">
          <div class="relative z-0 w-full h-12 bg-green-400">0</div>
          <div class="relative z-10 w-full h-12 bg-yellow-400">1</div>
          <div class="relative z-20 w-full h-12 bg-red-400">2</div>
          <div class="relative z-30 w-full h-12 bg-blue-400">3</div>
          <div class="relative z-40 w-full h-12 bg-green-300">4</div>
          <div class="relative z-50 w-full h-12 bg-orange-400">5</div>
        </div>
      </div>
    </>
  );
};
