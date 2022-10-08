import React from "react";

export default function IOGlassesSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M496 176H16v64h21.24l12.44 112h171.87L240 241.32V240a16 16 0 0132 0v1.32L290.45 352h171.87l12.44-112H496z"></path>
    </svg>
  );
}


