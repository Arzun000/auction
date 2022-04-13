import React from "react";
import Link from "next/dist/client/link";

export const Blogtitle = () => {
  return (
    <div className="shop-container h-[140px] ml-[20px] xl:mx-[250px] rounded-xl shadow-sm">
      <div className="shop-text ml-[10px] max-w-[1400px] m-auto">
        <Link href="#">
          <a>Home</a>
        </Link>
        / <Link href="#">Blog list</Link>
      </div>
      <div className="shop-text-main ">Blogs</div>
    </div>
  );
};
