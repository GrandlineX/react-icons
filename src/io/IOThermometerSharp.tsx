import React from "react";

export default function IOThermometerSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M320 291.24V80a64 64 0 10-128 0v211.24A113.39 113.39 0 00144 384a112 112 0 00224 0 113.39 113.39 0 00-48-92.76zM256 432a48 48 0 01-16-93.26V96h32v242.74A48 48 0 01256 432z"></path>
    </svg>
  );
}


