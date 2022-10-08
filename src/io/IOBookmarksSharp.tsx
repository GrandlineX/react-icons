import React from "react";

export default function IOBookmarksSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M112 0L112 48 416 48 416 416 464 448 464 0 112 0z"></path>
      <path d="M48 80L48 512 216 388 384 512 384 80 48 80z"></path>
    </svg>
  );
}


