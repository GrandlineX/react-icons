import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOLink(props: IconProps) {
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
        strokeWidth="48"
        d="M200.66 352H144a96 96 0 010-192h55.41M312.59 160H368a96 96 0 010 192h-56.66"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M169.07 256L344.93 256"
      />
    </svg>
  );
}
