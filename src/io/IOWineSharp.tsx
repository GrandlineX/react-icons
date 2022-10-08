import React from "react";

export default function IOWineSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M453 112V66.33H60.75V112l175.13 176v118H124.75v42H389v-42H277.88V288zm-336.65-3.67h281l-37.81 38H154.16z"></path>
    </svg>
  );
}


