import React from "react";

export default function IOContrastOutline(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <circle
        cx="256"
        cy="256"
        r="208"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
      ></circle>
      <path d="M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48z"></path>
    </svg>
  );
}


