import React from "react";

export default function IOGridSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M240 240H32V32h208zM480 240H272V32h208zM240 480H32V272h208zM480 480H272V272h208z"></path>
    </svg>
  );
}


