import React from "react";
import { Blogrightnav } from "../../components/blogs/Blogrightnav.js";
export const Blogbody = () => {
  return (
    <div>
      <div class="grid grid-flow-row-dense grid-cols-4 ">
        <div class="col-span-3"></div>
        <div>
          <Blogrightnav />
        </div>
      </div>
    </div>
  );
};
