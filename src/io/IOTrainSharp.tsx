import React from "react";

export default function IOTrainSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M384 32h-64a16 16 0 00-16-16h-96a16 16 0 00-16 16h-64c-16 0-32 16-32 32v288c0 23.92 160 80 160 80s160-56.74 160-80V64c0-16-16-32-32-32zM256 352a48 48 0 1148-48 48 48 0 01-48 48zm112-152a8 8 0 01-8 8H152a8 8 0 01-8-8v-80a8 8 0 018-8h208a8 8 0 018 8z"></path>
      <path d="M314 432L329.32 448 182.58 448 198 432 166 419 89.38 496 134.58 496 150.58 480 361.32 480 377.32 496 422.62 496 346.26 418.25 314 432z"></path>
    </svg>
  );
}


