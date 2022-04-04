import { useRouter } from "next/dist/client/router";
import Link from "next/dist/client/link";
import productItemListsData from "../../data/shopitem.json";
export async function getStaticProps(context) {
  return {
    props: {
      productItemList: productItemListsData.find((productItemList) => {
        return productItemList.id === 0;
      }),
    }, // will be passed to the page component as props
  };
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { itemid: "0" } },
      { params: { itemid: "1" } },
      { params: { itemid: "300" } },
    ],
    fallback: false,
  };
}

const ItemDetail = () => {
  const router = useRouter();
  console.log(router);
  return <div>Hello {props.itemid}</div>;
};
export default ItemDetail;
