import React from "react";
import Slider from "react-slick";

export const Brands = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="news-container bg-gray-100">
        <div className="section-title-list mt-[30px] ">
          <div className="section-title w-[400px] h-[80px] pt-4 border-b-2 border-stone-300 m-auto text-center text-3xl font-bold ">
            <h2>SHOP BY BRAND</h2>
          </div>
          <div className="section-subtitle bg-gray-100 w-[50px] m-auto mt-[-15px]">
            <img
              className="mx-auto"
              src="/static/icons/hammer.png"
              height={35}
              width={35}
            ></img>
          </div>
        </div>
        <div className="slider-images lg:mx-[200px] py-[25px]">
          <Slider {...settings}>
            <div>
              <img src="/static/client1.png" height={150} width={150}></img>
            </div>
            <div>
              <img src="/static/client2.png" height={150} width={150}></img>
            </div>
            <div>
              <img src="/static/client1.png" height={150} width={150}></img>
            </div>
            <div>
              <img src="/static/client2.png" height={150} width={150}></img>
            </div>
            <div>
              <img src="/static/client1.png" height={150} width={150}></img>
            </div>
            <div>
              <img src="/static/client2.png" height={150} width={150}></img>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
