import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOLockClosedOutline(props: IconProps) {
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
        d="M336 208v-95a80 80 0 00-160 0v95"
      />
      <rect
        width="320"
        height="272"
        x="96"
        y="208"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="48"
        ry="48"
      />
    </svg>
  );
}
