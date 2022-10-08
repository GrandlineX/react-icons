import React from "react";

export default function IOToggleOutline(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <circle
        cx="368"
        cy="256"
        r="128"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
      ></circle>
      <rect
        width="480"
        height="256"
        x="16"
        y="128"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="128"
        ry="128"
      ></rect>
    </svg>
  );
}


