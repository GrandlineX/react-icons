import React from "react";

export default function IODocumentsSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M307.94 248L216 154.52V242a6 6 0 006 6z"></path>
      <path d="M184 268V144H60a12 12 0 00-12 12v328a12 12 0 0012 12h248a12 12 0 0012-12V280H196a12 12 0 01-12-12zM366 120h85.94L360 26.52V114a6 6 0 006 6z"></path>
      <path d="M340 152a12 12 0 01-12-12V16H172a12 12 0 00-12 12v84h42.12A40.81 40.81 0 01231 124.14l109.16 111a41.11 41.11 0 0111.83 29V400H452a12 12 0 0012-12V152z"></path>
    </svg>
  );
}


