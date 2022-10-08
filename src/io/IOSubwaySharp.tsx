import React from "react";

export default function IOSubwaySharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M392 16H120a24 24 0 00-24 24v336a24 24 0 0024 24h272a24 24 0 0024-24V40a24 24 0 00-24-24zM208 64h95.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 96h-95.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01208 64zm-28.53 287.82a32 32 0 1128.35-28.35 32 32 0 01-28.35 28.35zm160 0a32 32 0 1128.35-28.35 32 32 0 01-28.35 28.35zM384 144v64H128v-64z"></path>
      <path d="M298 416L329.37 448 182.63 448 214 416 170 416 89.43 496 134.63 496 150.63 480 361.37 480 377.37 496 422.67 496 343 416 298 416z"></path>
    </svg>
  );
}


