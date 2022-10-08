import React from "react";

export default function IOMusicalNoteSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M381.55 32.05c-18.13 4.28-126.57 31.07-156 38.19a2 2 0 00-1.55 1.94V353.3a2 2 0 01-1.32 1.88L182 369.88c-29.82 10.66-54 18.94-54 59.06 0 32.47 23.53 47.18 37.95 50a81.77 81.77 0 0015 1.08c8.89 0 31-3.59 47.52-14.24C256 448 256 448 256 415.93V169.16a2 2 0 011.49-1.94l125-33a2 2 0 001.49-1.94V34a2 2 0 00-2.43-1.95z"></path>
    </svg>
  );
}


