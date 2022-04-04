import { useRouter } from "next/dist/client/router";

const ItemDetail = () => {
  const router = useRouter();
  console.log(router);
  return <div>Hello</div>;
};
export default ItemDetail;
