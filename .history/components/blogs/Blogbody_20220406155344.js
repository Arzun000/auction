import React from "react";
import Link from "next/link";
import { Blogrightnav } from "../../components/blogs/Blogrightnav.js";
export const Blogbody = (props) => {
  console.log("bac", props);
  return (
    <>
      {/* // <div className="blog-content xl:mx-[250px]"> */}
      {/* <div className="grid grid-flow-row-dense mt-[30px]  grid-cols-3 gap-4"> */}
      {/* <div className=" blog-articles mt-[10px] col-span-2"> */}
      <div className="blog-article mb-[10px] shadow-box-sh rounded-lg w-full gap-4">
        <Link href={props.href}>
          <div className="blog-img object-cover">
            <img src={props.imgurl} className=""></img>
          </div>
        </Link>
        <div className="blog-detail mt-[20px] ml-[30px] inline-flex">
          <div className="blog-auth  inline-flex">
            <button className="blog-detail-icon ">
              <img src="/static/icons/person.png"></img>
            </button>
            <div className="blog-navlinks ">
              <a href="#" class="  hover:text-[#ea7f23]">
                {props.author}
              </a>
            </div>
          </div>
          <div className="blog-tag ml-[20px] inline-flex">
            <button className="blog-detail-icon">
              <img src="/static/icons/tag.png"></img>
            </button>
            <div className="blog-navlinks">
              <a href="#" class="  hover:text-[#ea7f23]">
                {props.tag}
              </a>
            </div>
          </div>
          <div className="blog-date ml-[20px] inline-flex">
            <button className="blog-detail-icon">
              <img src={"/static/icons/calendar.png"}></img>
            </button>
            <div className="blog-navlinks">
              <a href="#" class="  hover:text-[#ea7f23]">
                {props.date}
              </a>
            </div>
          </div>
        </div>
        <div className="blog-title pr-4">
          <a href="#" className="  hover:text-[#ea7f23]">
            {props.title}
          </a>
        </div>
        <div className="blog-preview pr-4">
          <p className="line-clamp-3">{props.blogcontent}</p>
        </div>
        <div className="search-btn ">
          <button className="blog-read-btn">READ MORE</button>
        </div>
      </div>
      {/* <div className="blog-article2 mt-[20px] shadow-box-sh rounded-lg w-full gap-4">
          <div className="blog-img">
            <img src="/blogs/blogpost2.jpg"></img>
          </div>
          <div className="blog-detail mt-[20px] ml-[30px] inline-flex">
            <div className="blog-auth  inline-flex">
              <button className="blog-detail-icon ">
                <img src="/static/icons/person.png"></img>
              </button>
              <div className="blog-navlinks ">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Aurora Nee
                </a>
              </div>
            </div>
            <div className="blog-tag ml-[20px] inline-flex">
              <button className="blog-detail-icon">
                <img src="/static/icons/tag.png"></img>
              </button>
              <div className="blog-navlinks">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Laptop
                </a>
              </div>
            </div>
            <div className="blog-date ml-[20px] inline-flex">
              <button className="blog-detail-icon">
                <img src="/static/icons/calendar.png"></img>
              </button>
              <div className="blog-navlinks">
                <a href="#" class="  hover:text-[#ea7f23]">
                  August 7, 2021
                </a>
              </div>
            </div>
          </div>

          <div className="blog-title">
            <a href="#" class="  hover:text-[#ea7f23]">
              Chromebook Tab 10 review
            </a>
          </div>

          <div className="blog-preview">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution.{" "}
          </div>
          <div className="search-btn ">
            <button className="blog-read-btn">READ MORE</button>
          </div>
        </div>
        <div className="blog-article3 mt-[20px] shadow-box-sh rounded-lg w-full gap-4">
          <div className="blog-img">
            <img src="/blogs/blogpost3.jpg"></img>
          </div>
          <div className="blog-detail mt-[20px] ml-[30px] inline-flex">
            <div className="blog-auth  inline-flex">
              <button className="blog-detail-icon ">
                <img src="/static/icons/person.png"></img>
              </button>
              <div className="blog-navlinks ">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Aurora Nee
                </a>
              </div>
            </div>
            <div className="blog-tag ml-[20px] inline-flex">
              <button className="blog-detail-icon">
                <img src="/static/icons/tag.png"></img>
              </button>
              <div className="blog-navlinks">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Laptop
                </a>
              </div>
            </div>
            <div className="blog-date ml-[20px] inline-flex">
              <button className="blog-detail-icon">
                <img src="/static/icons/calendar.png"></img>
              </button>
              <div className="blog-navlinks">
                <a href="#" class="  hover:text-[#ea7f23]">
                  August 7, 2021
                </a>
              </div>
            </div>
          </div>
          <div className="blog-title">
            <a href="#" class="  hover:text-[#ea7f23]">
              Alexa isn't just an assistant
            </a>
          </div>
          <div className="blog-preview">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution.{" "}
          </div>
          <div className="search-btn ">
            <button className="blog-read-btn">READ MORE</button>
          </div>
        </div> */}
      {/* </div> */}

      {/* </div> */}
    </>
  );
};
