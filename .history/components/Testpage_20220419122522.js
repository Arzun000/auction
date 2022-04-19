import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Test.module.css";
import { MdMenu, MdClose } from "react-icons/md";
import { createPopper } from "@popperjs/core";

export const Testpage = () => {
  return (
    <div>
      Testpage
      <div className="mt-[80px]">
        <div className="flex items-center justify-between  md:hidden divide-x divide-gray-200">
          <div className="w-[25%] flex justify-center items-center bg-red-300 ">
            <button className="py-[10px]">
              <div className=" p-[5px] ">
                <img
                  src="/static/icons/search_black.png"
                  height={25}
                  width={25}
                ></img>
              </div>
              <div className="small-footer-text">
                <p>search</p>
              </div>
            </button>
          </div>
          <div className="w-[25%] flex justify-center items-center bg-red-300 ">
            <div className="py-[10px]">
              <div className="bg-green-500 py-[5px] ">
                <img
                  src="/static/icons/basket_black.png"
                  height={25}
                  width={25}
                ></img>
              </div>
              <div className="small-footer-text">
                <p>cart</p>
              </div>
            </div>
          </div>
          <div className="w-[25%] flex justify-center items-center bg-red-300 ">
            <div className="py-[10px]">
              <div className="bg-green-500 p-[5px] ">
                <img
                  src="/static/icons/heart_black.png"
                  height={25}
                  width={25}
                ></img>
              </div>
              <div className="small-footer-text">
                <p>Wishlist</p>
              </div>
            </div>
          </div>
          <div className="w-[25%] flex justify-center items-center bg-red-300 ">
            <div className="py-[10px]">
              <div className="bg-green-500 p-[5px] ">
                <img src="/static/icons/user.png" height={25} width={25}></img>
              </div>
              <div className="small-footer-text">
                <p>Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};