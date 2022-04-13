import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        border: " black",
        background: "gray",
        borderRadius: "16px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        border: "1px solid black",
        background: "gray",
        borderRadius: "16px",
      }}
      onClick={onClick}
    />
  );
}

export const Brands = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div className="news-container hidden lg:block mt-[40px]  bg-[#f9f9f9] pb-[60px]">
        <div className="max-w-[1400px] pt-[40px] m-auto">
          <div className="section-title-list max-w-[1400px] m-auto ">
            <div className="section-title w-[400px] h-[80px] pt-4 border-b-2 border-stone-300 m-auto text-center ">
              <h2 className="text-secttl">SHOP BY BRAND</h2>
            </div>
            <div className="section-subtitle bg-[#f9f9f9] w-[50px] m-auto mt-[-15px]">
              <img
                className="mx-auto"
                src="/static/icons/hammermain.png"
                height={35}
                width={35}
              ></img>
            </div>
          </div>
          <div className="slider-images lg:mx-[100px] py-[25px]">
            <Slider {...settings}>
              <div>
                <img src="/static/client1.png" height={175} width={175}></img>
              </div>
              <div>
                <img src="/static/client2.png" height={175} width={175}></img>
              </div>
              <div>
                <img src="/static/client1.png" height={175} width={175}></img>
              </div>
              <div>
                <img src="/static/client2.png" height={175} width={175}></img>
              </div>
              <div>
                <img src="/static/client1.png" height={175} width={175}></img>
              </div>
              <div>
                <img src="/static/client2.png" height={175} width={175}></img>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
