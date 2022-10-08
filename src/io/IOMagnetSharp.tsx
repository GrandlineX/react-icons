import React from "react";

export default function IOMagnetSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M191.98 463.58L191.98 415.58"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M90.16 421.4L124.1 387.46"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M47.98 319.58L95.98 319.58"
      ></path>
      <path d="M422.2 89.82a144 144 0 00-203.71-.07l-67.88 67.88 67.88 67.89 67.88-67.89a48 48 0 0168.46.59c18.3 18.92 17.48 49.24-1.14 67.86l-67.32 67.32 67.88 67.88 66.91-66.91c56.37-56.37 57.37-148.15 1.04-204.55z"></path>
      <path
        d="M107.29 188.83H171.29000000000002V284.83000000000004H107.29z"
        transform="rotate(-45 139.29 236.834)"
      ></path>
      <path
        d="M243.06 324.59H307.06V420.59H243.06z"
        transform="rotate(-45 275.052 372.59)"
      ></path>
    </svg>
  );
}


