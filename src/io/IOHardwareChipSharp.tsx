import React from "react";

export default function IOHardwareChipSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M160 160H352V352H160z"></path>
      <path d="M480 198v-44h-32V88a24 24 0 00-24-24h-66V32h-44v32h-36V32h-44v32h-36V32h-44v32H88a24 24 0 00-24 24v66H32v44h32v36H32v44h32v36H32v44h32v66a24 24 0 0024 24h66v32h44v-32h36v32h44v-32h36v32h44v-32h66a24 24 0 0024-24v-66h32v-44h-32v-36h32v-44h-32v-36zm-352-70h256v256H128z"></path>
    </svg>
  );
}


