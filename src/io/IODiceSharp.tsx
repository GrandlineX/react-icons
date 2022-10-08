import React from "react";

export default function IODiceSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M48 366.92L240 480V284L48 170zM192 288c8.84 0 16 10.75 16 24s-7.16 24-16 24-16-10.75-16-24 7.16-24 16-24zm-96 32c8.84 0 16 10.75 16 24s-7.16 24-16 24-16-10.75-16-24 7.16-24 16-24zM272 284v196l192-113.08V170zm48 140c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm32 77.64zM256 32L64 144l192 112 192-112zm0 120c-13.25 0-24-7.16-24-16s10.75-16 24-16 24 7.16 24 16-10.75 16-24 16z"></path>
    </svg>
  );
}


