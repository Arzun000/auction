import Link from "next/link";
import React from "react";
import Styles from "./Testcomp.module.css";

import { Iconsverticalbuy } from "../icons/Iconsverticalbuy";

const Testcomp = (props) => {
  const imurl = props.imgurl;

  return (
    <div>
      <Link href={props.href}>
        <a>
          <div className=" overflow-hidden h-[300px]">
            <div
              className={Styles.articleimgholder}
              style={{
                background: "./images/car1.jpg",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="bg-white absolute ">
              <Iconsverticalbuy />
              <div className="cardtext w-[420px] md:w-[235px] lg:w-[336px] shadow-xl absolute text-center h-[80px] pt-[10px]">
                <a href="#" className="no-underline">
                  <b>{props.name}</b>
                </a>
                <subtext>
                  <p>
                    Price: <b>$2000</b>
                  </p>
                </subtext>
              </div>
            </div>
          </div>
        </a>
      </Link>
      {/*<Link href={props.href}>
        <a>
          <h2>{props.name}</h2>
        </a>
      </Link>
      Hello*/}
    </div>
  );
};
export default Testcomp;
