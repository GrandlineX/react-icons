import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOStopOutline(props: IconProps) {
  const { width, height } = useIconProps(props);

  return (
    <svg
      className="glx--icon glx-io-icon"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <rect
        width="320"
        height="320"
        x="96"
        y="96"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="24"
        ry="24"
      />
    </svg>
  );
}
