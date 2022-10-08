import React from "react";

export default function IOAlbumsSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M128 64H384V96H128z"></path>
      <path d="M96 112H416V144H96z"></path>
      <path d="M464 448H48V160h416z"></path>
    </svg>
  );
}


