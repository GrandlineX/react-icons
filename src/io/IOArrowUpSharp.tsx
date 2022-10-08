import React from "react";

export default function IOArrowUpSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="48"
        d="M112 244L256 100 400 244"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="48"
        d="M256 120L256 412"
      ></path>
    </svg>
  );
}


