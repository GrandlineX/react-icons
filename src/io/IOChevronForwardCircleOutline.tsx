import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOChevronForwardCircleOutline(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-io-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M216 352L312 256 216 160"
      />
    </svg>
  );
}
