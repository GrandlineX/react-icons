import React from "react";

export default function IOTelescopeSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M1.41 292.9L46.23 369.87 144.37 313.49 99.64 236.12 1.41 292.9z"></path>
      <path d="M287.87 252.34l23.67-13.81-63.42-110-132.92 77C133.75 237.51 176 310 176 310l15.53-8.32c.24-.13.55 0 .83 0L102.65 496h35.16l99.05-214.25 23.24-13.4L358 464h36zM262.08 96c24.81 42.23 60.25 104.25 86.4 148.76L510.79 151 424.07 1.41z"></path>
    </svg>
  );
}

