import React from "react";

export default function IOFileTrayFullSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M128 128H384V166H128z"></path>
      <path d="M112 192H400V230H112z"></path>
      <path d="M448 64H64L32 256v192h448V256zm-12 192H320a64 64 0 01-128 0H76l22-150h316z"></path>
    </svg>
  );
}


