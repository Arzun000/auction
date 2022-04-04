import { useRouter } from "next/dist/client/router";
import Link from "next/dist/client/link";
import productItemListsData from "../../data/shopitem.json";

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  console.log("params:", params);
  return {
    props: {
      productItemList: productItemListsData.find((productItemList) => {
        return productItemList.id.toString() === params.itemid;
      }),
    }, // will be passed to the page component as props
  };
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { itemid: "1" } },
      { params: { itemid: "2" } },
      { params: { itemid: "3" } },
      { params: { itemid: "4" } },
      { params: { itemid: "5" } },
      { params: { itemid: "6" } },
      { params: { itemid: "7" } },
      { params: { itemid: "8" } },
      { params: { itemid: "9" } },
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
      <h1>Curent Bid: {props.productItemList.currentBid}</h1>
    </>
  );
};
export default ItemDetail;
