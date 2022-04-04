import { useRouter } from "next/router";
import Link from "next/link";

const ItemDetail = () => {
  const router = useRouter();

  return <div>Item Detail Page {router.query.id}</div>;
};

export default ItemDetail;
