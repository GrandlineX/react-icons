import React from "react";

export default function IOVolumeOffSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M237.65 176.1L144 176.1 144 335.9 237.65 335.9 368 440 368 72 237.65 176.1z"></path>
    </svg>
  );
}


