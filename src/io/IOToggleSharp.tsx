import React from "react";

export default function IOToggleSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M368 112H144a144 144 0 000 288h224a144 144 0 000-288zm0 230a86 86 0 1186-86 85.88 85.88 0 01-86 86z"></path>
    </svg>
  );
}


