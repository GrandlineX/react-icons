import React from "react";

export default function IOTabletPortraitSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M430 0H82a18 18 0 00-18 18v476a18 18 0 0018 18h348a18 18 0 0018-18V18a18 18 0 00-18-18zM100 448V64h312v384z"></path>
    </svg>
  );
}


