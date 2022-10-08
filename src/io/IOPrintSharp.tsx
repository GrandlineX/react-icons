import React from "react";

export default function IOPrintSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M400 96V56a8 8 0 00-8-8H120a8 8 0 00-8 8v40"></path>
      <rect
        width="208"
        height="160"
        x="152"
        y="264"
        fill="none"
        rx="4"
        ry="4"
      ></rect>
      <rect
        width="208"
        height="160"
        x="152"
        y="264"
        fill="none"
        rx="4"
        ry="4"
      ></rect>
      <path d="M408 112H104a56 56 0 00-56 56v208a8 8 0 008 8h56v72a8 8 0 008 8h272a8 8 0 008-8v-72h56a8 8 0 008-8V168a56 56 0 00-56-56zm-48 308a4 4 0 01-4 4H156a4 4 0 01-4-4V268a4 4 0 014-4h200a4 4 0 014 4zm34-212.08a24 24 0 1122-22 24 24 0 01-22 22z"></path>
    </svg>
  );
}


