import React from "react";

export default function IOLogoVue(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M256 144.03L200.51 47.92 121.08 47.92 256 281.61 390.92 47.92 311.49 47.92 256 144.03z"></path>
      <path d="M409.4 47.92L256 313.61 102.6 47.92 15.74 47.92 256 464.08 496.26 47.92 409.4 47.92z"></path>
    </svg>
  );
}


