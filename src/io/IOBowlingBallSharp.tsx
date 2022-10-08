import React from "react";

export default function IOBowlingBallSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM286 230a28 28 0 1128-28 28 28 0 01-28 28zm8-76a28 28 0 1128-28 28 28 0 01-28 28zm68 44a28 28 0 1128-28 28 28 0 01-28 28z"></path>
    </svg>
  );
}


