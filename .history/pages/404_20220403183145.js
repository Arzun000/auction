import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <img src="404/error.png" />
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
}
