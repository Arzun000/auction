import React from "react";

import { Header } from "../../components/header/Header.js";
import { Blogtitle } from "../../components/blogs/Blogtitle.js";
import { Blogbody } from "../../components/blogs/Blogbody.js";
import { Blogrightnav } from "../../components/blogs/Blogrightnav.js";
import blogListsData from "../../data/blogpost.json";

// import { Shopcontent } from "../../components/shop/Shopcontent.js";
import { Footer } from "../../components/footer/Footer.js";

export async function getStaticProps(context) {
  return {
    props: { blogLists: blogListsData },
  };
}
export default function bloglist(props) {
  console.log("blog", props);
  return (
    <div>
      <Header />
      {/* <Body />*/}
      <Blogtitle />
      <div className="blog-content xl:mx-[250px]">
        <div className="grid grid-flow-row-dense mt-[30px]  grid-cols-3 gap-4">
          <div className=" blog-articles mt-[10px] col-span-2">
            {props.blogLists.map((blogList) => {
              return (
                <Blogbody
                  key={blogList.id}
                  author={blogList.author}
                  imgurl={blogList.imgUrl}
                  tag={blogList.tag}
                  title={blogList.title}
                  date={blogList.date}
                  blogcontent={blogList.blogContent}
                  // href="/item-detail/blackcar"
                  //href={"/item-detail/${productItemList.id}"}
                  href={{
                    pathname: "/blog-list/[slug]",
                    query: { slug: blogList.id },
                  }}
                />
              );
            })}
          </div>
          <div className=" ml-[30px]">
            <Blogrightnav />
          </div>
        </div>
        <div className="pagination inline-flex ml-[30px]">
          <button>
            <div className="page-no ">1</div>
          </button>
          <button>
            <div className="page-no">2</div>
          </button>
          <button>
            <div className="page-no">3</div>
          </button>
          <button>
            <div className="page-no">
              <img
                src="/static/icons/arrow.png"
                height={25}
                width={25}
                className="ml-[10px]"
              ></img>
            </div>
          </button>
        </div>
      </div>

      {/* <Shoptitle />
      <Shopcontent /> */}
      <Footer />
    </div>
  );
}
