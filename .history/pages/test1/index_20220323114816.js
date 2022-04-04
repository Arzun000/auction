import Testcomp from "../../components/Test1/Testcomp";
import productItemLists from "../../data/shopitem.json";

export default function test1() {
  return (
    <>
      <div>ff</div>
      {productItemLists.map((productItemList) => {
        return (
          <Testcomp
            name="black car"
            href="/item-detail/blackcar"
            imgurl="/images/car1.jpg"
          />
        );
      })}
    </>
  );
}
