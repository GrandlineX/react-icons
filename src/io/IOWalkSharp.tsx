import React from "react";

export default function IOWalkSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M315.09 481.38l-56.95-115.12-45-57.56a73.11 73.11 0 01-10.16-37.17V142h15.73A40.36 40.36 0 01259 182.32v162.52"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M128.18 291.5L128.18 216.73 193.13 151.63"
      ></path>
      <path d="M376.35 295.73L292.4 239.35 292.4 194.67 397.08 267.62 376.35 295.73z"></path>
      <path d="M175.13 498.58L153.7 471.67 234.03 390.13 249.56 422.2 175.13 498.58z"></path>
      <circle
        cx="259.02"
        cy="67.21"
        r="37.38"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="16"
      ></circle>
    </svg>
  );
}


