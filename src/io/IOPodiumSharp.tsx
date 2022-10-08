import React from "react";

export default function IOPodiumSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M160 32H352V480H160z"></path>
      <path d="M384 192H496V480H384z"></path>
      <path d="M16 128H128V480H16z"></path>
    </svg>
  );
}


