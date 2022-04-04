import Link from "next/link";
import Image from "next/image";
export default function FourOhFour() {
  return (
    <>
      <Image
        className=" overflow-hidden"
        src="/404/error.png"
        objectFit="cover"
        //layout="fill"
        // width="100%"
        // height="100%"
        // layout="responsive"
        // objectFit="contain"
      />
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
}
