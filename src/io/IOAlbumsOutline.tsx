import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOAlbumsOutline(props: IconProps) {
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
        width="384"
        height="256"
        x="64"
        y="176"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="28.87"
        ry="28.87"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M144 80L368 80"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M112 128L400 128"
      />
    </svg>
  );
}
