import React from "react";

export default function IOCashSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M48 368H464V400H48z"></path>
      <path d="M80 416H432V448H80z"></path>
      <path d="M480 176a96.11 96.11 0 01-96-96V64H128v16a96.11 96.11 0 01-96 96H16v64h16a96.11 96.11 0 0196 96v16h256v-16a96.11 96.11 0 0196-96h16v-64zM256 304a96 96 0 1196-96 96.11 96.11 0 01-96 96z"></path>
      <path d="M96 80V64H16v80h16a64.07 64.07 0 0064-64zM32 272H16v80h80v-16a64.07 64.07 0 00-64-64zM480 144h16V64h-80v16a64.07 64.07 0 0064 64zM416 336v16h80v-80h-16a64.07 64.07 0 00-64 64z"></path>
      <circle cx="256" cy="208" r="64"></circle>
    </svg>
  );
}


