import React from "react";

export default function IOSchoolSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M256 370.43L96 279 96 377.42 256 466.3 416 377.42 416 279 256 370.43z"></path>
      <path d="M512.25 192L256 45.57 -0.25 192 256 338.43 464 219.57 464 384 512 384 512 192.14 512.25 192z"></path>
    </svg>
  );
}


