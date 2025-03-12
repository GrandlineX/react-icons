import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOJournalOutline(props: IconProps) {
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
        width="320"
        height="416"
        x="96"
        y="48"
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
        strokeLinejoin="round"
        strokeWidth="60"
        d="M320 48L320 464"
      />
    </svg>
  );
}
