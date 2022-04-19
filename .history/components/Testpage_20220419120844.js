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
          <div className="  bg-red-300 items-center">
            <div className="bg-green-500">a</div>
          </div>
          <div className="">b</div>
          <div className="">c</div>
          <div className="">d</div>
        </div>
      </div>
    </div>
  );
};
