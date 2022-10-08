import React from "react";

export default function IOVideocamOffSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M232 -5.59H264V501.59000000000003H232z"
        transform="rotate(-45 248.002 247.994)"
      ></path>
      <path d="M32 112a16 16 0 00-16 16v256a16 16 0 0016 16h288a15.89 15.89 0 009.34-3l-285-285zM336 208v-80a16 16 0 00-16-16H179.63l245.44 245.44L496 400V112z"></path>
    </svg>
  );
}


