import React from "react";

export default function IOStatsChartSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M128 496H48V304h80zM352 496h-80V208h80zM464 496h-80V96h80zM240 496h-80V16h80z"></path>
    </svg>
  );
}


