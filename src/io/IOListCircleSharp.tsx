import React from "react";

export default function IOListCircleSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-64 287.5a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a16 16 0 0116-16h16a16 16 0 0116 16zm0-71a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a16 16 0 0116-16h16a16 16 0 0116 16zm0-72a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a16 16 0 0116-16h16a16 16 0 0116 16zm176 151H212.67v-32H368zm0-71H212.67v-32H368zm0-72H212.67v-32H368z"></path>
    </svg>
  );
}

