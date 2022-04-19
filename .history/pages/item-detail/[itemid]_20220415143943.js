import { useRouter } from "next/dist/client/router";
import Link from "next/dist/client/link";
import productItemListsData from "../../data/shopitem.json";
import Image from "next/image";
import React, { useState } from "react";
import { Header } from "../../components/header/Header.js";
//import { Itemdetail } from "../../components/shop/Itemdetail";
import { Footer } from "../../components/footer/Footer.js";

import Slider from "react-slick";

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
  // console.log(router);
  // console.log("Props011:", props);

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

  const [openTab, setOpenTab] = React.useState(1);
  const color = "white";
  return (
    <>
      {" "}
      {/* <div>Hello {router.query.itemid}</div>
      <h1>{props.productItemList.name}</h1>
      <h1>Curent Bid: {props.productItemList.currentBid}</h1> */}
      {/* ACTUAL CONTENT BEFORE DYNAMIC */}
      <Header />
      <div className="contents ">
        <div className="shop-container h-[140px] bg-gray-50 ">
          <div className="headings max-w-[1400px] m-auto">
            <div className="shop-text  ">
              <Link href="#">Home</Link> / <Link href="#">Shop</Link>
            </div>
            <div className="shop-text-main ">{props.productItemList.name}</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1400px] m-auto mt-[120px] ">
          <div className="">
            <div className="slider-images lg:mx-[20px] py-[25px]">
              <Slider {...settings}>
                <div>
                  <Image
                    src={props.productItemList.imgUrl}
                    height={400}
                    width={600}
                  />
                </div>
                <Image src="/images/car9.jpg" height={400} width={600} />
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
              <div className="py-[10px]">
                Deadline: {props.productItemList.deadline}{" "}
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

        <div className="max-w-[1400px] m-auto">
          {/* <Tabs /> */}
          <>
            <div className="flex flex-col lg:flex-wrap">
              <div className="w-full">
                <ul
                  className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                  role="tablist"
                >
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "itemdetail-tabs " +
                        (openTab === 1
                          ? "text-[#ea7f23] bg-" + color + "-600"
                          : "text-white bg-[#ea7f23]")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      DESCRIPTION
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "itemdetail-tabs " +
                        (openTab === 2
                          ? "text-[#ea7f23] bg-" + color + "-600"
                          : "text-white bg-[#ea7f23]")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      ADDITIONAL INFORMATION
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "itemdetail-tabs " +
                        (openTab === 3
                          ? "text-[#ea7f23] bg-" + color + "-600"
                          : "text-white bg-[#ea7f23]")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      AUCTION HISTORY
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "itemdetail-tabs " +
                        (openTab === 4
                          ? "text-[#ea7f23] bg-" + color + "-600"
                          : "text-white bg-[#ea7f23]")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(4);
                      }}
                      data-toggle="tab"
                      href="#link4"
                      role="tablist"
                    >
                      VENDOR INFO
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "itemdetail-tabs " +
                        (openTab === 5
                          ? "text-[#ea7f23] bg-" + color + "-600"
                          : "text-white bg-[#ea7f23]")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(5);
                      }}
                      data-toggle="tab"
                      href="#link5"
                      role="tablist"
                    >
                      MORE FROM VENDOR
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                  <div className="px-4 py-5 flex-auto">
                    <div className="tab-content tab-space">
                      <div
                        className={openTab === 1 ? "block" : "hidden"}
                        id="link1"
                      >
                        <p>
                          Going forward knowledge is power or we need to button
                          up our approach old boys club. Please use
                          “solutionise” instead of solution ideas! 🙂 draw a
                          line in the sand, for take five, punch the tree, and
                          come back in here with a clear head. Out of scope
                          data-point work flows , nor critical mass, and time to
                          open the kimono yet move the needle. You better eat a
                          reality sandwich before you walk back in that
                          boardroom fire up your browser, so come up with
                          something buzzworthy, for it’s about managing
                          expectations yet baseline into the weeds. Gain
                          traction product management breakout fastworks we just
                          need to put these last issues to bed, or table the
                          discussion.
                        </p>
                      </div>
                      <div
                        className={openTab === 2 ? "block" : "hidden"}
                        id="link2"
                      >
                        <p>
                          Completely synergize resource taxing relationships via
                          premier niche markets. Professionally cultivate
                          one-to-one customer service with robust ideas.
                          <br />
                          <br />
                          Dynamically innovate resource-leveling customer
                          service for state of the art customer service.
                        </p>
                      </div>
                      <div
                        className={openTab === 3 ? "block" : "hidden"}
                        id="link3"
                      >
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                          <br />
                          <br /> Dramatically maintain clicks-and-mortar
                          solutions without functional solutions.
                        </p>
                      </div>
                      <div
                        className={openTab === 4 ? "block" : "hidden"}
                        id="link4"
                      >
                        <div className="seller-detail ">
                          <div className="inline-flex">
                            <img
                              className="tab-icon p-0 mt-0"
                              src="/static/icons/cart.png"
                            />
                            &emsp; Vendor Name:<b>&emsp; ABC Sales </b>
                          </div>
                        </div>
                        <div>
                          <div className="inline-flex">
                            <img
                              className="tab-icon p-0 mt-0"
                              src="/static/icons/seller.png"
                            ></img>
                            &emsp; Seller Name:{" "}
                            <b>&emsp; {props.productItemList.seller}</b>
                          </div>
                        </div>
                        <div className="inline-flex">
                          <img
                            className="tab-icon p-0 mt-0"
                            src="/static/icons/address.png"
                          ></img>
                          &emsp; Address:{" "}
                          <b>&emsp;{props.productItemList.address}</b>
                        </div>
                        <div className="">
                          <div className="inline-flex">
                            <img
                              className="tab-icon p-0 mt-0"
                              src="/static/icons/star.png"
                            ></img>{" "}
                            &emsp;Current Rating: <b> &emsp;4.5</b>
                          </div>
                        </div>
                      </div>
                      {/* <div className="inline-flex">
                          <div>
                            <img
                              className="tab-icon"
                              src="/static/icons/cart.png"
                            ></img>
                          </div>
                          <div className="">
                            Vendor Name: <b>ABC Sales</b>
                          </div>
                        </div>
                        
                        <div className="inline-flex">
                          <div>
                            <img
                              className="tab-icon"
                              src="/static/icons/seller.png"
                            ></img>
                          </div>
                          <div className="">
                            Seller Name: <b>{props.productItemList.seller}</b>
                          </div>
                        </div>
                        <div className="">
                          <img
                            className="tab-icon"
                            src="/static/icons/address.png"
                          ></img>
                          Address: <b>{props.productItemList.address}</b>
                        </div>
                        <div className="">
                          <img
                            className="tab-icon"
                            src="/static/icons/star.png"
                          ></img>{" "}
                          <b>4.5</b>
                        </div>
                      </div> */}
                      <div
                        className={openTab === 5 ? "block" : "hidden"}
                        id="link5"
                      >
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                          <br />
                          <br /> Dramatically maintain clicks-and-mortar
                          solutions without functional solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
          {/* <Tabs
            key={props.productItemList.id}
            name={props.productItemList.name}
            price={props.productItemList.currentBid}
            // href="/item-detail/blackcar"
            //href={"/item-detail/${productItemList.id}"}
            href={{
              pathname: "/item-detail/[slug]",
              query: { slug: props.productItemList.id },
            }}
            imgurl={props.productItemList.imgUrl}
          /> */}
        </div>
        {/* <div className="shop-text-main ">Related Products</div> */}
        {/* <div>
          <Latestauctions />
        </div> */}
        <Footer />
      </div>
    </>
  );
};
export default ItemDetail;
