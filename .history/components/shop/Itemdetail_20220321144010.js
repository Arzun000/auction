import React from "react";
import Link from "next/dist/client/link";
import Slider from "react-slick";

export const Itemdetail = () => {
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
                <img src="/static/client1.png" height={175} width={175}></img>
              </div>
              <div>
                <img src="/static/client2.png" height={175} width={175}></img>
              </div>
            </Slider>
          </div>
        </div>
        <div className="bg-green-200">02</div>
      </div>
    </div>
  );
};
