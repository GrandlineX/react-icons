import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOBarChartOutline(props: IconProps) {
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
        d="M32 32v432a16 16 0 0016 16h432"
      />
      <rect
        width="80"
        height="192"
        x="96"
        y="224"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="20"
        ry="20"
      />
      <rect
        width="80"
        height="240"
        x="240"
        y="176"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="20"
        ry="20"
      />
      <rect
        width="80"
        height="304"
        x="383.64"
        y="112"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="20"
        ry="20"
      />
    </svg>
  );
}
