import React from "react";

export default function IOPlaySkipForwardSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M368.53 64L368.53 227.52 96 64 96 448 368.53 284.48 368.53 448 416 448 416 64 368.53 64z"></path>
    </svg>
  );
}


