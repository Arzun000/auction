import React from "react";
import { Blogrightnav } from "../../components/blogs/Blogrightnav.js";
export const Blogbody = () => {
  return (
    <div>
      <div className="grid grid-flow-row-dense mt-[30px] ml-[20px] xl:ml-[220px] grid-cols-3 gap-4">
        <div className=" blog-articles mt-[10px] col-span-2">
          <div className="blog-article1 shadow-box-sh rounded-lg w-full gap-4">
            <div className="blog-img object-cover">
              <img src="/blogs/blogpost1.jpg" className=""></img>
            </div>
            <div className="blog-detail mt-[20px] ml-[30px] inline-flex">
              <div className="blog-auth  inline-flex">
                <button className="blog-detail-icon ">
                  <img src="/static/icons/person.png"></img>
                </button>
                <div className="blog-navlinks ">
                  <a href="#" class="  hover:text-[#ea7f23]">
                    Jack Collins
                  </a>
                </div>
              </div>
              <div className="blog-tag ml-[20px] inline-flex">
                <button className="blog-detail-icon">
                  <img src="/static/icons/tag.png"></img>
                </button>
                <div className="blog-navlinks">
                  <a href="#" class="  hover:text-[#ea7f23]">
                    Mobile Phones
                  </a>
                </div>
              </div>
              <div className="blog-date ml-[20px] inline-flex">
                <button className="blog-detail-icon">
                  <img src="/static/icons/calendar.png"></img>
                </button>
                <div className="blog-navlinks">
                  <a href="#" class="  hover:text-[#ea7f23]">
                    August 7, 2021
                  </a>
                </div>
              </div>
            </div>
            <div className="blog-title">
              <a href="#" class="  hover:text-[#ea7f23]">
                A Phone Keeps Your Friends Away
              </a>
            </div>
            <div className="blog-preview">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution.{" "}
            </div>
            <div className="search-btn ">
              <button className="blog-read-btn">READ MORE</button>
            </div>
          </div>
          <div className="blog-article2 mt-[20px] shadow-box-sh rounded-lg w-full gap-4">
            <div className="blog-img">
              <img src="/blogs/blogpost2.jpg"></img>
            </div>
            <div className="blog-detail mt-[20px] ml-[30px] inline-flex">
              <div className="blog-auth  inline-flex">
                <button className="blog-detail-icon ">
                  <img src="/static/icons/person.png"></img>
                </button>
                <div className="blog-navlinks ">
                  <a href="#" class="  hover:text-[#ea7f23]">
                    Aurora Nee
                  </a>
                </div>
              </div>
              <div className="blog-tag ml-[20px] inline-flex">
                <button className="blog-detail-icon">
                  <img src="/static/icons/tag.png"></img>
                </button>
                <div className="blog-navlinks">
                  <a href="#" class="  hover:text-[#ea7f23]">
                    Laptop
                  </a>
                </div>
              </div>
              <div className="blog-date ml-[20px] inline-flex">
                <button className="blog-detail-icon">
                  <img src="/static/icons/calendar.png"></img>
                </button>
                <div className="blog-navlinks">
                  <a href="#" class="  hover:text-[#ea7f23]">
                    August 7, 2021
                  </a>
                </div>
              </div>
            </div>

            <div className="blog-title">
              <a href="#" class="  hover:text-[#ea7f23]">
                Chromebook Tab 10 review
              </a>
            </div>

            <div className="blog-preview">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution.{" "}
            </div>
            <div className="search-btn ">
              <button className="blog-read-btn">READ MORE</button>
            </div>
          </div>
          <div className="blog-article3 mt-[20px] shadow-box-sh rounded-lg w-full gap-4">
            <div className="blog-img">
              <img src="/blogs/blogpost3.jpg"></img>
            </div>
            <div className="blog-detail mt-[20px] ml-[30px] inline-flex">
              <div className="blog-auth  inline-flex">
                <button className="blog-detail-icon ">
                  <img src="/static/icons/person.png"></img>
                </button>
                <div className="blog-navlinks ">
                  <a href="#" class="  hover:text-[#ea7f23]">
                    Aurora Nee
                  </a>
                </div>
              </div>
              <div className="blog-tag ml-[20px] inline-flex">
                <button className="blog-detail-icon">
                  <img src="/static/icons/tag.png"></img>
                </button>
                <div className="blog-navlinks">
                  <a href="#" class="  hover:text-[#ea7f23]">
                    Laptop
                  </a>
                </div>
              </div>
              <div className="blog-date ml-[20px] inline-flex">
                <button className="blog-detail-icon">
                  <img src="/static/icons/calendar.png"></img>
                </button>
                <div className="blog-navlinks">
                  <a href="#" class="  hover:text-[#ea7f23]">
                    August 7, 2021
                  </a>
                </div>
              </div>
            </div>
            <div className="blog-title">
              <a href="#" class="  hover:text-[#ea7f23]">
                Alexa isn't just an assistant
              </a>
            </div>
            <div className="blog-preview">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution.{" "}
            </div>
            <div className="search-btn ">
              <button className="blog-read-btn">READ MORE</button>
            </div>
          </div>
        </div>
        <div className=" ml-[30px]">
          <Blogrightnav />
        </div>
      </div>
      <div className="pagination inline-flex ml-[30px]">
        <button>
          <div className="page-no ">1</div>
        </button>
        <button>
          <div className="page-no">2</div>
        </button>
        <button>
          <div className="page-no">3</div>
        </button>
        <button>
          <div className="page-no">
            <img
              src="/static/icons/arrow.png"
              height={25}
              width={25}
              className="ml-[10px]"
            ></img>
          </div>
        </button>
      </div>
    </div>
  );
};
