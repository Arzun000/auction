import React from "react";

export const Content = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-[70px] px-[10px] bg-[#F9F9F9]">
      <div className="info ">
        <div className="m-[15px] bg-white text-[#484848] rounded-[30px] p-[39px] font-[300] ">
          Yahoo Inc. is an American multinational Internet corporation
          headquartered in Sunnyvale, California. It is globally known for its
          Web portal, search engine Yahoo Search.
        </div>
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
      <div className="grid grid-cols-2 pl-[20px] gap-4">
        <div>
          <div className="inline-flex">
            <div className="py-[10px]">
              <img src="/aboutus/icons/truck.png" height={50} width={50}></img>
            </div>
            <div className="feature-text mt-[5px] ml-[30px]">
              <p className="font-[700] text-[30px]">8523</p>
              <p>Auctions</p>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-flex">
            <div className="py-[10px]">
              <img src="/aboutus/icons/truck.png" height={50} width={50}></img>
            </div>
            <div className="feature-text mt-[5px] ml-[30px]">
              <p className="font-bold text-[36px]">
                <h5>8523</h5>
              </p>
              <p>EMPLOYEES</p>
            </div>
          </div>
        </div>
        <div>01</div>

        <div>09</div>
        <div>01</div>

        <div>09</div>
      </div>
    </div>
  );
};
