import React from "react";
import { Headerone } from "../../components/Headerone.js";
import { Headertwo } from "../../components/Headertwo";
import { Headerthree } from "../../components/Headerthree";
import { Body } from "./Body.js";
import { Ourteam } from "./Ourteam.js";
import { Content } from "./Content.js";
import { Footer } from "../../components/Footer";
export default function aboutus() {
  return (
    <div>
      <Headerone />
      <Headertwo />
      <Headerthree />
      <Body />
      <Ourteam />
      <Content />
      <Footer />
    </div>
  );
}
