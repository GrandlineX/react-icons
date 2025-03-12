import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOBatteryDeadOutline(props: IconProps) {
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
        width="400"
        height="224"
        x="31"
        y="144"
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="45.7"
        ry="45.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M479 218.67L479 293.33"
      />
    </svg>
  );
}
