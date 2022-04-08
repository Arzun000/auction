import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./Shopcontent.module.css";
// import { Iconsverticalbid } from "../icons/Iconsverticalbid";
// import { Iconsverticalbuy } from "../icons/Iconsverticalbuy";
// import { Shopleftnav } from "./Shopleftnav";

const Shopcontent = (props) => {
  // const imurl = props.imgurl;
  //console.log("hello");
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
                <Image src={props.imgurl} width={550} height={550} />
              </div>
            </div>
          </a>
        </Link>
      </div>

      <div className="cardtext bg-white text-center shadow-box-sh p-[10px]">
        <a href="#" className="no-underline">
          <b>{props.name}</b>
        </a>
        <subtext>
          <p>
            Current Bid: <b>{props.price}</b>
          </p>
        </subtext>
      </div>
    </div>
  );
};
export default Shopcontent;
