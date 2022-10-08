import React from "react";

export default function IOFlashOffSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path
        d="M240.44 0.03H271.55V511.97999999999996H240.44z"
        transform="rotate(-45 256 256.002)"
      ></path>
      <path d="M80 304L224 304 192 496 300.18 366.18 151.82 217.82 80 304z"></path>
      <path d="M432 208L288 208 320 16 211.82 145.82 360.18 294.18 432 208z"></path>
    </svg>
  );
}


