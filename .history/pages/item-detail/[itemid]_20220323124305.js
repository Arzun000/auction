import { useRouter } from "next/dist/client/router";
import Link from "next/dist/client/link";

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const ItemDetail = () => {
  const router = useRouter();
  console.log(router);
  return <div>Hello</div>;
};
export default ItemDetail;
