import React from "react";

export default function SIPlex(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-si-icon" width={ width } height={ height } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M11.643 0H4.68l7.679 12L4.68 24h6.963l7.677-12-7.677-12"></path>
    </svg>
  );
}


