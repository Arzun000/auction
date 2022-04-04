import React from "react";
import Link from "next/dist/client/link";
import Style from "./Shop.module.css";
export const Shoptitle = () => {
  return (
    <div className="shop-container h-[140px] bg-gray-50">
      <div className="shop-text ml-[10px]">
        <Link href="#">Home</Link> / <Link href="#">Shop</Link>
      </div>
      <div className="shop-text-main bg-blue-300 ">Shops</div>
    </div>
  );
};
