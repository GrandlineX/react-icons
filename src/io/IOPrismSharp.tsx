import React from "react";

export default function IOPrismSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256 16L16 352l240 144 240-144zm-20 96.82v324.53L73.73 340z"></path>
    </svg>
  );
}


