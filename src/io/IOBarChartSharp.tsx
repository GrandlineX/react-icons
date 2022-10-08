import React from "react";

export default function IOBarChartSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M496 496L16 496 16 16 48 16 48 464 496 464 496 496z"></path>
      <path d="M192 432H80V208h112zM336 432H224V160h112zM479.64 432h-112V96h112z"></path>
    </svg>
  );
}


