import Head from "next/head";

import latestAuctionsData from "../data/latestauction.json";

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
    props: { latestAuctions: latestAuctionsData },
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
      <div className="bg-red-200 mt-2 inline-flex">
        {props.latestAuctions.map((latestAuction) => {
          return (
            <Latestauctions
              key={latestAuction.id}
              name={latestAuction.name}
              price={latestAuction.currentBid}
              // href="/item-detail/blackcar"
              //href={"/item-detail/${productItemList.id}"}
              href={{
                pathname: "/item-detail/[slug]",
                query: { slug: latestAuction.id },
              }}
              imgurl={latestAuction.imgUrl}
            />
          );
        })}{" "}
      </div>

      <Canvas />
      <Contactus />
      <News />
      <Brands />
      <Footer />
    </div>
  );
}
