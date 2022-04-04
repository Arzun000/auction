import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./latestauction.module.css";

export const Latestauctions = () => {
  return (
    <>
      <div className="section-title-list mt-[100px] ">
        <div className="section-title w-[350px] h-[80px] pt-4 border-b-2 border-stone-300 m-auto text-center ">
          <h2 className="text-secttl">LATEST AUCTIONS</h2>
        </div>
        <div className="section-subtitle bg-white w-[50px] m-auto pb-[20px] mt-[-15px]">
          <img
            className="mx-auto"
            src="/static/icons/hammermain.png"
            height={25}
            width={25}
          ></img>
        </div>
      </div>

      {/* list of latest auction items */}

      <div className="flex flex-wrap">
        <div className="xl:w-1/4 md:w-1/2 bg-red-400 px-4">
          <Link href="#">
            {/* page/item-detail/[itemid.js] ma lanxa */}
            <a>
              <div className=" overflow-hidden h-[300px]">
                <div
                  className={Styles.articleimgholder}
                  style={{
                    // backgroundImage: 'url("/images/car5.jpeg")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <Image
                    className=" overflow-hidden"
                    src="/images/car5.jpeg"
                    height={550}
                    width={500}
                    objectFit="cover"
                    //layout="fill"
                    // width="100%"
                    // height="100%"
                    // layout="responsive"
                    // objectFit="contain"
                  />
                </div>
                <div className="image-texts h-[30px] w-[30px] mt-[-240px] ml-6 absolute ">
                  <div className="bid-now-icon rounded-full ">
                    <button className=" hammerbutton">
                      <img src="/static/icons/hammer.png"></img>
                    </button>
                  </div>
                  <div className="bid-now-icon rounded-full ">
                    <button className="iconbutton">
                      <img src="/static/icons/heart.png"></img>
                    </button>
                  </div>
                  <div className="bid-now-icon rounded-full ">
                    <button className="iconbutton">
                      <img src="/static/icons/search1.png"></img>
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <div className="cardtext bg-white text-center p-[10px]">
            <a href="#" className="no-underline">
              <b>White Car</b>
            </a>
            <subtext>
              <p>
                Current Bid: <b>$4000</b>
              </p>
            </subtext>
          </div>
        </div>
        <div class="xl:w-1/4  p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/721x401"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
              SUBTITLE
            </h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Colosseum Roma
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/722x402"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
              SUBTITLE
            </h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Great Pyramid of Giza
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/723x403"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
              SUBTITLE
            </h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              San Francisco
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/723x403"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
              SUBTITLE
            </h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              San Francisco
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};