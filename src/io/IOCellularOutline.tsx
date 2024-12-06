import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOCellularOutline(props: IconProps) {
  const { width, height } = useIconProps(props);

  return (
    <svg
      className="glx--icon glx-io-icon"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <rect
        width="64"
        height="320"
        x="416"
        y="96"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="8"
        ry="8"
      />
      <rect
        width="64"
        height="240"
        x="288"
        y="176"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="8"
        ry="8"
      />
      <rect
        width="64"
        height="176"
        x="160"
        y="240"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="8"
        ry="8"
      />
      <rect
        width="64"
        height="112"
        x="32"
        y="304"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="8"
        ry="8"
      />
    </svg>
  );
}
