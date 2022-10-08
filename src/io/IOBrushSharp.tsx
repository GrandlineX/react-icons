import React from "react";

export default function IOBrushSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M480 96l-64-64-244 260 64 64zM142 320c-36.52 0-66 30.63-66 68.57 0 25.43-31 45.72-44 45.72C52.24 462.17 86.78 480 120 480c48.62 0 88-40.91 88-91.43 0-37.94-29.48-68.57-66-68.57z"></path>
    </svg>
  );
}


