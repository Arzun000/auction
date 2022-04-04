import React from "react";
import { Blogrightnav } from "../../components/blogs/Blogrightnav.js";
export const Blogbody = () => {
  return (
    <div>
      <div className="grid grid-flow-row-dense grid-cols-3 ">
        <div className=" blog-articles col-span-2">
          <div className="blog-article1"></div>
        </div>
        <div>
          <Blogrightnav />
        </div>
      </div>
    </div>
  );
};
