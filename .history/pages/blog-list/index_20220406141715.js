import React from "react";

import { Header } from "../../components/header/Header.js";
import { Blogtitle } from "../../components/blogs/Blogtitle.js";
import { Blogbody } from "../../components/blogs/Blogbody.js";
import blogListsData from "../../data/blogpost.json";

// import { Shopcontent } from "../../components/shop/Shopcontent.js";
import { Footer } from "../../components/footer/Footer.js";

export async function getStaticProps(context) {
  return {
    props: { blogLists: blogListsData },
  };
}
export default function bloglist(props) {
  return (
    <div>
      <Header />
      {/* <Body />*/}
      <Blogtitle />
      <div className="blog-content xl:mx-[250px]">
        <div className="grid grid-flow-row-dense mt-[30px]  grid-cols-3 gap-4">
          <div className=" blog-articles mt-[10px] col-span-2">
            {props.blogLists.map((blogList) => {
              return <Blogbody />;
            })}
          </div>
        </div>
      </div>
      {/* <Shoptitle />
      <Shopcontent /> */}
      <Footer />
    </div>
  );
}
