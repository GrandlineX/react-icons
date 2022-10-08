import React from "react";

export default function IOSunnySharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M234 26H278V118H234z"></path>
      <path d="M234 394H278V486H234z"></path>
      <path
        d="M340.11 103.89H432.11V147.89H340.11z"
        transform="rotate(-45 386.105 125.89)"
      ></path>
      <path
        d="M79.89 364.11H171.89V408.11H79.89z"
        transform="rotate(-45 125.886 386.096)"
      ></path>
      <path d="M394 234H486V278H394z"></path>
      <path d="M26 234H118V278H26z"></path>
      <path
        d="M364.11 340.11H408.11V432.11H364.11z"
        transform="rotate(-45 386.111 386.108)"
      ></path>
      <path
        d="M103.89 79.89H147.89V171.89H103.89z"
        transform="rotate(-45 125.888 125.896)"
      ></path>
      <path d="M256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z"></path>
    </svg>
  );
}


