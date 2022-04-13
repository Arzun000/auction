import React from "react";
import Link from "next/dist/client/link";

export const Formtitle = () => {
  return (
    <div className="shop-container h-[140px] ml-[20px] max-w-[1400px] m-auto rounded-xl shadow-sm">
      <div className="shop-text ml-[10px]">
        <Link href="#">
          <a>Home</a>
        </Link>
        / <Link href="#">MY ACCOUNT</Link>
      </div>
      <div className="shop-text-main ">MY Account</div>
    </div>
  );
};
