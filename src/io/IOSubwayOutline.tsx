import React from "react";

export default function IOSubwayOutline(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <rect
        width="288"
        height="352"
        x="112"
        y="32"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="48"
        ry="48"
      ></rect>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M208 80L304 80"
      ></path>
      <rect
        width="288"
        height="96"
        x="112"
        y="128"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="32"
        ry="32"
      ></rect>
      <circle
        cx="176"
        cy="320"
        r="16"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
      ></circle>
      <circle
        cx="336"
        cy="320"
        r="16"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
      ></circle>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M144 464L368 464"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M336 432L384 480"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M176 432L128 480"
      ></path>
    </svg>
  );
}


