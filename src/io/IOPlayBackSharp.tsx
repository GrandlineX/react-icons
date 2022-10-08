import React from "react";

export default function IOPlayBackSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M496 400L256 256 496 112 496 400z"></path>
      <path d="M256 400L16 256 256 112 256 400z"></path>
    </svg>
  );
}


