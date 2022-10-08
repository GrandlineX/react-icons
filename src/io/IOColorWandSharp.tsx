import React from "react";

export default function IOColorWandSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path
        d="M158.6 150.86H253.63V261.37H158.6z"
        transform="rotate(-45 206.119 206.123)"
      ></path>
      <path d="M301.41 234.21L234.22 301.41 412 480 480 412 301.41 234.21z"></path>
      <path d="M32 176H112V208H32z"></path>
      <path
        d="M91.22 67.22H123.22V147.22H91.22z"
        transform="rotate(-45 107.221 107.218)"
      ></path>
      <path d="M176 32H208V112H176z"></path>
      <path
        d="M236.92 91.22H316.91999999999996V123.22H236.92z"
        transform="rotate(-45 276.924 107.224)"
      ></path>
      <path
        d="M67.22 260.92H147.22V292.92H67.22z"
        transform="rotate(-45 107.214 276.92)"
      ></path>
    </svg>
  );
}


