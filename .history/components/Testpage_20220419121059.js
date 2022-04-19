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
      <div className="">
        <div className="flex items-center justify-between md:hidden divide-x divide-gray-200">
          <div className="w-[25%] flex justify-center items-center bg-red-300 ">
            <div className="bg-green-500">a</div>{" "}
            <div className="bg-green-500">a</div>
          </div>
          <div className="w-[25%]">b</div>
          <div className="w-[25%]">c</div>
          <div className="w-[25%]">d</div>
        </div>
      </div>
    </div>
  );
};
