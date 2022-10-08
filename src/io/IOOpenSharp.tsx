import React from "react";

export default function IOOpenSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M201.37 288L377.37 112 48 112 48 464 400 464 400 134.63 224 310.63 201.37 288z"></path>
      <path d="M320 48L320 80 409.37 80 377.37 112 400 134.63 432 102.63 432 192 464 192 464 48 320 48z"></path>
    </svg>
  );
}


