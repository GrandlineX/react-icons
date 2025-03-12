import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOLinkOutline(props: IconProps) {
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
        strokeWidth="36"
        d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="36"
        d="M163.29 256L350.71 256"
      />
    </svg>
  );
}
