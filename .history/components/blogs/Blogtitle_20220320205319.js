import React from "react";
import Link from "next/dist/client/link";
import Style from "./Blog.module.css";
export const Blogtitle = () => {
  return (
    <div className="shop-container h-[140px] bg-gray-50">
      <div className="shop-text ml-[10px]">
        <Link href="#">Home</Link> / <Link href="#">Blog</Link>
      </div>
      <div className="shop-text-main ">Blogs</div>
    </div>
  );
};
