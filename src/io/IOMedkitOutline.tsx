import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOMedkitOutline(props: IconProps) {
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
        width="448"
        height="352"
        x="32"
        y="112"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="48"
        ry="48"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M144 112V80a32 32 0 0132-32h160a32 32 0 0132 32v32"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M256 208L256 368"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M336 288L176 288"
      />
    </svg>
  );
}
