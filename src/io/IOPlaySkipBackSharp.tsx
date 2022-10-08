import React from "react";

export default function IOPlaySkipBackSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M143.47 64L143.47 227.52 416 64 416 448 143.47 284.48 143.47 448 96 448 96 64 143.47 64z"></path>
    </svg>
  );
}


