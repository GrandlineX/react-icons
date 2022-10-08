import React from "react";

export default function IOPlayBack(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M30.71 229.47l188.87-113a30.54 30.54 0 0131.09-.39 33.74 33.74 0 0116.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0131.09-.39A33.74 33.74 0 01496 145.52v221A33.73 33.73 0 01479.24 396a30.54 30.54 0 01-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 01250.67 396a30.54 30.54 0 01-31.09-.39l-188.87-113a31.27 31.27 0 010-53z"></path>
    </svg>
  );
}


