import React from "react";

export default function IOPowerSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M256 464c-114.69 0-208-93.23-208-207.82a207.44 207.44 0 0174.76-160.13l16.9-14 28.17 33.72-16.9 14A163.72 163.72 0 0092 256.18c0 90.39 73.57 163.93 164 163.93s164-73.54 164-163.93a163.38 163.38 0 00-59.83-126.36l-17-14 28-33.82 17 14A207.13 207.13 0 01464 256.18C464 370.77 370.69 464 256 464z"></path>
      <path d="M234 48H278V272H234z"></path>
    </svg>
  );
}


