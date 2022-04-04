import React from "react";

import { Header } from "../../components/header/Header.js";
import { Formtitle } from "../../components/sign-in/Formtitle.js";
import { Loginregisterform } from "../../components/sign-in/Loginregisterform.js";
import { Ourteam } from "../../components/aboutus/Ourteam.js";
// import { Shopcontent } from "../../components/shop/Shopcontent.js";
import { Footer } from "../../components/footer/Footer.js";

export default function signin() {
  return (
    <div>
      {/* <Header /> */}
      <Formtitle />
      <Loginregisterform />
      {/* <Footer /> */}
    </div>
  );
}
