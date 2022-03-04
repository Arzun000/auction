import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import { Canvas } from "../components/Canvas";
import { Test } from "../components/test";
import { Canvasmid } from "../components/Canvasmid";
import { Canvaslow } from "../components/Canvaslow";
import { Canvasbottom } from "../components/Canvasbottom";
//import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Canvas />
      <Canvasmid />
      <Canvaslow />
      <Canvasbottom />
    </div>
  );
}
