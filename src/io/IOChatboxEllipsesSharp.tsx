import React from "react";

export default function IOChatboxEllipsesSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M456 48H56a24 24 0 00-24 24v288a24 24 0 0024 24h72v80l117.74-80H456a24 24 0 0024-24V72a24 24 0 00-24-24zM160 248a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zM456 80z"></path>
    </svg>
  );
}

