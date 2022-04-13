import React from "react";
import Link from "next/link";
import { Blogrightnav } from "../../components/blogs/Blogrightnav.js";
export const Blogbody = (props) => {
  // console.log("bac", props);
  return (
    <>
      <div className="blog-article mb-[10px]  shadow-box-sh rounded-lg w-full gap-4">
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
          <Link href={props.href}>
            <button className="blog-read-btn">READ MORE</button>
          </Link>
        </div>
      </div>
    </>
  );
};
