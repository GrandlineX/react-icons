import React from "react";

export default function IOListSharp(props:{size?:number; width?:number;height?:number}) {
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
        strokeLinejoin="round"
        strokeWidth="48"
        d="M144 144L464 144"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M144 256L464 256"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M144 368L464 368"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M64 128H96V160H64z"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M64 240H96V272H64z"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M64 352H96V384H64z"
      ></path>
    </svg>
  );
}


