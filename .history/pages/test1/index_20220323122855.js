import Testcomp from "../../components/Test1/Testcomp";
import productItemListsData from "../../data/shopitem.json";

export async function getStaticProps(context) {
  return {
    props: productItemListsData,
  };
}

export default function test1(props) {
  console.log(props);
  return (
    <>
      <div>ff</div>
      {props.productItemListsData.map((productItemList) => {
        return (
          <Testcomp
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
