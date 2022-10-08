import React from "react";

export default function IOFlashlightSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M330 16L287.32 58.7 453.3 224.68 496 182 330 16z"></path>
      <ellipse
        cx="224.68"
        cy="287.3"
        fill="none"
        rx="20.03"
        ry="19.96"
      ></ellipse>
      <path d="M429.21 243.85L268 82.59 249.65 168 16 402l94 94 234.23-233.8zm-189 56.07a20 20 0 110-25.25 20 20 0 01-.02 25.25z"></path>
    </svg>
  );
}


