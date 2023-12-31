import React from "react";

export default function IOEllipsisVertical(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <circle cx="256" cy="256" r="48"></circle>
      <circle cx="256" cy="416" r="48"></circle>
      <circle cx="256" cy="96" r="48"></circle>
    </svg>
  );
}


