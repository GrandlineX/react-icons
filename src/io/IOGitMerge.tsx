import React from "react";

export default function IOGitMerge(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M385 224a64 64 0 00-55.33 31.89c-42.23-1.21-85.19-12.72-116.21-31.33-32.2-19.32-49.71-44-52.15-73.35a64 64 0 10-64.31.18v209.22a64 64 0 1064 0v-94.46c44.76 34 107.28 52.38 168.56 53.76A64 64 0 10385 224zM129 64a32 32 0 11-32 32 32 32 0 0132-32zm0 384a32 32 0 1132-32 32 32 0 01-32 32zm256-128a32 32 0 1132-32 32 32 0 01-32 32z"></path>
    </svg>
  );
}


