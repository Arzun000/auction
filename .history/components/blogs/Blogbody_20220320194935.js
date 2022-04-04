import React from "react";
import { Blogrightnav } from "../../components/blogs/Blogrightnav.js";
export const Blogbody = () => {
  return (
    <div>
      <div className="grid grid-flow-row-dense ml-[20px] grid-cols-3 gap-4">
        <div className=" blog-articles col-span-2">
          <div className="blog-article1 bg-green-400 w-full gap-4">
            1
            <div className="blog-img">
              <img src="/blogs/blogpost1.jpg"></img>
            </div>
            <div className="blog-detail inline-flex">
              <div className="blog-auth inline-flex">
                <button className="view-icon ">
                  <img src="/static/icons/grid.png"></img>
                </button>
                <div className="blog-navlinks">
                  <a href="#" class="  hover:text-[#ea7f23]">
                    Chromebook Tab 10 review
                  </a>
                </div>
              </div>
              <div className="blog-tag inline-flex"></div>
              <div className="blog-date inline-flex"></div>
            </div>
            <div className="blog-title">A Phone Keeps Your Friends Away</div>
            <div className="blog-preview">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution.{" "}
            </div>
          </div>
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
