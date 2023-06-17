import React from "react";

export default function IOClipboard(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M368 48h-11.41a8 8 0 01-7.44-5.08A42.18 42.18 0 00309.87 16H202.13a42.18 42.18 0 00-39.28 26.92 8 8 0 01-7.44 5.08H144a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V112a64 64 0 00-64-64zm-48.13 64H192.13a16 16 0 010-32h127.74a16 16 0 010 32z"></path>
    </svg>
  );
}


