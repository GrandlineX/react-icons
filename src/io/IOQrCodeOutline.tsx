import React from "react";

export default function IOQrCodeOutline(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <rect width="80" height="80" x="336" y="336" rx="8" ry="8"></rect>
      <rect width="64" height="64" x="272" y="272" rx="8" ry="8"></rect>
      <rect width="64" height="64" x="416" y="416" rx="8" ry="8"></rect>
      <rect width="48" height="48" x="432" y="272" rx="8" ry="8"></rect>
      <rect width="48" height="48" x="272" y="432" rx="8" ry="8"></rect>
      <rect width="80" height="80" x="336" y="96" rx="8" ry="8"></rect>
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
        rx="16"
        ry="16"
      ></rect>
      <rect width="80" height="80" x="96" y="96" rx="8" ry="8"></rect>
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
        rx="16"
        ry="16"
      ></rect>
      <rect width="80" height="80" x="96" y="336" rx="8" ry="8"></rect>
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
        rx="16"
        ry="16"
      ></rect>
    </svg>
  );
}


