import React from "react";
import productItemListsData from "../../data/shopitem.json";

const Tabs = ({ color }, props) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "itemdetail-tabs " +
                  (openTab === 1
                    ? "text-[#ea7f23] bg-" + color + "-600"
                    : "text-white bg-[#ea7f23]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                DESCRIPTION
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "itemdetail-tabs " +
                  (openTab === 2
                    ? "text-[#ea7f23] bg-" + color + "-600"
                    : "text-white bg-[#ea7f23]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                ADDITIONAL INFORMATION
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "itemdetail-tabs " +
                  (openTab === 3
                    ? "text-[#ea7f23] bg-" + color + "-600"
                    : "text-white bg-[#ea7f23]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                AUCTION HISTORY
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "itemdetail-tabs " +
                  (openTab === 4
                    ? "text-[#ea7f23] bg-" + color + "-600"
                    : "text-white bg-[#ea7f23]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                VENDOR INFO
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "itemdetail-tabs " +
                  (openTab === 5
                    ? "text-[#ea7f23] bg-" + color + "-600"
                    : "text-white bg-[#ea7f23]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                MORE FROM VENDOR
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Going forward knowledge is power or we need to button up our
                    approach old boys club. Please use “solutionise” instead of
                    solution ideas! 🙂 draw a line in the sand, for take five,
                    punch the tree, and come back in here with a clear head. Out
                    of scope data-point work flows , nor critical mass, and time
                    to open the kimono yet move the needle. You better eat a
                    reality sandwich before you walk back in that boardroom fire
                    up your browser, so come up with something buzzworthy, for
                    it’s about managing expectations yet baseline into the
                    weeds. Gain traction product management breakout fastworks
                    we just need to put these last issues to bed, or table the
                    discussion.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <div className="seller-detail inline-flex">
                    <img className="tab-icon" src="/static/icons/cart.png" />
                    Store Name:{props.price}
                  </div>
                  <div className="">
                    <img
                      className="tab-icon"
                      src="/static/icons/seller.png"
                    ></img>
                  </div>
                  <div className="">
                    <img
                      className="tab-icon"
                      src="/static/icons/address.png"
                    ></img>
                  </div>
                  <div className="">
                    <img
                      className="tab-icon"
                      src="/static/icons/star.png"
                    ></img>
                  </div>
                  <p>
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender(props) {
  console.log("tab ko props", props);
  props: {
    productItemLists: productItemListsData;
  }
  return (
    <>
      <Tabs color="white" />
    </>
  );
}
