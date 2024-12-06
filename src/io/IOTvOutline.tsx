import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOTvOutline(props: IconProps) {
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
        width="448"
        height="272"
        x="32"
        y="96"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="32.14"
        ry="32.14"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M128 416L384 416"
      />
    </svg>
  );
}
