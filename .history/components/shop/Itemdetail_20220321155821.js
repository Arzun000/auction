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

  const rechedZero = () => {
    if (count == 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
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
            <div className="py-[10px] flex gap-4 bg-white h-auto px-6 w-28">
              <button onClick={rechedZero}>-</button>
              <div>{count}</div>
              <button onClick={() => setCount(count + 1)}>+</button>
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
      <div className="">
        <ul
          class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
          id="tabs-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <a
              href="#tabs-home"
              class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
              id="tabs-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-home"
              role="tab"
              aria-controls="tabs-home"
              aria-selected="true"
            >
              Home
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#tabs-profile"
              class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
              id="tabs-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-profile"
              role="tab"
              aria-controls="tabs-profile"
              aria-selected="false"
            >
              Profile
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#tabs-messages"
              class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
              id="tabs-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-messages"
              role="tab"
              aria-controls="tabs-messages"
              aria-selected="false"
            >
              Messages
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#tabs-contact"
              class="
      nav-link
      disabled
      pointer-events-none
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
              id="tabs-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-contact"
              role="tab"
              aria-controls="tabs-contact"
              aria-selected="false"
            >
              Contact
            </a>
          </li>
        </ul>
        <div class="tab-content" id="tabs-tabContent">
          <div
            class="tab-pane fade show active"
            id="tabs-home"
            role="tabpanel"
            aria-labelledby="tabs-home-tab"
          >
            Tab 1 content
          </div>
          <div
            class="tab-pane fade"
            id="tabs-profile"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab"
          >
            Tab 2 content
          </div>
          <div
            class="tab-pane fade"
            id="tabs-messages"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab"
          >
            Tab 3 content
          </div>
          <div
            class="tab-pane fade"
            id="tabs-contact"
            role="tabpanel"
            aria-labelledby="tabs-contact-tab"
          >
            Tab 4 content
          </div>
        </div>
      </div>
    </div>
  );
};
