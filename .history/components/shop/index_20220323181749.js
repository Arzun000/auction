//import Testcomp from "../Test1/Testcomp";
import productItemListsData from "../../data/shopitem.json";
import Shopcontent from "./Shopcontent";

export async function getStaticProps(context) {
  return {
    props: { productItemLists: productItemListsData },
  };
}

export default function shop(props) {
  //console.log(props);
  return (
    <>
      <div>ff</div>
      {props.productItemLists.map((productItemList) => {
        return (
          <Shopcontent
            key={productItemList.id}
            name={productItemList.name}
            // href="/item-detail/blackcar"
            //href={"/item-detail/${productItemList.id}"}
            href={{
              pathname: "/item-detail/[slug]",
              query: { slug: productItemList.id },
            }}
            imgurl={productItemList.imgUrl}
          />
        );
      })}
    </>
  );
}
