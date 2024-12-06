import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IONavigateOutline(props: IconProps) {
  const { width, height } = useIconProps(props);

  return (
    <svg
      className="glx--icon glx-io-icon"
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
        d="M448 64L64 240.14h200a8 8 0 018 8V448z"
      />
    </svg>
  );
}
