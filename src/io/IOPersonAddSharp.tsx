import React from "react";

export default function IOPersonAddSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M106 304L106 250 160 250 160 214 106 214 106 160 70 160 70 214 16 214 16 250 70 250 70 304 106 304z"></path>
      <circle cx="288" cy="144" r="112"></circle>
      <path d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z"></path>
    </svg>
  );
}


