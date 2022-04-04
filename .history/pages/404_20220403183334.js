import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <Image
        className=" overflow-hidden"
        src="/404/error.png"
        height={550}
        width={500}
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
