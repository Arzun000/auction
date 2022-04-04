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
        <div className="personnel inline-flex">
          <img
            className="rounded-full border border-gray-100 shadow-sm"
            src="/aboutus/staffs/staff1.png"
            height={120}
            width={120}
          />
          <div className="personnel-info py-[60px] bg-green-200">
            <p className="text-[20px]">Andrew Mosafat</p>
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
