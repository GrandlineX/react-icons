import React from "react";

export default function IOApertureSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M216 48L345.49 176.18 345.49 48 216 48z"></path>
      <path d="M181.47 58.38L80 134 256 134 181.47 58.38z"></path>
      <path d="M336 344L464 344 464 216 336 344z"></path>
      <path d="M454 182L378 80 378 256 454 182z"></path>
      <path d="M48 166L48 294 176 166 48 166z"></path>
      <path d="M330 454L432 378 256 378 330 454z"></path>
      <path d="M58 330L134 432 134 256 58 330z"></path>
      <path d="M345.49 222.12l-55.55-55.46h-67.88l-55.55 55.46v67.76l55.62 55.52c.44 0 .88-.06 1.33-.06h66.48l55.55-55.46z"></path>
      <path d="M165.98 336.09L166 464 294 464 165.98 336.09z"></path>
    </svg>
  );
}


