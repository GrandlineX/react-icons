import React from "react";

export default function IODocumentSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M240 216V32H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V224H248a8 8 0 01-8-8z"></path>
      <path d="M272 41.69V188a4 4 0 004 4h146.31a2 2 0 001.42-3.41L275.41 40.27a2 2 0 00-3.41 1.42z"></path>
    </svg>
  );
}


