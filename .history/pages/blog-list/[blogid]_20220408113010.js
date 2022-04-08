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
              <div className="blog-post pr-4">
                <p className="blog-content-detail mx-[20px]">
                  {props.blogPost.blogContent}
                </p>
              </div>
              <div className="mt-[60px] text-[24px] font-[700]">Comments:</div>

              {/* <div className="comments md:flex items-center bg-[#2a93da]  h-auto   w-full ">
                <div>
                  <img
                    className="rounded-full border border-gray-100 shadow-sm"
                    src="/aboutus/staffs/staff4.jpg"
                    height={60}
                    width={60}
                  />
                </div>
                <div className="commenter bg-green-300">
                  <div className="md:flex justify-between bg-[#ba7f23]  h-auto   w-full">
                    <div className="name">Jack Danials</div>
                    <div className="date">jan 07, 2022</div>
                  </div>
                  <div className="comment-content w-full">dfsadfds?’</div>
                </div>
              </div> */}
              <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                <img
                  class="w-20 h-20 mx-auto rounded-full"
                  src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp"
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />

                <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                  <div className="md:flex justify-between bg-[#ba7f23]  h-auto   w-full">
                    <div className="name text-lg font-semibold leading-none">
                      Jack Danials
                    </div>
                    <div className="date">jan 07, 2022</div>
                  </div>
                  <p class="text-gray-600">
                    {" "}
                    <span class="font-serif">"</span> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quaerat repellat perspiciatis
                    excepturi est. Non ipsum iusto aliquam consequatur repellat
                    provident, omnis ut, sapiente voluptates veritatis cum
                    deleniti repudiandae ad doloribus.{" "}
                    <span class="font-serif">"</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" ml-[30px]">
            <Blogrightnav />
          </div>
        </div>
      </div>
      Hello
      {props.blogPost.author} {/* <Footer /> */}
    </div>
  );
}

export default blogDetail;
