import React from "react";
import Link from "next/dist/client/link";
import Style from "./Shop.module.css";
export const Shoptitle = () => {
  return (
    <div className="shop-container h-[120px] bg-gray-50">
      <div className="shop-text">
        <Link href="#">Sign In</Link>
      </div>
      <div className=""></div>
    </div>
  );
};