import { useRouter } from "next/dist/client/router";
import Link from "next/dist/client/link";
import productItemListsData from "../../data/shopitem.json";
export function getStaticProps(staticProps) {
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

const ItemDetail = (props) => {
  const router = useRouter();
  console.log(router);
  console.log("Props:", props);
  return (
    <>
      {" "}
      <div>Hello {router.query.itemid}</div>
      <h1>{props.productItemList.name}</h1>
      <h1>Curent Bid: {props.productItemList.bid}</h1>
    </>
  );
};
export default ItemDetail;
