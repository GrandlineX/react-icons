import React from "react";

export default function IOBedSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M432 224V96a16 16 0 00-16-16H96a16 16 0 00-16 16v128a48 48 0 00-48 48v160h36v-32h376v32h36V272a48 48 0 00-48-48zm-192 0H120v-32a16 16 0 0116-16h88a16 16 0 0116 16zm32-32a16 16 0 0116-16h88a16 16 0 0116 16v32H272z"></path>
    </svg>
  );
}


