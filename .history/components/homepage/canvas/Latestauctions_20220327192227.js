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
                <div className="cardtext bg-white text-center shadow-box-sh absolute mt-[-100px] mx-[20px] w-[280px] p-[10px]">
                  <div className="timer flex divide-x divide-gray-200 flex-wrap">
                    <div className="days w-1/4">
                      <div className="days-no text-[#ea7f23]"> 120 </div>
                      <div className="timer-txt">days</div>
                    </div>
                    <div className="hours w-1/4">
                      <div className="hours-no text-[#ea7f23]"> 10 </div>
                      <div className="timer-txt">hours</div>
                    </div>
                    <div className="minutes w-1/4">
                      <div className="minutes-no text-[#ea7f23]"> 45 </div>
                      <div className="timer-txt">minutes</div>
                    </div>
                    <div className="seconds w-1/4">
                      <div className="seconds-no text-[#ea7f23]"> 15 </div>
                      <div className="timer-txt">seconds</div>
                    </div>
                  </div>
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
        {/* second item */}
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
                    src="/images/car2.jpg"
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
                <div className="cardtext bg-white text-center shadow-box-sh absolute mt-[-100px] mx-[20px] w-[280px] p-[10px]">
                  <div className="timer flex divide-x divide-gray-200 flex-wrap">
                    <div className="days w-1/4">
                      <div className="days-no text-[#ea7f23]"> 120 </div>
                      <div className="timer-txt">days</div>
                    </div>
                    <div className="hours w-1/4">
                      <div className="hours-no text-[#ea7f23]"> 10 </div>
                      <div className="timer-txt">hours</div>
                    </div>
                    <div className="minutes w-1/4">
                      <div className="minutes-no text-[#ea7f23]"> 45 </div>
                      <div className="timer-txt">minutes</div>
                    </div>
                    <div className="seconds w-1/4">
                      <div className="seconds-no text-[#ea7f23]"> 15 </div>
                      <div className="timer-txt">seconds</div>
                    </div>
                  </div>
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
          <div className="cardtext bg-white shadow-box-sh text-center p-[10px]">
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
    </>
  );
};
