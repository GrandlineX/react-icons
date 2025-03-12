import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOPrismOutline(props: IconProps) {
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
        d="M229.73 45.88L37.53 327.79a31.79 31.79 0 0011.31 46L241 476.26a31.77 31.77 0 0029.92 0l192.2-102.51a31.79 31.79 0 0011.31-46L282.27 45.88a31.8 31.8 0 00-52.54 0z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M256 32L256 480"
      />
    </svg>
  );
}
