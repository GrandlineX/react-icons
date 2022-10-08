import React from "react";

export default function IOPricetagsSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M288 16L0 304l176 176 288-288V16zm80 128a32 32 0 1132-32 32 32 0 01-32 32z"></path>
      <path d="M480 64L480 208 216.9 471.1 242 496 512 224 512 64 480 64z"></path>
    </svg>
  );
}


