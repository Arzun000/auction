import React from "react";
import Link from "next/link";
import { Header } from "../../components/header/Header.js";
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
function Hello() {
  return (
    <div>
      <Header />
      Hello
      <Footer />
    </div>
  );
}

export default Hello;
