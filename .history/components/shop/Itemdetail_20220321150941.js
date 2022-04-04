import React, { useState } from "react";
import Link from "next/dist/client/link";
import Slider from "react-slick";

export const Itemdetail = () => {
  const [count, setCount] = useState(0);

  const settings = {
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="shop-container h-[140px] bg-gray-50">
      <div className="shop-text ml-[10px]">
        <Link href="#">Home</Link> / <Link href="#">Shop</Link>
      </div>
      <div className="shop-text-main ">White Car</div>
      <div className="grid grid-cols-2 gap-4 mr-[120px] mt-[120px] bg-red-300 ml-[120px]">
        <div className="bg-green-200">
          <div className="slider-images lg:mx-[100px] py-[25px]">
            <Slider {...settings}>
              <div>
                <img src="/images/car1.jpg"></img>
              </div>
              <div>
                <img src="/images/car2.jpg"></img>
              </div>
            </Slider>
          </div>
        </div>
        <div className="bg-green-200">
          <div className="pro-cost ">
            <div className="pro-cost-title p-2 ml-[30px] ">
              <div className="image-caption-one ">
                <p>Vintage Cars</p>
              </div>
              <div className="line  mt-[8px]"></div>
            </div>
          </div>
          <div className="pro-info ml-[30px] py-[10px]">
            <div className="py-[10px]">Item Condition: Used</div>
            <div className="py-[10px]">Auction ended: August 5, 2021</div>
            <div className="py-[10px] flex gap-4 bg-white h-auto">
              <button>-</button>
              <div>{count}</div>
              <button>+</button>
            </div>
            <div className="py-[0px] leading-10">
              SKU: MT034 <br />
              Categories:<b> V12, SuperCar, 1.999cm3, Self-driving</b>
              <br />
              Tags: <b>sales, black friday, hot</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
