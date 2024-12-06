import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function SIChromecast(props: IconProps) {
  const { width, height } = useIconProps(props);

  return (
    <svg
      className="glx--icon glx-si-icon"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M0 18.546v3.272h3.273A3.268 3.268 0 000 18.545zm0-4.364v2.182a5.456 5.456 0 015.455 5.454h2.181A7.63 7.63 0 000 14.182zm0-4.364V12c5.422 0 9.818 4.396 9.818 9.818H12c0-6.633-5.378-12-12-12zm21.818-7.636H2.182C.982 2.182 0 3.164 0 4.364v3.272h2.182V4.364h19.636v15.272h-7.636v2.182h7.636c1.2 0 2.182-.982 2.182-2.182V4.364c0-1.2-.982-2.182-2.182-2.182z" />
    </svg>
  );
}
