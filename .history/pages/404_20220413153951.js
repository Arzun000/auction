import Link from "next/link";
import Image from "next/image";
import { Header } from "../components/header/Header.js";
import { Footer } from "../components/footer/Footer.js";
export default function FourOhFour() {
  return (
    <>
      <Header />
      <div className="max-w-[1400px] m-auto bg-slate-400">
        {/* <div className="w-full text-center py-[20px] font-[700] ">
          <Link href="/">
            <a>Go back home</a>
          </Link>
        </div> */}
        <div className=" m-auto ">
          <Image
            src="/404/error.png"
            width={900}
            height={600}
            className="m-[50px]"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
