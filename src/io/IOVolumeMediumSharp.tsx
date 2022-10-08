import React from "react";

export default function IOVolumeMediumSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M157.65 176.1L64 176.1 64 335.9 157.65 335.9 288 440 288 72 157.65 176.1z"></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M352 320c9.74-19.41 16-40.81 16-64 0-23.51-6-44.4-16-64M400 368c19.48-34 32-64 32-112s-12-77.7-32-112"
      ></path>
    </svg>
  );
}


