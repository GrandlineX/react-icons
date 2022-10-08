import React from "react";

export default function IOFilterSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M16 120H496V168H16z"></path>
      <path d="M96 232H416V280H96z"></path>
      <path d="M192 344H320V392H192z"></path>
    </svg>
  );
}


