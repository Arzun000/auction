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
        <div className="small-footer mt-[90px] md:hidden divide-x divide-gray-200"></div>
      </div>
    </div>
  );
};
