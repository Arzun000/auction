import Link from "next/link";
import Image from "next/image";
import { Header } from "../components/header/Header.js";
import { Footer } from "../components/footer/Footer.js";
export default function FourOhFour() {
  return (
    <>
      <Header />
      <div className="max-w-[1400px] m-auto">
        {/* <div className="w-full text-center py-[20px] font-[700] ">
          <Link href="/">
            <a>Go back home</a>
          </Link>
        </div> */}
        <div className=" my-[2%] mx-[10%]">
          <Image src="/404/error.png" width={900} height={600} />
        </div>
      </div>
      <Footer />
    </>
  );
}
