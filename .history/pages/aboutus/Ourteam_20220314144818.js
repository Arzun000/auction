import React from "react";
import styles from "./Ourteam.module.css";

export const Ourteam = () => {
  return (
    <div className="team-container bg-gray-100">
      <div className="section-title-list mt-[30px] ">
        <div className="section-title w-[400px] h-[80px] pt-4 border-b-2 font-bold border-stone-300 m-auto text-center text-3xl ">
          <h2>OUR TEAM</h2>
        </div>
        <div className="section-subtitle bg-gray-100 w-[50px] m-auto mt-[-15px]">
          <img
            className="mx-auto"
            src="/static/icons/hammer.png"
            height={35}
            width={35}
          ></img>
        </div>
      </div>
      <div className="team-members pl-[20px] grid grid-cols-8 gap-1">
        {/* <div class="relative w-atuo h-auto bg-fuchsia-500">
          <img
            class="rounded-full border border-gray-100 shadow-sm"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="user image"
          />
          <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
        </div> */}
        <div className="staff-one">
          <div className={styles.container}>
            <div className={styles.cardflip}>
              <div className=" bg-white absolute shadow-sh-search w-[200px] py-[10px] text-center  group-hover:block ">
                <div className="name-post p-1">
                  <p className="text-[20px]">Andrew Mosafat</p>
                  <p className="text-[12px] text-[#484848] font-[300]">
                    Web designer
                  </p>
                </div>
                <div className="socials inline-flex p-3">
                  <div className="fb">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2"
                        src="/aboutus/icons/facebook1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                  <div className="twitter">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2 "
                        src="/aboutus/icons/twitter1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                  <div className="ln">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2"
                        src="/aboutus/icons/linkedin1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img
                className="rounded-full border border-gray-100 shadow-sm"
                src="/aboutus/staffs/staff1.png"
              />
            </div>
          </div>
        </div>
        <div className="staff-two">
          <div className={styles.container}>
            <div className={styles.cardflip}>
              <div className=" bg-white absolute shadow-sh-search w-[200px] py-[10px] text-center  group-hover:block ">
                <div className="name-post p-1">
                  <p className="text-[20px]">Seryl McConnel</p>
                  <p className="text-[12px] text-[#484848] font-[300]">
                    Social Media Manager
                  </p>
                </div>
                <div className="socials inline-flex p-3">
                  <div className="fb">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2"
                        src="/aboutus/icons/facebook1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                  <div className="twitter">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2 "
                        src="/aboutus/icons/twitter1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                  <div className="ln">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2"
                        src="/aboutus/icons/linkedin1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img
                className="rounded-full border border-gray-100 shadow-sm"
                src="/aboutus/staffs/staff2.png"
              />
            </div>
          </div>
        </div>
        <div className="staff-three">
          <div className={styles.container}>
            <div className={styles.cardflip}>
              <div className=" bg-white absolute shadow-sh-search w-[200px] py-[10px] text-center  group-hover:block ">
                <div className="name-post p-1">
                  <p className="text-[20px]">Bethany Elliot</p>
                  <p className="text-[12px] text-[#484848] font-[300]">
                    Full Stack Developer
                  </p>
                </div>
                <div className="socials inline-flex p-3">
                  <div className="fb">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2"
                        src="/aboutus/icons/facebook1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                  <div className="twitter">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2 "
                        src="/aboutus/icons/twitter1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                  <div className="ln">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2"
                        src="/aboutus/icons/linkedin1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img
                className="rounded-full border border-gray-100 shadow-sm"
                src="/aboutus/staffs/staff1.png"
              />
            </div>
          </div>
        </div>
        <div className="staff-four">
          <div className={styles.container}>
            <div className={styles.cardflip}>
              <div className=" bg-white absolute shadow-sh-search w-[200px] py-[10px] text-center  group-hover:block ">
                <div className="name-post p-1">
                  <p className="text-[20px]">Christine Chubbuck</p>
                  <p className="text-[12px] text-[#484848] font-[300]">
                    Web Developer
                  </p>
                </div>
                <div className="socials inline-flex p-3">
                  <div className="fb">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2"
                        src="/aboutus/icons/facebook1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                  <div className="twitter">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2 "
                        src="/aboutus/icons/twitter1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                  <div className="ln">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2"
                        src="/aboutus/icons/linkedin1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img
                className="rounded-full border border-gray-100 shadow-sm"
                src="/aboutus/staffs/staff4.jpg"
              />
            </div>
          </div>
        </div>
        <div className="staff-five">
          <div className={styles.container}>
            <div className={styles.cardflip}>
              <div className=" bg-white absolute shadow-sh-search w-[200px] py-[10px] text-center  group-hover:block ">
                <div className="name-post p-1">
                  <p className="text-[20px]">John Francis</p>
                  <p className="text-[12px] text-[#484848] font-[300]">
                    Web designer
                  </p>
                </div>
                <div className="socials inline-flex p-3">
                  <div className="fb">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2"
                        src="/aboutus/icons/facebook1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                  <div className="twitter">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2 "
                        src="/aboutus/icons/twitter1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                  <div className="ln">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2"
                        src="/aboutus/icons/linkedin1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img
                className="rounded-full border border-gray-100 shadow-sm"
                src="/aboutus/staffs/staff2.png"
              />
            </div>
          </div>
        </div>
        <div className="staff-six">
          <div className={styles.container}>
            <div className={styles.cardflip}>
              <div className=" bg-white absolute shadow-sh-search w-[200px] py-[10px] text-center  group-hover:block ">
                <div className="name-post p-1">
                  <p className="text-[20px]">Alex Sand</p>
                  <p className="text-[12px] text-[#484848] font-[300]">
                    Web developer
                  </p>
                </div>
                <div className="socials inline-flex p-3">
                  <div className="fb">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2"
                        src="/aboutus/icons/facebook1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                  <div className="twitter">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2 "
                        src="/aboutus/icons/twitter1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                  <div className="ln">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2"
                        src="/aboutus/icons/linkedin1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img
                className="rounded-full border border-gray-100 shadow-sm"
                src="/aboutus/staffs/staff4.jpg"
              />
            </div>
          </div>
        </div>
        <div className="staff-six">
          <div className={styles.container}>
            <div className={styles.cardflip}>
              <div className=" bg-white absolute shadow-sh-search w-[200px] py-[10px] text-center  group-hover:block ">
                <div className="name-post p-1">
                  <p className="text-[20px]">Mary Anne</p>
                  <p className="text-[12px] text-[#484848] font-[300]">
                    Web designer
                  </p>
                </div>
                <div className="socials inline-flex p-3">
                  <div className="fb">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2"
                        src="/aboutus/icons/facebook1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                  <div className="twitter">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2 "
                        src="/aboutus/icons/twitter1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                  <div className="ln">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2"
                        src="/aboutus/icons/linkedin1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img
                className="rounded-full border border-gray-100 shadow-sm"
                src="/aboutus/staffs/staff8.png"
              />
            </div>
          </div>
        </div>
        <div className="staff-seven">
          <div className={styles.container}>
            <div className={styles.cardflip}>
              <div className=" bg-white absolute shadow-sh-search w-[200px] py-[10px] text-center  group-hover:block ">
                <div className="name-post p-1">
                  <p className="text-[20px]">Audrey Steele</p>
                  <p className="text-[12px] text-[#484848] font-[300]">
                    Web designer
                  </p>
                </div>
                <div className="socials inline-flex p-3">
                  <div className="fb">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2"
                        src="/aboutus/icons/facebook1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                  <div className="twitter">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2 "
                        src="/aboutus/icons/twitter1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                  <div className="ln">
                    <a className="" href="#">
                      <img
                        className="mx-auto mr-2"
                        src="/aboutus/icons/linkedin1.png"
                        height={20}
                        width={20}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img
                className="rounded-full border border-gray-100 shadow-sm"
                src="/aboutus/staffs/staff6.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};