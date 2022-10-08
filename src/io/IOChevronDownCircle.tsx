import React from "react";

export default function IOChevronDownCircle(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-100.69-28.69l-96 96a16 16 0 01-22.62 0l-96-96a16 16 0 0122.62-22.62L256 289.37l84.69-84.68a16 16 0 0122.62 22.62z"></path>
    </svg>
  );
}


