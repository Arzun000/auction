import React from "react";

export const News = () => {
  return (
    <>
      <div className="news-container bg-gray-100">
        <div className="section-title-list mt-[50px] ">
          <div className="section-title w-[400px] h-[80px] pt-4 border-b-2 border-stone-300 m-auto text-center ">
            <h2 className="text-secttl font-['MontserratBold']">LATEST NEWS</h2>
          </div>
          <div className="section-subtitle bg-gray-100 w-[50px] m-auto mt-[-15px]">
            <img
              className="mx-auto"
              src="/static/icons/hammermain.png"
              height={25}
              width={25}
            ></img>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-2">
          <container-news1>
            <div className="col-span-1 h-auto relative bg-white w-auto">
              <div className="h-[175px] inline-flex">
                <div className="image w-[180px] m-auto pl-2">
                  <img
                    src="/images/oldcars001.jpg"
                    className="object-fill h-full w-full"
                  ></img>
                </div>

                <div className="image-caption w-auto m-auto">
                  <div className="image-caption-one text-l ml-[20px] text-center font-bold">
                    <a href="#" class="no-underline hover:text-[#ea7f23]">
                      A bird in the hand is worth two in the bush
                    </a>
                  </div>
                  <div className="image-caption-two ml-[20px] text-center pb-2">
                    The allusion may be to falconry...
                  </div>
                </div>
              </div>
            </div>
          </container-news1>
          <container-news2>
            <div className="col-span-1 h-auto relative bg-white w-auto">
              <div className="h-[175px] inline-flex">
                <div className="image w-[180px] m-auto pl-2">
                  <img
                    src="/images/ferrari1.jpg"
                    className="object-fill h-full w-full"
                  ></img>
                </div>

                <div className="image-caption w-auto m-auto">
                  <div className="image-caption-one text-l ml-[20px] text-center font-bold">
                    <a href="#" class="no-underline hover:text-[#ea7f23]">
                      A miss is as good as a mile
                    </a>
                  </div>
                  <div className="image-caption-two ml-[20px] text-center pb-2">
                    A narrow miss is as bad as a wide miss - they are both
                    misses.
                  </div>
                </div>
              </div>
            </div>
          </container-news2>
          <container-news3>
            <div className="col-span-1 h-auto relative bg-white w-auto">
              <div className="h-[175px] inline-flex">
                <div className="image w-[180px] m-auto pl-2">
                  <img
                    src="/images/oldcars004.jpg"
                    className="object-fill h-full w-full"
                  ></img>
                </div>

                <div className="image-caption w-auto m-auto">
                  <div className="image-caption-one text-l ml-[20px] text-center font-bold">
                    <a href="#" class="no-underline hover:text-[#ea7f23]">
                      A stitch in time saves nine
                    </a>
                  </div>
                  <div className="image-caption-two ml-[20px] text-center pb-2">
                    A 'stitch in time' is a timely effort that will prevent more
                    work later.
                  </div>
                </div>
              </div>
            </div>
          </container-news3>
        </div>
      </div>
    </>
  );
};
