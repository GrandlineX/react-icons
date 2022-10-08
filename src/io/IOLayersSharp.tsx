import React from "react";

export default function IOLayersSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M480 150L256 48 32 150 256 254 480 150z"></path>
      <path d="M255.71 392.95L110.9 326.75 32 362 256 464 480 362 401.31 326.7 255.71 392.95z"></path>
      <path d="M480 256l-75.53-33.53L256.1 290.6l-148.77-68.17L32 256l224 102 224-102z"></path>
    </svg>
  );
}


