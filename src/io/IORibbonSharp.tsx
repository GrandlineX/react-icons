import React from "react";

export default function IORibbonSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M256 336c-5.22 0-10.4-.24-15.51-.69a176.12 176.12 0 01-131.29-78.37L20 416h115l58 96 82.53-177.09A177.53 177.53 0 01256 336zM403 256.74a176.9 176.9 0 01-88.18 69.14L273.7 415.5 319 512l58-96h115z"></path>
      <circle cx="256.02" cy="160" r="48"></circle>
      <path d="M256 16c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144S335.4 16 256 16zm0 224a80 80 0 1180-80 80.09 80.09 0 01-80 80z"></path>
    </svg>
  );
}


