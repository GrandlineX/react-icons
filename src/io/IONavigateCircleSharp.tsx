import React from "react";

export default function IONavigateCircleSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M256 48A208.23 208.23 0 0048 256c0 114.68 93.31 208 208 208a208.23 208.23 0 00208-208c0-114.69-93.31-208-208-208zm-8 361V264H103l259-114.11z"></path>
    </svg>
  );
}


