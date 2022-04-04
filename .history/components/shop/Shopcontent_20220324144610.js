import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./Shopcontent.module.css";
import { Iconsverticalbid } from "../icons/Iconsverticalbid";
import { Iconsverticalbuy } from "../icons/Iconsverticalbuy";
import { Shopleftnav } from "./Shopleftnav";

const Shopcontent = (props) => {
  const imurl = props.imgurl;
  console.log("hello");
  return (
    <div>
      <div className="flex flex-wrap">
        <Link href={props.href}>
          {/* page/item-detail/[itemid.js] ma lanxa */}
          <a>
            <div className=" overflow-hidden w-full h-[300px]">
              <div
                className={Styles.articleimgholder}
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Image src={props.imgurl} layout="intrinsic" />
              </div>
            </div>
          </a>
        </Link>
      </div>
      {/* <div className="bg-white w-full absolute ">
        <Iconsverticalbuy />
        <div className="cardtext shadow-xl absolute text-center  pt-[10px]">
          <a href="#" className="no-underline">
            <b>{props.name}</b>
          </a>
          <subtext>
            <p>
              Price: <b>{props.price}</b>
            </p>
          </subtext>
        </div>
      </div> */}
      <div className="cardtext bg-white text-center shadow-box-sh p-[10px]">
        <a href="#" className="no-underline">
          <b>White Car</b>
        </a>
        <subtext>
          <p>
            Current Bid: <b>$4000</b>
          </p>
        </subtext>
      </div>
    </div>
  );
};
export default Shopcontent;
