import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import { Canvas } from "../components/Canvas";
import { Test } from "../components/test";
import { Canvasmid } from "../components/Canvasmid";
import { Canvaslow } from "../components/Canvaslow";
import { Canvasbottomone } from "../components/Canvasbottomone";
import { Canvasbottomtwo } from "../components/Canvasbottomtwo";
import { Contactus } from "../components/Contactus";
//import { Contactus0 } from "../components/News";
import { News } from "../components/News";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
//import { Test } from "../components/test";
//import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <Test /> */}
      </Head>
      {<Test />}

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
