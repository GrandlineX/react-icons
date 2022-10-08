import React from "react";

export default function IODesktopSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M480 48H32a16 16 0 00-16 16v320a16 16 0 0016 16h168v32h-72v32h256v-32h-72v-32h168a16 16 0 0016-16V64a16 16 0 00-16-16zm-20 36v216H52V84zM240.13 354.08a16 16 0 1113.79 13.79 16 16 0 01-13.79-13.79z"></path>
    </svg>
  );
}


