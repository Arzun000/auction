//import Testcomp from "../Test1/Testcomp";
import productItemListsData from "../../../../data/shopitem.json";
import Latestauctions from "./Latestauctions.js";

export async function getStaticProps(context) {
  return {
    props: { productItemLists: productItemListsData },
  };
}

export default function Recentauctions(props) {
  console.log("latest", props);
  return (
    <>
      <div>
        ff
        <Latestauctions />
      </div>
      {/* {props.productItemLists.map((productItemList) => {
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
      })} */}
    </>
  );
}
