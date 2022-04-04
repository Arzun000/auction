import React from "react";

import { Header } from "../../components/header/Header.js";
//import { Body } from "../../components/aboutus/Body.js";
//import { Ourteam } from "../../components/aboutus/Ourteam.js";
import { Shoptitle } from "../../components/shop/Shoptitle.js";
import { Shopcontent } from "../../components/shop/Shopcontent.js";
import { Footer } from "../../components/footer/Footer.js";
export default function shop() {
  return (
    <div>
      <Header />
      {/* <Body />
      <Ourteam /> */}
      {/* <Shoptitle /> */}
      <Shopcontent />
      <Footer />
    </div>
  );
}
