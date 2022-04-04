import React from "react";
import Styles from "./latestauction.module.css";

export const Latestauctions = () => {
  return (
    <>
      <div className="section-title-list mt-[100px] ">
        <div className="section-title w-[350px] h-[80px] pt-4 border-b-2 border-stone-300 m-auto text-center ">
          <h2 className="text-secttl">LATEST AUCTIONS</h2>
        </div>
        <div className="section-subtitle bg-white w-[50px] m-auto pb-[20px] mt-[-15px]">
          <img
            className="mx-auto"
            src="/static/icons/hammermain.png"
            height={25}
            width={25}
          ></img>
        </div>
      </div>

      {/* list of latest auction items */}

      <div className="flex flex-wrap">
        <div className="xl:w-1/4 overflow-hidden md:w-1/2 p-4">
          <Link href="#">
            {/* page/item-detail/[itemid.js] ma lanxa */}
            <a>
              <div className=" overflow-hidden h-[300px]">
                <div
                  className={Styles.articleimgholder}
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <Image src="" width={350} height={350} />
                </div>
                <div className="bg-white absolute ">
                  <div className="cardtext w-[420px] md:w-[235px] lg:w-[336px] shadow-xl absolute text-center h-[80px] pt-[10px]">
                    <a href="#" className="no-underline">
                      <b>jj</b>
                    </a>
                    <subtext>
                      <p>
                        Price: <b>ddd</b>
                      </p>
                    </subtext>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/721x401"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
              SUBTITLE
            </h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Colosseum Roma
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/722x402"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
              SUBTITLE
            </h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Great Pyramid of Giza
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/723x403"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
              SUBTITLE
            </h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              San Francisco
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/723x403"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
              SUBTITLE
            </h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              San Francisco
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
