import Head from "next/head";

import productItemListsData from "../data/shopitem.json";

import { Header } from "../components/header/Header.js";
import { Canvas } from "../components/homepage/canvas/Canvas.js";
import { Contactus } from "../components/homepage/Contactus";
import { Testpage } from "../components/Testpage";
import { News } from "../components/homepage/News";
import { Brands } from "../components/homepage/Brands";
import { Footer } from "../components/footer/Footer";
import { Latestauctions } from "../components/homepage/canvas/latestauctions/Latestauctions";

export async function getStaticProps(context) {
  return {
    props: { productItemLists: productItemListsData },
  };
}

export default function Home(props) {
  console.log("dhf", props);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Testpage />
      <Header />

      {props.productItemLists.map((productItemList) => {
        return (
          <div className=" flex flex-wrap">
            <div className="xl:w-1/4 md:w-1/2 px-4">
              <Latestauctions
                key={productItemList.id}
                name={productItemList.name}
                price={productItemList.currentBid}
                // href="/item-detail/blackcar"
                //href={"/item-detail/${productItemList.id}"}
                href={{
                  pathname: "/item-detail/[slug]",
                  query: { slug: productItemList.id },
                }}
                imgurl={productItemList.imgUrl}
              />
            </div>
          </div>
        );
      })}

      <Canvas />
      <Contactus />
      <News />
      <Brands />
      <Footer />
    </div>
  );
}
