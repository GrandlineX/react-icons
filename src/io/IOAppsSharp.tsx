import React from "react";

export default function IOAppsSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <rect width="112" height="112" x="48" y="48" rx="8" ry="8"></rect>
      <rect width="112" height="112" x="200" y="48" rx="8" ry="8"></rect>
      <rect width="112" height="112" x="352" y="48" rx="8" ry="8"></rect>
      <rect width="112" height="112" x="48" y="200" rx="8" ry="8"></rect>
      <rect width="112" height="112" x="200" y="200" rx="8" ry="8"></rect>
      <rect width="112" height="112" x="352" y="200" rx="8" ry="8"></rect>
      <rect width="112" height="112" x="48" y="352" rx="8" ry="8"></rect>
      <rect width="112" height="112" x="200" y="352" rx="8" ry="8"></rect>
      <rect width="112" height="112" x="352" y="352" rx="8" ry="8"></rect>
    </svg>
  );
}


