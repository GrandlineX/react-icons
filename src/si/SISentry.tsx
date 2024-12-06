import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function SISentry(props: IconProps) {
  const { width, height } = useIconProps(props);

  return (
    <svg
      className="glx--icon glx-si-icon"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M13.91 2.505c-.873-1.448-2.972-1.448-3.844 0L6.904 7.92a15.478 15.478 0 018.53 12.811h-2.221A13.301 13.301 0 005.784 9.814l-2.926 5.06a7.65 7.65 0 014.435 5.848H2.194a.365.365 0 01-.298-.534l1.413-2.402a5.16 5.16 0 00-1.614-.913L.296 19.275a2.182 2.182 0 00.812 2.999 2.24 2.24 0 001.086.288h6.983a9.322 9.322 0 00-3.845-8.318l1.11-1.922a11.47 11.47 0 014.95 10.24h5.915a17.242 17.242 0 00-7.885-15.28l2.244-3.845a.37.37 0 01.504-.13c.255.14 9.75 16.708 9.928 16.9a.365.365 0 01-.327.543h-2.287c.029.612.029 1.223 0 1.831h2.297a2.206 2.206 0 001.922-3.31z" />
    </svg>
  );
}
