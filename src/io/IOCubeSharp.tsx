import React from "react";

export default function IOCubeSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M48 170L48 366.92 240 480 240 284 48 170z"></path>
      <path d="M272 480l192-113.08V170L272 284zm176-122.36z"></path>
      <path d="M448 144L256 32 64 144 256 256 448 144z"></path>
    </svg>
  );
}


