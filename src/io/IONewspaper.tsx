import React from "react";

export default function IONewspaper(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M439.91 112h-23.82a.09.09 0 00-.09.09V416a32 32 0 0032 32 32 32 0 0032-32V152.09A40.09 40.09 0 00439.91 112z"></path>
      <path d="M384 416V72a40 40 0 00-40-40H72a40 40 0 00-40 40v352a56 56 0 0056 56h342.85a1.14 1.14 0 001.15-1.15 1.14 1.14 0 00-.85-1.1A64.11 64.11 0 01384 416zM96 128a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16h-64a16 16 0 01-16-16zm208 272H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 01112 368h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 400zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 01112 304h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 336zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 01112 240h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 272zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01240 176h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 208zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01240 112h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 144z"></path>
    </svg>
  );
}


