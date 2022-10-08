import React from "react";

export default function IOShapesSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M363.27 336H4.73L184 16z"></path>
      <path d="M336 160a160.54 160.54 0 00-32.55 3.36l87.75 157L417.81 368H183.36C203.8 432.85 264.49 480 336 480c88.22 0 160-71.78 160-160s-71.78-160-160-160z"></path>
    </svg>
  );
}


