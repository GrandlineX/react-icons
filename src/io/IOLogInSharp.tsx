import React from "react";

export default function IOLogInSharp(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-io-icon" width={ width } height={ height }
      xmlns="http://www.w3.org/2000/svg"
      
      
      viewBox="0 0 512 512"
    >
      <path d="M432 80H192a16 16 0 00-16 16v144h153.37l-64-64L288 153.37l91.31 91.32a16 16 0 010 22.62L288 358.63 265.37 336l64-64H176v144a16 16 0 0016 16h240a16 16 0 0016-16V96a16 16 0 00-16-16z"></path>
      <path d="M64 240H176V272H64z"></path>
    </svg>
  );
}


