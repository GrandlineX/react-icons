import React from "react";

export default function IOMedkit(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        d="M336 64H176a16 16 0 00-16 16v16h192V80a16 16 0 00-16-16z"
      ></path>
      <path d="M432 96h-48V80a48.05 48.05 0 00-48-48H176a48.05 48.05 0 00-48 48v16H80a64.07 64.07 0 00-64 64v256a64 64 0 0064 64h352a64 64 0 0064-64V160a64.07 64.07 0 00-64-64zm-96 208h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32zm16-208H160V80a16 16 0 0116-16h160a16 16 0 0116 16z"></path>
    </svg>
  );
}


