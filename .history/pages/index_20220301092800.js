import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
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
      <h3 className="text-green-800">Hello</h3>
    </div>
  );
}
