import React from "react";

export default function IOThunderstorm(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M96 416a16 16 0 01-14.3-23.16l24-48a16 16 0 0128.62 14.32l-24 48A16 16 0 0196 416zM120 480a16 16 0 01-14.3-23.16l16-32a16 16 0 0128.62 14.32l-16 32A16 16 0 01120 480zM376 416a16 16 0 01-14.3-23.16l24-48a16 16 0 0128.62 14.32l-24 48A16 16 0 01376 416zM400 480a16 16 0 01-14.3-23.16l16-32a16 16 0 0128.62 14.32l-16 32A16 16 0 01400 480z"></path>
      <path d="M405.84 136.9a151.25 151.25 0 00-47.6-81.9 153 153 0 00-241.81 51.86C60.5 110.16 16 156.65 16 213.33 16 272.15 63.91 320 122.8 320h66.31l-12.89 77.37A16 16 0 00192 416h32v64a16 16 0 0029 9.3l80-112a16 16 0 00-13-25.3h-27.51l8-32h103.84a91.56 91.56 0 001.51-183.1z"></path>
    </svg>
  );
}


