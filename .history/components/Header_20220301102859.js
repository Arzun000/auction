import React from "react";
import Link from "next/link";
export const Header = () => {
  return (
    <>
      <div>
        <header className="mx-auto flex max-w-7xl justify-between p-5">
          <div className="flex items-left space-x-5">
            <Link href="/">
              <img
                className="w-44 cursor-pointer object-contain"
                src="https://links.papareact.com/yvf"
                alt=""
              ></img>
            </Link>
            <div className="hidden items-center space-x-5 md:inline-flex">
              <h3>Home</h3>
              <h3>Shop</h3>
              <h3>Blog</h3>
              <h3>About</h3>
              <h3>Contact</h3>
              <h3>404</h3>
              <h3>External Link</h3>
              <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
                Follow
              </h3>
            </div>
          </div>
          <div className="flex items-center space-x-5 text-green-600">
            <h3>sign In</h3>
            <h3 className="rounded-full border border-green-600 px-4 py-1">
              Get Started
            </h3>
          </div>
        </header>
      </div>
      <div>this is head</div>
      <div>this is head</div>
    </>
  );
};
