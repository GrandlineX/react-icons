import React from "react";

export default function IOColorWandOutline(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect
        width="63.03"
        height="378.2"
        x="280.48"
        y="122.9"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="31.52"
        transform="rotate(-45 312.002 311.994)"
      ></rect>
      <path d="M178.38 178.38a31.64 31.64 0 000 44.75L223.25 268 268 223.25l-44.87-44.87a31.64 31.64 0 00-44.75 0z"></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M48 192L96 192"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M90.18 90.18L124.12 124.12"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M192 48L192 96"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M293.82 90.18L259.88 124.12"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M124.12 259.88L90.18 293.82"
      ></path>
    </svg>
  );
}


