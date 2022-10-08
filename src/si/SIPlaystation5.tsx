import React from "react";

export default function SIPlaystation5(props:{size?:number; width?:number;height?:number}) {
let {width,height,size}=props;
if(size!==undefined){width=size;height=size;}
if(width===undefined && height===undefined){width=16;height=16;}

  return (
    <svg className="glx--icon glx-si-icon" width={ width } height={ height } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10.45 14.57a1.383 1.383 0 001.383-1.384v-2.378a.833.833 0 01.834-.833h2.684a.037.037 0 00.036-.038v-.476a.036.036 0 00-.036-.036h-3.234a1.383 1.383 0 00-1.384 1.383v2.38a.834.834 0 01-.833.834H7.253a.036.036 0 00-.036.037v.476a.036.036 0 00.036.036zm6.045-3.213V9.461a.036.036 0 01.036-.036h7.308a.037.037 0 01.037.036v.476a.038.038 0 01-.037.038h-6.21a.036.036 0 00-.036.036v1.236a.395.395 0 00.397.397h4.622a1.465 1.465 0 010 2.925h-6.08a.036.036 0 01-.037-.036v-.474a.036.036 0 01.036-.037h5.53a.916.916 0 10-.007-1.83h-4.726a.833.833 0 01-.833-.835m-10.846.287a.835.835 0 000-1.67H.037A.037.037 0 010 9.938v-.476a.036.036 0 01.037-.036h6.152a1.384 1.384 0 010 2.767H1.933a.833.833 0 00-.833.834v1.513a.036.036 0 01-.037.036H.037a.036.036 0 01-.037-.04v-1.513a1.383 1.383 0 011.384-1.378z"></path>
    </svg>
  );
}


