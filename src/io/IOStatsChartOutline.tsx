import React from "react";

export default function IOStatsChartOutline(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <rect
        width="48"
        height="160"
        x="64"
        y="320"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="8"
        ry="8"
      ></rect>
      <rect
        width="48"
        height="256"
        x="288"
        y="224"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="8"
        ry="8"
      ></rect>
      <rect
        width="48"
        height="368"
        x="400"
        y="112"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="8"
        ry="8"
      ></rect>
      <rect
        width="48"
        height="448"
        x="176"
        y="32"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="8"
        ry="8"
      ></rect>
    </svg>
  );
}


