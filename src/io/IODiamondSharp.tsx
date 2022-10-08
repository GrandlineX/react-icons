import React from "react";

export default function IODiamondSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M396.31 32L264 32 348.19 144.26 396.31 32z"></path>
      <path d="M115.69 32L163.81 144.26 248 32 115.69 32z"></path>
      <path d="M256 74.67L192 160 320 160 256 74.67z"></path>
      <path d="M422.95 51.06L376.26 160 488 160 422.95 51.06z"></path>
      <path d="M89.05 51.06L23 160 135.74 160 89.05 51.06z"></path>
      <path d="M146.68 192L24 192 246.8 480 247.33 480 146.68 192z"></path>
      <path d="M365.32 192L264.67 480 265.2 480 488 192 365.32 192z"></path>
      <path d="M329.39 192L182.61 192 256 400 329.39 192z"></path>
    </svg>
  );
}


