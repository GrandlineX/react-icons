import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOCardOutline(props: IconProps) {
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
        height="320"
        x="48"
        y="96"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="56"
        ry="56"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="60"
        d="M48 192L464 192"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="60"
        d="M128 300H176V320H128z"
      />
    </svg>
  );
}
