import React from "react";

export default function IOHourglassSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M416 32H96v112l108 112L96 368v112h320V368L308 256l108-112zM272 224v112l91 96H148l92-96V224l-80-80h192z"></path>
    </svg>
  );
}


