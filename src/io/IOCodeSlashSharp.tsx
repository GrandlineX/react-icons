import React from "react";

export default function IOCodeSlashSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M161.98 397.63L0 256 161.98 114.37 189.63 145.98 64 256 189.63 366.02 161.98 397.63z"></path>
      <path d="M350.02 397.63L322.37 366.02 448 256 322.37 145.98 350.02 114.37 512 256 350.02 397.63z"></path>
      <path d="M222.15 442L182 430.08 289.85 70 330 81.92 222.15 442z"></path>
    </svg>
  );
}


