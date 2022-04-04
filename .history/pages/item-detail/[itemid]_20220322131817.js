import { useRouter } from "next/dist/client/router";
import Link from "next/dist/client/link";

const ItemDetail = () => {
  const router = useRouter();
  console.log(router);
  return <div>Hello</div>;
};
export default ItemDetail;
