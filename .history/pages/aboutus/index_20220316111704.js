import React from "react";
// import { Headerone } from "../../components/Headerone.js";
// import { Headertwo } from "../../components/header/Headertwo";
// import { Headerthree } from "../../components/header/Headerthree";
import { Header } from "../../components/header/Header.js";
import { Body } from "../../components/aboutus/Body.js";
import { Ourteam } from "../../components/aboutus/Ourteam.js";
import { Content } from "../../components/aboutus/Content.js";
import { Footer } from "../../components/footer/Footer";
export default function aboutus() {
  return (
    <div>
      {/* <Headerone />
      <Headertwo />
      <Headerthree /> */}
      <Header />
      <Body />
      <Ourteam />
      <Content />
      <Footer />
    </div>
  );
}
