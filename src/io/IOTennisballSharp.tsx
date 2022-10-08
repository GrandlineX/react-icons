import React from "react";

export default function IOTennisballSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M246.4 480a181 181 0 003.22-22.86c.35-4.61.53-9.31.53-14 0-100-81.34-181.32-181.32-181.32A181.72 181.72 0 0032 265.61 224.2 224.2 0 00246.4 480z"></path>
      <path d="M284.63 227.37A222.73 222.73 0 01219 68.83a227.09 227.09 0 012.62-34.42A224.41 224.41 0 0034.41 221.58 227.09 227.09 0 0168.83 219a222.73 222.73 0 01158.54 65.67A222.73 222.73 0 01293 443.17c0 5.74-.22 11.54-.65 17.23s-1.11 11.51-2 17.2a224.42 224.42 0 00187.24-187.18 227.09 227.09 0 01-34.42 2.58 222.73 222.73 0 01-158.54-65.63z"></path>
      <path d="M443.17 250.15a181.72 181.72 0 0036.83-3.76A224.2 224.2 0 00265.61 32a181.72 181.72 0 00-3.76 36.83c0 99.98 81.34 181.32 181.32 181.32z"></path>
    </svg>
  );
}

