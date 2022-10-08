import React from "react";

export default function IOBriefcaseSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M336 288H176v-32H16v196a12 12 0 0012 12h456a12 12 0 0012-12V256H336zM496 124a12 12 0 00-12-12H384V56a8 8 0 00-8-8H136a8 8 0 00-8 8v56H28a12 12 0 00-12 12v100h480zm-152-12H168V88h176z"></path>
    </svg>
  );
}


