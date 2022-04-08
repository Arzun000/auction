import React from "react";
import Link from "next/link";
import { Header } from "../../components/header/Header.js";
import { Footer } from "../../components/footer/Footer.js";
import blogpostsData from "../../data/blogpost.json";

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  console.log("params:", params);
  return {
    props: {
      blogPost: blogpostsData.find((blogPost) => {
        return blogPost.id === params.blogid.toString();
      }),
    },
    // tabprop: { productItemLists: productItemListsData }, // will be passed to the page component as props
  };
}
export function getStaticPaths() {
  return {
    paths: [
      { params: { blogid: "1" } },
      { params: { blogid: "2" } },
      { params: { blogid: "3" } },
      { params: { blogid: "4" } },
      { params: { blogid: "5" } },
      { params: { blogid: "6" } },
      { params: { blogid: "7" } },
      { params: { blogid: "8" } },
      { params: { blogid: "9" } },
    ],
    fallback: false,
  };
}

const Blogsdetail = (props) => {
  return (
    <div>
      <Header />
      dfd
      <Footer />
    </div>
  );
};

export default Blogsdetail;
