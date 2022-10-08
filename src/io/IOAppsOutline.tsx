import React from "react";

export default function IOAppsOutline(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <rect
        width="80"
        height="80"
        x="64"
        y="64"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="40"
        ry="40"
      ></rect>
      <rect
        width="80"
        height="80"
        x="216"
        y="64"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="40"
        ry="40"
      ></rect>
      <rect
        width="80"
        height="80"
        x="368"
        y="64"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="40"
        ry="40"
      ></rect>
      <rect
        width="80"
        height="80"
        x="64"
        y="216"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="40"
        ry="40"
      ></rect>
      <rect
        width="80"
        height="80"
        x="216"
        y="216"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="40"
        ry="40"
      ></rect>
      <rect
        width="80"
        height="80"
        x="368"
        y="216"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="40"
        ry="40"
      ></rect>
      <rect
        width="80"
        height="80"
        x="64"
        y="368"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="40"
        ry="40"
      ></rect>
      <rect
        width="80"
        height="80"
        x="216"
        y="368"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="40"
        ry="40"
      ></rect>
      <rect
        width="80"
        height="80"
        x="368"
        y="368"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="40"
        ry="40"
      ></rect>
    </svg>
  );
}


