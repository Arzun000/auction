import React from "react";

import { Header } from "../../components/header/Header.js";
import { Contactus } from "../../components/contact-us/Contactus.js";

import { Ourteam } from "../../components/aboutus/Ourteam.js";
// import { Shopcontent } from "../../components/shop/Shopcontent.js";
import { Footer } from "../../components/footer/Footer.js";

export default function contact() {
  return (
    <div>
      <Header />
      <Contactus />
      <Ourteam />
      <Footer />
    </div>
  );
}
