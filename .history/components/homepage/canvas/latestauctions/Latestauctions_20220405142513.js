import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./latestauction.module.css";

//export default function latestauctions(props) {
export const Latestauctions = (props) => {
  console.log("ppap", props);
  const [auctionEnd, setAuctionEnd] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("05/05/2022 16:42:15");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setAuctionEnd(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* list of latest auction items */}
      {/* <div className=" flex flex-wrap"> */}
      <div className="xl:w-1/4 md:w-1/2 px-4">
        <Link href="#">
          {/* page/item-detail/[itemid.js] ma lanxa */}
          <a>
            <div className={Styles.card}>
              <div
                className={Styles.articleimgholder}
                style={{
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
                />
              </div>
              <div className={Styles.cardtext}>
                {auctionEnd ? (
                  <div className="text-[#1a0f07] p-1">
                    {" "}
                    The Auction for this item has ended!!
                  </div>
                ) : (
                  <div className="timer flex divide-x divide-gray-200 flex-wrap">
                    <div className="days w-1/4">
                      <div className="days-no text-[#ea7f23]"> {days} </div>
                      <div className={Styles.timertxt}>Days</div>
                    </div>
                    <div className="hours w-1/4">
                      <div className="hours-no text-[#ea7f23]"> {hours} </div>
                      <div className={Styles.timertxt}>hours</div>
                    </div>
                    <div className="minutes w-1/4">
                      <div className="minutes-no text-[#ea7f23]">
                        {" "}
                        {minutes}{" "}
                      </div>
                      <div className={Styles.timertxt}>minutes</div>
                    </div>
                    <div className="seconds w-1/4">
                      <div className="seconds-no text-[#ea7f23]">
                        {" "}
                        {seconds}{" "}
                      </div>
                      <div className={Styles.timertxt}>seconds</div>
                    </div>
                  </div>
                )}
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
            <b>{props.name}</b>
          </a>
          <subtext>
            <p>
              Current Bid: <b>$4000</b>
            </p>
          </subtext>
        </div>
      </div>
      {/* second item */}
      {/* <div className="xl:w-1/4 md:w-1/2 px-4">
          <Link href="#">
          
            <a>
              <div className={Styles.card}>
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
                    src="/images/car1.jpg"
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
                <div className={Styles.cardtext}>
                  {auctionEnd ? (
                    <div className="text-[#ff3838] p-1">
                      {" "}
                      The Auction for this item has ended!!
                    </div>
                  ) : (
                    <div className="timer flex divide-x divide-gray-200 flex-wrap">
                      <div className="days w-1/4">
                        <div className="days-no text-[#ea7f23]"> {days} </div>
                        <div className={Styles.timertxt}>Days</div>
                      </div>
                      <div className="hours w-1/4">
                        <div className="hours-no text-[#ea7f23]"> {hours} </div>
                        <div className={Styles.timertxt}>hours</div>
                      </div>
                      <div className="minutes w-1/4">
                        <div className="minutes-no text-[#ea7f23]">
                          {" "}
                          {minutes}{" "}
                        </div>
                        <div className={Styles.timertxt}>minutes</div>
                      </div>
                      <div className="seconds w-1/4">
                        <div className="seconds-no text-[#ea7f23]">
                          {" "}
                          {seconds}{" "}
                        </div>
                        <div className={Styles.timertxt}>seconds</div>
                      </div>
                    </div>
                  )}
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
        </div> */}
      {/* third item */}
      {/* <div className="xl:w-1/4 md:w-1/2 px-4">
          <Link href="#">
            <a>
              <div className={Styles.card}>
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
                    src="/images/car3.jpg"
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
                <div className={Styles.cardtext}>
                  {auctionEnd ? (
                    <div className="text-[#17582d] p-1">
                      {" "}
                      The Auction for this item has ended!!
                    </div>
                  ) : (
                    <div className="timer flex divide-x divide-gray-200 flex-wrap">
                      <div className="days w-1/4">
                        <div className="days-no text-[#ea7f23]"> {days} </div>
                        <div className={Styles.timertxt}>Days</div>
                      </div>
                      <div className="hours w-1/4">
                        <div className="hours-no text-[#ea7f23]"> {hours} </div>
                        <div className={Styles.timertxt}>hours</div>
                      </div>
                      <div className="minutes w-1/4">
                        <div className="minutes-no text-[#ea7f23]">
                          {" "}
                          {minutes}{" "}
                        </div>
                        <div className={Styles.timertxt}>minutes</div>
                      </div>
                      <div className="seconds w-1/4">
                        <div className="seconds-no text-[#ea7f23]">
                          {" "}
                          {seconds}{" "}
                        </div>
                        <div className={Styles.timertxt}>seconds</div>
                      </div>
                    </div>
                  )}
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
        </div> */}
      {/* fourth item */}
      {/* <div className="xl:w-1/4 md:w-1/2 px-4">
          <Link href="#">
            
            <a>
              <div className={Styles.card}>
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
                    src="/images/car4.jpg"
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
                <div className={Styles.cardtext}>
                  {auctionEnd ? (
                    <div className="text-[#982ea7] p-1">
                      {" "}
                      The Auction for this item has ended!!
                    </div>
                  ) : (
                    <div className="timer flex divide-x divide-gray-200 flex-wrap">
                      <div className="days w-1/4">
                        <div className="days-no text-[#ea7f23]"> {days} </div>
                        <div className={Styles.timertxt}>Days</div>
                      </div>
                      <div className="hours w-1/4">
                        <div className="hours-no text-[#ea7f23]"> {hours} </div>
                        <div className={Styles.timertxt}>hours</div>
                      </div>
                      <div className="minutes w-1/4">
                        <div className="minutes-no text-[#ea7f23]">
                          {" "}
                          {minutes}{" "}
                        </div>
                        <div className={Styles.timertxt}>minutes</div>
                      </div>
                      <div className="seconds w-1/4">
                        <div className="seconds-no text-[#ea7f23]">
                          {" "}
                          {seconds}{" "}
                        </div>
                        <div className={Styles.timertxt}>seconds</div>
                      </div>
                    </div>
                  )}
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
        </div>  */}
      {/* </div> */}
    </>
  );
};
