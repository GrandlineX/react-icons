import React from "react";

export default function IOCalculatorOutline(props:{size?:number; width?:number;height?:number}) {
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
        height="416"
        x="112"
        y="48"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="32"
        ry="32"
      ></rect>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M160.01 112H352V176H160.01z"
      ></path>
      <circle cx="168" cy="248" r="24"></circle>
      <circle cx="256" cy="248" r="24"></circle>
      <circle cx="344" cy="248" r="24"></circle>
      <circle cx="168" cy="328" r="24"></circle>
      <circle cx="256" cy="328" r="24"></circle>
      <circle cx="168" cy="408" r="24"></circle>
      <circle cx="256" cy="408" r="24"></circle>
      <rect width="48" height="128" x="320" y="304" rx="24" ry="24"></rect>
    </svg>
  );
}


