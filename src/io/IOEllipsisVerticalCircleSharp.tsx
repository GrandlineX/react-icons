import React from "react";

export default function IOEllipsisVerticalCircleSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-234-90a26 26 0 1126 26 26 26 0 01-26-26zm0 90a26 26 0 1126 26 26 26 0 01-26-26zm0 90a26 26 0 1126 26 26 26 0 01-26-26z"></path>
    </svg>
  );
}


