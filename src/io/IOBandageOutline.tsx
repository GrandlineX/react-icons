import React from "react";

export default function IOBandageOutline(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <rect
        width="560.87"
        height="176.25"
        x="-24.43"
        y="167.88"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="88.12"
        ry="88.12"
        transform="rotate(-45 256 256.002)"
      ></rect>
      <rect
        width="176"
        height="196"
        x="169.41"
        y="156.59"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="32"
        ry="32"
        transform="rotate(45 257.409 254.582)"
      ></rect>
      <circle cx="256" cy="208" r="16"></circle>
      <circle cx="304" cy="256" r="16"></circle>
      <circle cx="208" cy="256" r="16"></circle>
      <circle cx="256" cy="304" r="16"></circle>
    </svg>
  );
}


