import Link from "next/link";
import Image from "next/image";
import { Header } from "../components/header/Header.js";
import { Footer } from "../components/footer/Footer.js";
export default function FourOhFour() {
  return (
    <>
      <Header />
      <div className="max-w-[1400px] m-auto">
        <div className="w-full text-center py-[20px] font-[700] ">
          <Link href="/">
            <a>Go back home</a>
          </Link>
        </div>
        <div className=" mx-[15%] my-[20px]">
          <Image
            className=" overflow-hidden"
            src="/404/error.png"
            width={900}
            height={600}
            layout="fixed"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
