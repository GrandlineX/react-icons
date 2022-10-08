import React from "react";

export default function IOKeypadSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <rect width="96" height="96" x="80" y="16" rx="8" ry="8"></rect>
      <rect width="96" height="96" x="208" y="16" rx="8" ry="8"></rect>
      <rect width="96" height="96" x="336" y="16" rx="8" ry="8"></rect>
      <rect width="96" height="96" x="80" y="144" rx="8" ry="8"></rect>
      <rect width="96" height="96" x="208" y="144" rx="8" ry="8"></rect>
      <rect width="96" height="96" x="336" y="144" rx="8" ry="8"></rect>
      <rect width="96" height="96" x="80" y="272" rx="8" ry="8"></rect>
      <rect width="96" height="96" x="208" y="272" rx="8" ry="8"></rect>
      <rect width="96" height="96" x="208" y="400" rx="8" ry="8"></rect>
      <rect width="96" height="96" x="336" y="272" rx="8" ry="8"></rect>
    </svg>
  );
}


