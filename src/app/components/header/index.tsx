/** @jsxImportSource @emotion/react */
"use client"
import {links} from './styles.js';
export default function Header() {
  return (
    <div className="container">
    <div className="grid grid-cols-2 gap-4">
      <div className="grid grid-cols-1 p-4"></div>
      <div className="grid grid-cols-5">
        <a css={links} className="grid-cols-2">@Me</a>
        <a css={links} className="grid-cols-2">Experience</a>
        <a css={links} className="grid-cols-2">TechStacks</a>
        {/* <a css={links} className="grid-cols-2">Academics</a> */}
        <a css={links} className="grid-cols-2">BitsNBites</a>
      </div>
    </div>
  </div>
   
  )
}

 // <div className="flex flex-row justify-between flex-wrap w-screen">
    //   <div className=" flex flex-col">
    // {/* <p>p</p> */}
    //   </div>
    //   <div className="flex flex-col">
    //     <div className="flex flex-row items-stretch gap-5">
    //     <a className="header-links">@Me</a>
    //   <a className="header-links">Experience</a>
    //   <a className="header-links">Accolades</a>
    //   <a className="header-links">Skills</a>
    //   <a className="header-links">Education</a>
    //   <a className="header-links">Also Me</a>
    //     </div>
    //   </div>
    //  </div>
    // <></>