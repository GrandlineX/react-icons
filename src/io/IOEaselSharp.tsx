import React from "react";

export default function IOEaselSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M468 64H278V32h-44v32H44a12 12 0 00-12 12v280a12 12 0 0012 12h78.19L89.93 470.46l36.53 9.61L161.74 368H234v64h44v-64h71.84l31 111.7 36.83-8.57L389.05 368H468a12 12 0 0012-12V76a12 12 0 00-12-12zm-26 266H70V102h372z"></path>
      <path d="M88 120H424V312H88z"></path>
    </svg>
  );
}


