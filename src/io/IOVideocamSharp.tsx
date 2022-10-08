import React from "react";

export default function IOVideocamSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M336 208v-80a16 16 0 00-16-16H32a16 16 0 00-16 16v256a16 16 0 0016 16h288a16 16 0 0016-16v-80l160 96V112z"></path>
    </svg>
  );
}


