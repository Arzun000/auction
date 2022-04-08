import React from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import blogpostsData from "../../data/blogpost.json";
import { Header } from "../../components/header/Header.js";

import { Blogrightnav } from "../../components/blogs/Blogrightnav.js";
import { Footer } from "../../components/footer/Footer.js";

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  console.log("params:", params);
  return {
    props: {
      blogPost: blogpostsData.find((blogPost) => {
        return blogPost.id.toString() === params.blogid;
      }),
    },
    // tabprop: { productItemLists: productItemListsData }, // will be passed to the page component as props
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { blogid: "1" } },
      { params: { blogid: "2" } },
      { params: { blogid: "3" } },
    ],
    fallback: false,
  };
}

function blogDetail(props) {
  const router = useRouter();
  console.log("blogid", props);
  return (
    <div>
      <Header />
      <div className="shop-container h-[140px] ml-[20px] xl:mx-[5%] rounded-xl shadow-sm">
        <div className="shop-text ml-[10px]">
          <Link href="#">
            <a>Home</a>
          </Link>
          / <Link href="#">Blog list</Link>/{" "}
          <Link href="#">{props.blogPost.title}</Link>
        </div>
        <div className="shop-text-main ">Blogs</div>
      </div>
      <div className="blog-content xl:mx-[150px]">
        <div className="grid grid-flow-row-dense mt-[30px]  grid-cols-3 gap-4">
          <div className=" blog-articles mt-[10px] col-span-2">
            <div className="blog-article mb-[10px] shadow-box-sh rounded-lg w-full gap-4">
              <div className="blog-img object-cover">
                <img src={props.blogPost.imgUrl} className=""></img>
              </div>

              <div className="blog-detail mt-[20px] ml-[30px] inline-flex">
                <div className="blog-auth  inline-flex">
                  <button className="blog-detail-icon ">
                    <img src="/static/icons/person.png"></img>
                  </button>
                  <div className="blog-navlinks ">
                    <a href="#" class="  hover:text-[#ea7f23]">
                      {props.blogPost.author}
                    </a>
                  </div>
                </div>
                <div className="blog-tag ml-[20px] inline-flex">
                  <button className="blog-detail-icon">
                    <img src="/static/icons/tag.png"></img>
                  </button>
                  <div className="blog-navlinks">
                    <a href="#" class="  hover:text-[#ea7f23]">
                      {props.blogPost.tag}
                    </a>
                  </div>
                </div>
                <div className="blog-date ml-[20px] inline-flex">
                  <button className="blog-detail-icon">
                    <img src={"/static/icons/calendar.png"}></img>
                  </button>
                  <div className="blog-navlinks">
                    <a href="#" class="  hover:text-[#ea7f23]">
                      {props.blogPost.date}
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog-title pr-4">
                <a href="#" className="  hover:text-[#ea7f23]">
                  {props.blogPost.title}
                </a>
              </div>
              <div className="blog-preview pr-4">
                <p className="line-clamp-3">{props.blogPost.blogcontent}</p>
              </div>
              <div className="search-btn ">
                <button className="blog-read-btn">READ MORE</button>
              </div>
            </div>
          </div>
          <div className=" ml-[30px]">
            <Blogrightnav />
          </div>
        </div>
        <div className="comments flex ml-[30px]"></div>
      </div>
      Hello
      {props.blogPost.author} {/* <Footer /> */}
    </div>
  );
}

export default blogDetail;
