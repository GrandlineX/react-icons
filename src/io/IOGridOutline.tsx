import React from "react";

export default function IOGridOutline(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <rect
        width="176"
        height="176"
        x="48"
        y="48"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="20"
        ry="20"
      ></rect>
      <rect
        width="176"
        height="176"
        x="288"
        y="48"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="20"
        ry="20"
      ></rect>
      <rect
        width="176"
        height="176"
        x="48"
        y="288"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="20"
        ry="20"
      ></rect>
      <rect
        width="176"
        height="176"
        x="288"
        y="288"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="20"
        ry="20"
      ></rect>
    </svg>
  );
}


