import React from "react";

export default function IOSyncCircle(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm83.69 282.65a112.24 112.24 0 01-195-61.29 16 16 0 01-20.13-24.67l23.6-23.6a16 16 0 0122.37-.25l24.67 23.6a16 16 0 01-18 26 80.25 80.25 0 00138.72 38.83 16 16 0 0123.77 21.41zm47.76-63.34l-23.6 23.6a16 16 0 01-22.37.25l-24.67-23.6a16 16 0 0117.68-26.11A80.17 80.17 0 00196 202.64a16 16 0 11-23.82-21.37 112.17 112.17 0 01194.88 61.57 16 16 0 0120.39 24.47z"></path>
    </svg>
  );
}


