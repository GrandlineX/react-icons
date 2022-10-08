import React from "react";

export default function IOCaretBackCircleOutline(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M273.77 169.57l-89.09 74.13a16 16 0 000 24.6l89.09 74.13A16 16 0 00300 330.14V181.86a16 16 0 00-26.23-12.29z"></path>
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      ></path>
    </svg>
  );
}


