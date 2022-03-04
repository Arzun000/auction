import React from "react";

export const Test = () => {
  return (
    <>
      {" "}
      <tests>
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-grey-800 rounded-full border-[2px] border-grey-400
           hover:bg-yellow-500 hover:text-white font-bold focus:z-10 focus:ring-2 focus:ring-blue-700
            focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
             dark:hover:text-white dark:hover:bg-gray-700"
        >
          VIEW MORE
          <div className="h-[175px]  inline-flex">
            <img
              src="/images/oldcars001.jpg"
              className="object-fill h-full w-full"
            ></img>
            <div className="image-caption absolute text-center col-end mt-[30px] ml-[275px]">
              <div className="image-caption-one absolute text-xl font-bold">
                <p>VolksWagan Bus</p>
              </div>
              <div className="image-caption-two absolute pb-2">
                Auction Ended
              </div>
            </div>
            <div className="image-icons h-[40px] w-[150px] bg-green-400 relative inline-flex ">
              <div className="bid-now-icon rounded-full hover:bg-orange-500 mt-[2px]">
                <button className="inline-flex m-auto focus:outline-none text-base md:mt-2">
                  <img
                    src="/static/icons/hammer.png"
                    height={30}
                    width={30}
                  ></img>
                </button>
              </div>
              <div className="heart-icon rounded-full hover:bg-orange-500">
                <button className="inline-flex items-center focus:outline-none text-base md:mt-2">
                  <img
                    src="/static/icons/heart.png"
                    height={30}
                    width={30}
                  ></img>
                </button>
              </div>
              <div className="search-icon rounded-full  hover:bg-orange-500">
                <button className="inline-flex items-center focus:outline-none text-base md:mt-2">
                  <img
                    src="/static/icons/search.png"
                    height={30}
                    width={30}
                  ></img>
                </button>
              </div>
            </div>
          </div>
        </button>
      </tests>
    </>
  );
};
