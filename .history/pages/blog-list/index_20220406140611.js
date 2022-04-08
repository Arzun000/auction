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
export default function bloglist() {
  return (
    <div>
      <Header />
      {/* <Body />*/}
      <Blogtitle />
      {props.productItemLists.map((productItemList) => {
        return <Blogbody />;
      })}
      {/* <Shoptitle />
      <Shopcontent /> */}
      <Footer />
    </div>
  );
}
