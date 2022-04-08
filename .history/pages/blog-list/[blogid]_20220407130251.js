import React from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import blogpostsData from "../../data/blogpost.json";
import { Header } from "../../components/header/Header.js";

import { Blogrightnav } from "../../components/blogs/Blogrightnav.js";
import { Footer } from "../../components/footer/Footer.js";

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  console.log("params:", params);
  return {
    props: {
      blogPost: blogpostsData.find((blogPost) => {
        return blogPost.id.toString() === params.blogid;
      }),
    },
    // tabprop: { productItemLists: productItemListsData }, // will be passed to the page component as props
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { blogid: "1" } },
      { params: { blogid: "2" } },
      { params: { blogid: "3" } },
    ],
    fallback: false,
  };
}

function blogDetail(props) {
  const router = useRouter();
  console.log("blogid", props);
  return (
    <div>
      <Header />
      <div className="shop-container h-[140px] ml-[20px] xl:mx-[5%] rounded-xl shadow-sm">
        <div className="shop-text ml-[10px]">
          <Link href="#">
            <a>Home</a>
          </Link>
          / <Link href="#">Blog list</Link>/{" "}
          <Link href="#">{props.blogPost.title}</Link>
        </div>
        <div className="shop-text-main ">Blogs</div>
      </div>
      <div className="blog-content xl:mx-[150px]">
        <div className="grid grid-flow-row-dense mt-[30px]  grid-cols-3 gap-4">
          <div className=" blog-articles mt-[10px] col-span-2"></div>
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
      Hello
      {props.blogPost.author} {/* <Footer /> */}
    </div>
  );
}

export default blogDetail;
