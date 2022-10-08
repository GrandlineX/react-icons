import React from "react";

export default function IOLogoFigma(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M336 176a80 80 0 000-160H176a80 80 0 000 160 80 80 0 000 160 80 80 0 1080 80V176z"></path>
      <circle cx="336" cy="256" r="80"></circle>
    </svg>
  );
}


