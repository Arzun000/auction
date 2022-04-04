import Link from "next/link";
import Image from "next/image";
export default function FourOhFour() {
  return (
    <>
      <div className="w-90%">
        <Image
          className=" overflow-hidden"
          src="/404/error.png"
          layout="fill"
          //layout="fill"
          // width="100%"
          // height="100%"
          // layout="responsive"
          // objectFit="contain"
        />
      </div>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
}
