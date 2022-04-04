import React from "react";

export const Content = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="info bg-gray-100">
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
          <div className="personnel-info py-[60px] ml-[20px] pl-[20px] bg-green-200">
            <p className="text-[20px] font-bold">Andrew Mosafat</p>
            <p className="text-[12px] text-[#484848] font-[300]">
              Web designer
            </p>
          </div>
        </div>
      </div>
      <div className="grid2"></div>
    </div>
  );
};
