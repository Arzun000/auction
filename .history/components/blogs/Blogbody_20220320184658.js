import React from "react";
import { Blogrightnav } from "../../components/blogs/Blogrightnav.js";
export const Blogbody = () => {
  return (
    <div>
      <div class="grid grid-flow-row-dense grid-cols-3 ">
        <div>
          <Blogrightnav />
        </div>
        <div class="col-span-2"></div>
      </div>
    </div>
  );
};
