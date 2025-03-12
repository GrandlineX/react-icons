import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOTrashBinOutline(props: IconProps) {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M432 144l-28.67 275.74A32 32 0 01371.55 448H140.46a32 32 0 01-31.78-28.26L80 144"
      />
      <rect
        width="448"
        height="80"
        x="32"
        y="64"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="16"
        ry="16"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M312 240L200 352"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M312 352L200 240"
      />
    </svg>
  );
}
