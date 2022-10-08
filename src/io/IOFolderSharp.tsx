import React from "react";

export default function IOFolderSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M16 420a28 28 0 0028 28h424a28 28 0 0028-28V208H16zM496 124a28 28 0 00-28-28H212.84l-48-32H44a28 28 0 00-28 28v84h480z"></path>
    </svg>
  );
}


