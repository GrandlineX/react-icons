import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOWineOutline(props: IconProps) {
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
        strokeLinejoin="round"
        strokeWidth="32"
        d="M398.57 80H113.43v16S87.51 272 256 272 398.57 96 398.57 96z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M256 272L256 432"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M352 432L160 432"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M112 160L400 160"
      />
    </svg>
  );
}
