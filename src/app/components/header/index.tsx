import React from 'react'
import './styles.css';

export default function Header() {
  return (
    <div className="container">
    <div className="grid grid-cols-2 gap-4">
      <div className="grid grid-cols-1 p-4">SR</div>
      <div className="grid grid-cols-6">
        <a className="header-links grid-cols-2">@Me</a>
        <a className="header-links grid-cols-2">Experience</a>
        <a className="header-links grid-cols-2">Accolades</a>
        <a className="header-links grid-cols-2">Skills</a>
        <a className="header-links grid-cols-2">Education</a>
        <a className="header-links grid-cols-2">Also Me</a>
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