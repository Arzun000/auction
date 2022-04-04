import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./homepage/canvas/latestauction.module.css";

export const Testpage = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="xl:w-1/4 md:w-1/2 px-4">
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
                <div className="cardtext bg-white text-center shadow-box-sh absolute mt-[-120px] w-[100%] p-[10px]">
                  <a href="#" className="no-underline">
                    <b>White Car</b>
                  </a>
                  <subtext>
                    <p>
                      Current Bid: <b>$4000</b>
                    </p>
                  </subtext>
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
          <div className="cardtext bg-white text-center shadow-box-sh p-[10px]">
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
      </div>
    </div>
  );
};
