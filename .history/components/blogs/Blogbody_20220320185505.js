import React from "react";
import { Blogrightnav } from "../../components/blogs/Blogrightnav.js";
export const Blogbody = () => {
  return (
    <div>
      <div className="grid grid-flow-row-dense grid-cols-3 ">
        <div className=" blog-articles col-span-2">
          <div className="blog-article1 bg-green-400 w-full">1</div>
          <div className="blog-article1">2</div>
          <div className="blog-article1">3</div>
        </div>
        <div>
          <Blogrightnav />
        </div>
      </div>
    </div>
  );
};
