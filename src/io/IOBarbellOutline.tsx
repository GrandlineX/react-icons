import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOBarbellOutline(props: IconProps) {
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
        d="M48 256L464 256"
      />
      <rect
        width="32"
        height="256"
        x="384"
        y="128"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="16"
        ry="16"
      />
      <rect
        width="32"
        height="256"
        x="96"
        y="128"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="16"
        ry="16"
      />
      <rect
        width="16"
        height="128"
        x="32"
        y="192"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="8"
        ry="8"
      />
      <rect
        width="16"
        height="128"
        x="464"
        y="192"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="8"
        ry="8"
      />
    </svg>
  );
}
