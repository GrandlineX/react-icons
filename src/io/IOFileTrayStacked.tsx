import React from "react";

export default function IOFileTrayStacked(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M464 352H320a16 16 0 00-16 16 48 48 0 01-96 0 16 16 0 00-16-16H48a16 16 0 00-16 16v64a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64v-64a16 16 0 00-16-16zM479.46 187.88L447.61 68.45C441.27 35.59 417.54 16 384 16H128c-16.8 0-31 4.69-42.1 13.94S67.66 52 64.4 68.4L32.54 187.88A15.9 15.9 0 0032 192v48c0 35.29 28.71 80 64 80h320c35.29 0 64-44.71 64-80v-48a15.9 15.9 0 00-.54-4.12zM440.57 176H320a15.92 15.92 0 00-16 15.82 48 48 0 11-96 0A15.92 15.92 0 00192 176H71.43a2 2 0 01-1.93-2.52L95.71 75c3.55-18.41 13.81-27 32.29-27h256c18.59 0 28.84 8.53 32.25 26.85l26.25 98.63a2 2 0 01-1.93 2.52z"></path>
    </svg>
  );
}

