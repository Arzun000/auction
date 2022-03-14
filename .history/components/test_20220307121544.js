import React from "react";

export const Test = () => {
  return (
    <>
      <canvasmid>
        <div className="mid-canvas ">
          <div className="mid-section mt-[100px] ">
            <div className="section-title-list ">
              <div className="section-title w-[350px] h-[80px] pt-4 border-b-2 border-stone-300 m-auto text-center text-3xl font-bold ">
                <h2>LATEST AUCTIONS</h2>
              </div>
              <div className="section-subtitle bg-white w-[50px] m-auto mt-[-15px]">
                <img
                  src="/static/icons/hammer.png"
                  height={35}
                  width={35}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </canvasmid>
      {/* list of latest auction items */}
      <canvasmidcards>
        <div className="grid grid-cols-1 md:flex-row md:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* <item1> */}
          <div>
            <div>
              01
              <div>
                <img src="/images/automotive_slider.jpg"></img>
              </div>
              <div className="canv-container absolute mt[-20px] flex ">1pp</div>
            </div>
            <div>1</div>
          </div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          {/* </item1> */}
        </div>
      </canvasmidcards>
    </>
  );
};
