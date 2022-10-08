import React from "react";

export default function IOCalculatorSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M416 48a16 16 0 00-16-16H112a16 16 0 00-16 16v416a16 16 0 0016 16h288a16 16 0 0016-16zM192 432h-48v-48h48zm0-80h-48v-48h48zm0-80h-48v-48h48zm88 160h-48v-48h48zm0-80h-48v-48h48zm0-80h-48v-48h48zm88 160h-48V304h48zm0-160h-48v-48h48zm0-96H144V80h224z"></path>
    </svg>
  );
}


