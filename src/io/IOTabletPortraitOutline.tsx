import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOTabletPortraitOutline(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-io-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <rect
        width="352"
        height="480"
        x="80"
        y="16"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="48"
        ry="48"
      />
    </svg>
  );
}
