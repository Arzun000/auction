import Link from "next/link";
import Image from "next/image";
export default function FourOhFour() {
  return (
    <>
      <div className="w-full text-center py-[20px] font-[700] bg-purple-200">
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </div>
      <div className="w-[50px]">
        <Image
          className=" overflow-hidden"
          src="/404/error.png"
          width={1400}
          height={700}
          layout="fixed"
          //layout="fill"
          // width="100%"
          // height="100%"
          // layout="responsive"
          // objectFit="contain"
        />
      </div>
    </>
  );
}