import React from "react";

export default function SI1password(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-si-icon" width={ width } height={ height } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10.51 10.013V7.299c0-.306.248-.554.554-.554h1.911c.306 0 .554.248.554.554v4.968c0 .076-.038.134-.076.191l-.478.478c-.115.115-.115.287 0 .382l.478.478a.246.246 0 01.076.191V16.7a.554.554 0 01-.554.554h-1.911a.554.554 0 01-.554-.554v-4.968c0-.076.038-.134.076-.191l.478-.478c.115-.115.115-.287 0-.382l-.478-.478a.244.244 0 01-.076-.19zM19.127 12a7.127 7.127 0 10-14.254 0 7.127 7.127 0 0014.254 0zm2.255 0c0 5.178-4.204 9.363-9.363 9.363-5.178 0-9.363-4.204-9.363-9.363 0-5.178 4.204-9.363 9.363-9.363S21.382 6.822 21.382 12zM.764 12c0 6.21 5.025 11.236 11.236 11.236S23.236 18.21 23.236 12 18.21.764 12 .764.764 5.79.764 12zM0 12C0 5.369 5.369 0 12 0s12 5.369 12 12-5.369 12-12 12S0 18.631 0 12z"></path>
    </svg>
  );
}


