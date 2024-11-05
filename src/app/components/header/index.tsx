/** @jsxImportSource @emotion/react */
"use client"
import {links,header} from './styles.js';
export default function Header({
  onClickScroll=()=>{}
}:{
  onClickScroll: (key:number)=>void;
}) {

  return (
    <div className="p-2 px-10" css={header}>
    <div className="grid grid-cols-2 gap-2 justify-center items-center text-center">
      <div className="grid grid-cols-1 p-4"></div>
      <div className="grid grid-cols-11 text-center justify-center items-center">
        <a css={links} className="col-span-1" onClick={()=>onClickScroll(1)}>@Me</a>
        <a css={links} className="col-span-3" onClick={()=>onClickScroll(2)}>Experience</a>
        <a css={links} className="col-span-1" onClick={()=>onClickScroll(3)}>Tech</a>
        <a css={links} className="col-span-3" onClick={()=>onClickScroll(4)}>BitsNBites</a>
        <a css={links} className="grid-cols-3" onClick={()=>onClickScroll(5)}>Academics</a>
      </div>
    </div>
  </div>
  )
}
