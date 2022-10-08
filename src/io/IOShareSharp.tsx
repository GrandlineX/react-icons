import React from "react";

export default function IOShareSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M272 176v161h-32V176H92a12 12 0 00-12 12v280a12 12 0 0012 12h328a12 12 0 0012-12V188a12 12 0 00-12-12z"></path>
      <path d="M272 92.63L336 156.63 358.63 134 256 31.37 153.37 134 176 156.63 240 92.63 240 176 272 176 272 92.63z"></path>
    </svg>
  );
}


