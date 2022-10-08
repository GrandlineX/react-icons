import React from "react";

export default function IOBrowsersSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M32 64v384a16 16 0 0016 16h416a16 16 0 0016-16V64a16 16 0 00-16-16H48a16 16 0 00-16 16zm408 364H72a4 4 0 01-4-4V152a4 4 0 014-4h368a4 4 0 014 4v272a4 4 0 01-4 4z"></path>
    </svg>
  );
}


