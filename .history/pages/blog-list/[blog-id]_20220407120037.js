import React from "react";
import Link from "next/link";
import { Header } from "../../components/header/Header.js";
import { Footer } from "../../components/footer/Footer.js";

function Hello() {
  return (
    <div>
      <Header />
      Hello
      <Footer />
    </div>
  );
}

export default Hello;
