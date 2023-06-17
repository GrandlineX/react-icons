import React from "react";

export default function IOBowlingBallOutline(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle
        cx="256"
        cy="256"
        r="208"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
      ></circle>
      <circle cx="288" cy="200" r="24"></circle>
      <circle cx="296" cy="128" r="24"></circle>
      <circle cx="360" cy="168" r="24"></circle>
    </svg>
  );
}


