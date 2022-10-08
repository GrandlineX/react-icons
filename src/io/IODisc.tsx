import React from "react";

export default function IODisc(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M256 176a80 80 0 1080 80 80.09 80.09 0 00-80-80zm0 112a32 32 0 1132-32 32 32 0 01-32 32z"></path>
      <path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM256 368a112 112 0 11112-112 112.12 112.12 0 01-112 112z"></path>
    </svg>
  );
}


