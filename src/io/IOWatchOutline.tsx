import React from "react";

export default function IOWatchOutline(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <rect
        width="288"
        height="288"
        x="112"
        y="112"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="64"
        ry="64"
      ></rect>
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M176 112V40a8 8 0 018-8h144a8 8 0 018 8v72M336 400v72a8 8 0 01-8 8H184a8 8 0 01-8-8v-72"
      ></path>
    </svg>
  );
}


