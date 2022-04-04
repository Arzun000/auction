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
      <Link href={props.href}>
        {/* page/item-detail/[itemid.js] ma lanxa */}
        <a>
          <div className=" overflow-hidden h-[300px]">
            <div
              className={Styles.articleimgholder}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Image src={props.imgurl} width={350} height={350} />
            </div>
            <div className="bg-white absolute ">
              <Iconsverticalbuy />
              <div className="cardtext w-[420px] md:w-[235px] lg:w-[336px] shadow-xl absolute text-center h-[80px] pt-[10px]">
                <a href="#" className="no-underline">
                  <b>{props.name}</b>
                </a>
                <subtext>
                  <p>
                    Price: <b>{props.currentBid}</b>
                  </p>
                </subtext>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
export default Shopcontent;
