import React from "react";

export default function IOWatchSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <rect width="240" height="240" x="136" y="136" rx="8" ry="8"></rect>
      <path d="M384 96h-48V16H176v80h-48a32 32 0 00-32 32v256a32 32 0 0032 32h48v80h160v-80h48a32 32 0 0032-32V128a32 32 0 00-32-32zm8 272a24 24 0 01-24 24H144a24 24 0 01-24-24V144a24 24 0 0124-24h224a24 24 0 0124 24z"></path>
    </svg>
  );
}


