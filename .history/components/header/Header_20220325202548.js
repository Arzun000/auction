import React from "react";
import { Headerone } from "./Headerone";
import { Headertwo } from "./Headertwo";
import { Headerthree } from "./Headerthree";
import { Testpage } from "../Testpage.js";

// export default function index() {
//   return (
//     <div>
//       <Headerone />
//       <Headertwo />
//       <Headerthree />
//     </div>
//   );
// }
// import React from 'react'

export const Header = () => {
  return (
    <div>
      {" "}
      {/* <Testpage /> */}
      <Headerone />
      <Headertwo />
      <Headerthree />
    </div>
  );
};
