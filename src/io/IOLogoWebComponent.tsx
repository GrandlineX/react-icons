import React from "react";

export default function IOLogoWebComponent(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path fill="none" d="M179.9 388L179.9 388 103.74 256 179.9 388z"></path>
      <path
        fill="none"
        d="M179.9 388L332.11 388 408.26 256 332.11 124 179.9 124 103.74 256 179.9 388z"
      ></path>
      <path fill="none" d="M103.74 256L179.9 124 179.9 124 103.74 256z"></path>
      <path d="M496 256L376 48 239.74 48 195.9 124 332.11 124 408.26 256 332.11 388 195.9 388 239.74 464 376 464 496 256z"></path>
      <path d="M179.9 388L103.74 256 179.9 124 179.9 124 223.74 48 136 48 16 256 136 464 223.74 464 179.9 388 179.9 388z"></path>
    </svg>
  );
}


