import React from "react";

export default function IOImagesSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <ellipse cx="373.14" cy="219.33" fill="none" rx="46.29" ry="46"></ellipse>
      <path d="M80 132v328a20 20 0 0020 20h392a20 20 0 0020-20V132a20 20 0 00-20-20H100a20 20 0 00-20 20zm293.14 41.33a46 46 0 11-46.28 46 46.19 46.19 0 0146.28-46zm-261.41 276v-95.48l122.76-110.2L328.27 337l-113 112.33zm368.27 0H259l144.58-144L480 370.59z"></path>
      <path d="M20 32A20 20 0 000 52v344a20 20 0 0020 20h28V100a20 20 0 0120-20h380V52a20 20 0 00-20-20z"></path>
    </svg>
  );
}

