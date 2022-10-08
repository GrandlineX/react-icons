import React from "react";

export default function IOSadOutline(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <circle cx="184" cy="232" r="24"></circle>
      <path d="M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 01-7.87 10.17H168.15a8 8 0 01-7.82-10.17C172.32 317.53 210.53 288 256 288z"></path>
      <circle cx="328" cy="232" r="24"></circle>
      <circle
        cx="256"
        cy="256"
        r="208"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
      ></circle>
    </svg>
  );
}


