import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOBrowsersOutline(props: IconProps) {
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
        width="416"
        height="384"
        x="48"
        y="64"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="48"
        ry="48"
      />
      <path d="M397.82 64H114.18C77.69 64 48 94.15 48 131.2V176h16c0-16 16-32 32-32h320c16 0 32 16 32 32h16v-44.8c0-37.05-29.69-67.2-66.18-67.2z" />
    </svg>
  );
}
