import React from "react";

export default function SISteam(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-si-icon" width={ width } height={ height } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.387 3.387 0 011.912-.59c.063 0 .125.004.188.006l2.861-4.142V8.91a4.528 4.528 0 014.524-4.524c2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159a3.392 3.392 0 01-3.39 3.396 3.412 3.412 0 01-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25a2.551 2.551 0 003.337-3.324 2.547 2.547 0 00-3.255-1.413l1.523.63a1.878 1.878 0 01-1.445 3.467H7.54zm11.415-9.303a3.019 3.019 0 00-3.015-3.015 3.015 3.015 0 103.015 3.015zm-5.273-.005a2.264 2.264 0 114.531 0 2.267 2.267 0 01-2.266 2.265 2.264 2.264 0 01-2.265-2.265z"></path>
    </svg>
  );
}


