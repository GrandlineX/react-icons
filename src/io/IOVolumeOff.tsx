import React from "react";

export default function IOVolumeOff(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M344 416a23.92 23.92 0 01-14.21-4.69c-.23-.16-.44-.33-.66-.51l-91.46-74.9H168a24 24 0 01-24-24V200.07a24 24 0 0124-24h69.65l91.46-74.9c.22-.18.43-.35.66-.51A24 24 0 01368 120v272a24 24 0 01-24 24z"></path>
    </svg>
  );
}

