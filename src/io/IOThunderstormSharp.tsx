import React from "react";

export default function IOThunderstormSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M405.84 136.9a151.25 151.25 0 00-47.6-81.9 153 153 0 00-241.81 51.86C60.5 110.16 16 156.65 16 213.33 16 272.15 63.91 320 122.8 320h72.31L176 416h48v80l112-144h-43.51l8-32h103.84a91.56 91.56 0 001.51-183.1z"></path>
      <path
        d="M65.17 360H150.84V392H65.17z"
        transform="rotate(-63.43 108.02 376.016)"
      ></path>
      <path
        d="M94.11 432H161.89V464H94.11z"
        transform="rotate(-63.43 128.023 448.026)"
      ></path>
      <path
        d="M345.17 360H430.84000000000003V392H345.17z"
        transform="rotate(-63.43 388.036 376.012)"
      ></path>
      <path
        d="M374.11 432H441.89V464H374.11z"
        transform="rotate(-63.43 408.042 448.014)"
      ></path>
    </svg>
  );
}


