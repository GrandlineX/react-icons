import React from "react";

export default function IOHeartDislikeSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M32 64.45L421.47 454.39 444.31 431.92 54.85 42 32 64.45z"></path>
      <path d="M62.67 192.91c-.56 55.63 19.77 106.94 62.16 156.88 40.25 47.42 94.56 79.67 137.47 108.21l9 6 9-6c18.49-12.3 39.1-25.3 59.79-39.89L71.74 149.28a114.62 114.62 0 00-9.07 43.63zM417.83 349.79c42.39-49.94 62.72-101.25 62.16-156.88-.63-62-50.61-112.54-111.43-112.54-48.26 0-80.35 28-97.23 48.17-16.88-20.2-49-48.17-97.23-48.17A108.24 108.24 0 00142.84 85l270 270.48c1.71-1.89 3.37-3.78 4.99-5.69z"></path>
    </svg>
  );
}


