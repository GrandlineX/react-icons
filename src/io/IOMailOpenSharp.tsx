import React from "react";

export default function IOMailOpenSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M471.05 168.36L263.24 65.69a16.37 16.37 0 00-14.48 0L41 168.36a16 16 0 00-9 14.31V432a16.09 16.09 0 0016.19 16h415.62A16.09 16.09 0 00480 432V182.67a16 16 0 00-8.95-14.31zM256 97.89l173 85.44-175.7 86.78-173-85.44z"></path>
    </svg>
  );
}


