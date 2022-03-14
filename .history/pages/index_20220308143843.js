import Head from "next/head";

import { Header } from "../components/Header";
import { Canvas } from "../components/Canvas";

import { Canvasmid } from "../components/Canvasmid";
import { Canvaslow } from "../components/Canvaslow";
import { Canvasbottomone } from "../components/Canvasbottomone";
import { Canvasbottomtwo } from "../components/Canvasbottomtwo";
import { Contactus } from "../components/Contactus";
import { Testpage } from "../components/Testpage";
import { News } from "../components/News";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
<link rel="stylesheet" href="carousel.css" />;
export default function Home() {
  return (
    
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <script src="https:code.jquery.com/jquery-3.4.1min.js"><script>
        </Head>

        <Header />
        <Canvas />
        <Canvasmid />
        <Canvaslow />
        <Canvasbottomone />
        <Canvasbottomtwo />

        <Contactus />
        <News />
        <Brands />
        <Footer />
        {/* <News /> */}
        {/*  */}
      </div>
    
  );
}
