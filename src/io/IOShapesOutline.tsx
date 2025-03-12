import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOShapesOutline(props: IconProps) {
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
        strokeLinejoin="round"
        strokeWidth="32"
        d="M336 320L32 320 184 48 336 320z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M265.32 194.51A144 144 0 11192 320"
      />
    </svg>
  );
}
