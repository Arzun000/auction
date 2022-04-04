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
            <div className="pro-cost-title p-2 text-center ">
              <div className="image-caption-one ">
                <p>Vintage Cars</p>
              </div>
            </div>
          </div>
          <div className="pro-info"></div>
        </div>
      </div>
    </div>
  );
};
