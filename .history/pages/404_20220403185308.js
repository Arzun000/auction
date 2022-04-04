import Link from "next/link";
import Image from "next/image";
import { Header } from "../components/header/Header.js";
import { Footer } from "../components/footer/Footer.js";
export default function FourOhFour() {
  return (
    <>
      <Header />
      <div className="w-full text-center py-[20px] font-[700] bg-purple-200">
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </div>
      <div className="w-[50px] object-center">
        <Image
          className=" overflow-hidden"
          src="/404/error.png"
          width={900}
          height={700}
          layout="fixed"
        />
      </div>
      <Footer />
    </>
  );
}
