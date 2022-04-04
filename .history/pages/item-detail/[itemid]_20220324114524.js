import { useRouter } from "next/dist/client/router";
import Link from "next/dist/client/link";
import productItemListsData from "../../data/shopitem.json";
import Image from "next/image";
import React, { useState } from "react";
import Tabs from "./Tabs";
import { Latestauctions } from "../../components/homepage/canvas/Latestauctions";
import { Footer } from "../../components/footer/Footer";

import Slider from "react-slick";

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  console.log("params:", params);
  return {
    props: {
      productItemList: productItemListsData.find((productItemList) => {
        return productItemList.id.toString() === params.itemid;
      }),
    }, // will be passed to the page component as props
  };
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { itemid: "1" } },
      { params: { itemid: "2" } },
      { params: { itemid: "3" } },
      { params: { itemid: "4" } },
      { params: { itemid: "5" } },
      { params: { itemid: "6" } },
      { params: { itemid: "7" } },
      { params: { itemid: "8" } },
      { params: { itemid: "9" } },
    ],
    fallback: false,
  };
}

const ItemDetail = (props) => {
  const router = useRouter();
  console.log(router);
  console.log("Props:", props);
  const [count, setCount] = useState(0);

  const settings = {
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const rechedZero = () => {
    if (count == 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      {" "}
      <div>Hello {router.query.itemid}</div>
      <h1>{props.productItemList.name}</h1>
      <h1>Curent Bid: {props.productItemList.currentBid}</h1>
      {/* ACTUAL CONTENT BEFORE DYNAMIC */}
      <div className="shop-container h-[140px] bg-gray-50">
        <div className="shop-text ml-[10px]">
          <Link href="#">Home</Link> / <Link href="#">Shop</Link>
        </div>
        <div className="shop-text-main ">{props.productItemList.name}</div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mr-[120px] mt-[120px]  ml-[120px]">
          <div className="">
            <div className="slider-images lg:mx-[100px] py-[25px]">
              <Slider {...settings}>
                <div>
                  <Image
                    src={props.productItemList.imgUrl}
                    width={350}
                    height={350}
                  />
                </div>
                <div>
                  <img src="/images/car2.jpg"></img>
                </div>
              </Slider>
            </div>
          </div>
          <div className="">
            <div className="pro-cost ">
              <div className="pro-cost-title p-2 ml-[30px] ">
                <div className="image-caption-one ">
                  <p>{props.productItemList.name}</p>
                </div>
                <div className="line  mt-[8px]"></div>
              </div>
            </div>
            <div className="pro-info ml-[30px] py-[10px]">
              <div className="py-[10px]">Item Condition: Used</div>
              <div className="py-[10px]">
                Seller: <b>{props.productItemList.seller}</b>
              </div>
              <div className="py-[10px]">
                Current Bid: {props.productItemList.currentBid}{" "}
              </div>
              <div className="py-[10px] flex gap-4 border-[1px] bg-white h-auto px-6 w-28">
                <button onClick={rechedZero}>-</button>
                <div>{count}</div>
                <button onClick={() => setCount(count + 1)}>+</button>
              </div>
              <div className="py-[0px]  leading-10">
                SKU: MT034 <br />
                Categories:<b> V12, SuperCar, 1.999cm3, Self-driving</b>
                <br />
                Tags: <b>sales, black friday, hot</b>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Tabs />
        </div>
        <div className="shop-text-main ">Related Products</div>
        <div>
          <Latestauctions />
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
