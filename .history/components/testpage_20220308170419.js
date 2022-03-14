import React, { Component } from "react";
import Slider from "react-slick";

export const Testpage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="/static/client1.png" height={150} width={150}></img>
        </div>
        <div>
          <img src="/static/client2.png"></img>
        </div>
        <div>
          <img src="/static/client1.png"></img>
        </div>
        <div>
          <img src="/static/client2.png"></img>
        </div>
        <div>
          <img src="/static/client1.png"></img>
        </div>
        <div>
          <img src="/static/client2.png"></img>
        </div>
      </Slider>
    </div>
  );
};
