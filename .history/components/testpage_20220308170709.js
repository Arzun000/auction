import React, { Component } from "react";
import Slider from "react-slick";

export const Testpage = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="mx-[240px]">
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
  );
};
