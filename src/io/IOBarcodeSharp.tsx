import React from "react";

export default function IOBarcodeSharp(props:{size?:number; width?:number;height?:number}) {
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
        strokeLinejoin="round"
        strokeWidth="32"
        d="M400 400.33L448 400 448 112 400 112.33"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M112 112L64 112.33 64 400.33 112 400"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M384 192L384 320"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M320 160L320 352"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M256 176L256 336"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M192 160L192 352"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M128 192L128 320"
      ></path>
    </svg>
  );
}


