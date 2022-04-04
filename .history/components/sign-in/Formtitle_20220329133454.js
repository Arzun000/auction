import React from "react";
import Link from "next/dist/client/link";

export const formtitle = () => {
  return (
    <div className="shop-container h-[140px] ml-[20px] rounded-xl shadow-sm">
      <div className="shop-text ml-[10px]">
        <Link href="#">
          <a>Home</a>
        </Link>
        / <Link href="#">Blog list</Link>
      </div>
      <div className="shop-text-main ">MY Account</div>
    </div>
  );
};
