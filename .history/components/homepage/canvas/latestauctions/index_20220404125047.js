//import Testcomp from "../Test1/Testcomp";
import productItemListsData from "../../../data/shopitem.json";
import Shopcontent from "./Shopcontent";

export async function getStaticProps(context) {
  return {
    props: { productItemLists: productItemListsData },
  };
}

export default function Recentauctions(props) {
  console.log("latest", props);
  return (
    <>
      <div>ff</div>
      {props.productItemLists.map((productItemList) => {
        return (
          <Latestauctions
            key={productItemList.id}
            name={productItemList.name}
            // href={{
            //   pathname: "/item-detail/[slug]",
            //   query: { slug: productItemList.id },
            // }}
            imgurl={productItemList.imgUrl}
          />
        );
      })}
    </>
  );
}
