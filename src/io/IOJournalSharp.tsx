import React from "react";

export default function IOJournalSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M290 32H104a24 24 0 00-24 24v400a24 24 0 0024 24h186zM408 32h-58v448h58a24 24 0 0024-24V56a24 24 0 00-24-24z"></path>
    </svg>
  );
}


