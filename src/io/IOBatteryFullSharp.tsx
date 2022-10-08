import React from "react";

export default function IOBatteryFullSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M17 384h432V128H17zm32-224h368v192H49z"></path>
      <path d="M70.69 182.94H395.32V329.07H70.69z"></path>
      <path d="M465 202.67H497V309.34H465z"></path>
    </svg>
  );
}


