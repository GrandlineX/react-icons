import React from "react";

export default function IOCameraOutline(props:{size?:number; width?:number;height?:number}) {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z"
      ></path>
      <circle
        cx="256"
        cy="272"
        r="80"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
      ></circle>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M124 158L124 136 100 136 100 158"
      ></path>
    </svg>
  );
}


