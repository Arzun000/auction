import React from "react";
import { Header } from "../../components/header/Header.js";
import { Footer } from "../../components/footer/Footer.js";
import blogpostsData from "../../data/blogpost.json";

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  console.log("params:", params);
  return {
    props: {
      productItemList: productItemListsData.find((productItemList) => {
        return productItemList.id.toString() === params.itemid;
      }),
    },
    // tabprop: { productItemLists: productItemListsData }, // will be passed to the page component as props
  };
}

const Blogsdetail = () => {
  return (
    <div>
      <Header />
      dfd
      <Footer />
    </div>
  );
};

export default Blogsdetail;
