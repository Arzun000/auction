import React from "react";
import Link from "next/dist/client/link";

export const Blogtitle = () => {
  return (
    <div className="shop-container h-[140px] mr-[30px] rounded-xl shadow-box-sh">
      <div className="shop-text ml-[10px]">
        <Link href="#">
          <a>Home</a>
        </Link>
        / <Link href="#">Blog list</Link>
      </div>
      <div className="shop-text-main ">Blogs</div>
    </div>
  );
};
