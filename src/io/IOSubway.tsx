import React from "react";

export default function IOSubway(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M352 16H160a64.07 64.07 0 00-64 64v256a64.07 64.07 0 0064 64h192a64.07 64.07 0 0064-64V80a64.07 64.07 0 00-64-64zM208 64h96a16 16 0 010 32h-96a16 16 0 010-32zm-32 288a32 32 0 1132-32 32 32 0 01-32 32zm160 0a32 32 0 1132-32 32 32 0 01-32 32zm48-160a16 16 0 01-16 16H144a16 16 0 01-16-16v-32a16 16 0 0116-16h224a16 16 0 0116 16zM347.31 420.69a16 16 0 00-22.62 22.62l4.68 4.69H182.63l4.68-4.69a16 16 0 00-22.62-22.62l-48 48a16 16 0 1022.62 22.62L150.63 480h210.74l11.32 11.31a16 16 0 0022.62-22.62z"></path>
    </svg>
  );
}


