import React from "react";
import Slider from "react-slick";
export const Content = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-[#F9F9F9]">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1400px] m-auto py-[70px] px-[10px] bg-[#F9F9F9]">
        <div className="info ">
          <div className="m-[15px] bg-white text-[#484848] rounded-[30px] p-[39px] font-[300] ">
            Yahoo Inc. is an American multinational Internet corporation
            headquartered in Sunnyvale, California. It is globally known for its
            Web portal, search engine Yahoo Search.
          </div>
          <Slider {...settings}>
            <div>
              <div className="personnel inline-flex py-[40px] pl-[40px]">
                <img
                  className="rounded-full border border-gray-100 h-[120px] w-[120px] mt-[30px] shadow-sm"
                  src="/aboutus/staffs/staff4.jpg"
                />
                <div className="personnel-info py-[60px] ml-[20px] pl-[20px]">
                  <p className="text-[20px] font-bold">Andrew Mosafat</p>
                  <p className="text-[16px] text-[#484848] font-[300]">
                    Web designer
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="personnel inline-flex py-[40px] pl-[40px]">
                <img
                  className="rounded-full border border-gray-100 h-[120px] w-[120px] mt-[30px] shadow-sm"
                  src="/aboutus/staffs/staff3.png"
                />
                <div className="personnel-info py-[60px] ml-[20px] pl-[20px]">
                  <p className="text-[20px] font-bold">Hector Barbossa</p>
                  <p className="text-[16px] text-[#484848] font-[300]">
                    Web designer
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="personnel inline-flex py-[40px] pl-[40px]">
                <img
                  className="rounded-full border border-gray-100 h-[120px] w-[120px] mt-[30px] shadow-sm"
                  src="/aboutus/staffs/staff7.png"
                />
                <div className="personnel-info py-[60px] ml-[20px] pl-[20px]">
                  <p className="text-[20px] font-bold">Judy Moncada</p>
                  <p className="text-[16px] text-[#484848] font-[300]">
                    DataBase Admin
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="grid grid-cols-2 pl-[40px] pr-[100px] h-[250px] mt-[50px] gap-1">
          <div>
            <div className="inline-flex ">
              <div className="py-[10px]">
                <img
                  src="/aboutus/icons/truck.png"
                  height={50}
                  width={50}
                ></img>
              </div>
              <div className="feature-text mt-[5px] ml-[30px]">
                <p className="font-[700] text-[30px]">8523</p>
                <p>AUCTIONS</p>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex ">
              <div className="py-[10px]">
                <img
                  src="/aboutus/icons/truck.png"
                  height={50}
                  width={50}
                ></img>
              </div>
              <div className="feature-text mt-[5px] ml-[30px]">
                <p className="font-[700] text-[30px]">8523</p>
                <p>EMPLOYEES</p>
              </div>
            </div>
          </div>
          <div>
            <div className="inline-flex ">
              <div className="py-[10px]">
                <img
                  src="/aboutus/icons/truck.png"
                  height={50}
                  width={50}
                ></img>
              </div>
              <div className="feature-text mt-[5px] ml-[30px]">
                <p className="font-[700] text-[30px]">9923</p>
                <p>SELLER ACCOUNT</p>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex ">
              <div className="py-[10px]">
                <img
                  src="/aboutus/icons/money.png"
                  height={50}
                  width={50}
                ></img>
              </div>
              <div className="feature-text mt-[5px] ml-[30px]">
                <p className="font-[700] text-[30px]">9693</p>
                <p>TOTAL ACCOUNTS</p>
              </div>
            </div>
          </div>
          <div>
            <div className="inline-flex">
              <div className="py-[10px]">
                <img
                  src="/aboutus/icons/truck.png"
                  height={50}
                  width={50}
                ></img>
              </div>
              <div className="feature-text mt-[5px] ml-[30px]">
                <p className="font-[700] text-[30px]">9923</p>
                <p>USERS HELPED</p>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex">
              <div className="py-[10px]">
                <img
                  src="/aboutus/icons/headphone.png"
                  height={50}
                  width={50}
                ></img>
              </div>
              <div className="feature-text mt-[5px] ml-[30px]">
                <p className="font-[700] text-[30px]">9923</p>
                <p>PROBLEMS SOLVED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};