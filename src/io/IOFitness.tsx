import React from "react";

export default function IOFitness(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M193.69 152.84a16 16 0 0129.64 2.56l36.4 121.36 30-59.92a16 16 0 0128.62 0L345.89 272h96.76A213.08 213.08 0 00464 176.65C463.37 114.54 413.54 64 352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65A211.13 211.13 0 0056.93 240h93.18z"></path>
      <path d="M321.69 295.16L304 259.78l-33.69 67.38A16 16 0 01256 336q-.67 0-1.38-.06a16 16 0 01-14-11.34l-36.4-121.36-30 59.92A16 16 0 01160 272H69.35q14 29.29 37.27 57.66c18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81a316.79 316.79 0 0019-25.66H336a16 16 0 01-14.31-8.84zM464 272h-21.35a260.11 260.11 0 01-18.25 32H464a16 16 0 000-32zM48 240a16 16 0 000 32h21.35a225.22 225.22 0 01-12.42-32z"></path>
    </svg>
  );
}

