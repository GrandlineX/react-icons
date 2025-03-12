import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOBatteryHalf(props: IconProps) {
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
        x="32"
        y="144"
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="45.7"
        ry="45.7"
      />
      <rect
        width="154.31"
        height="114.13"
        x="85.69"
        y="198.93"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="32"
        rx="4"
        ry="4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M480 218.67L480 293.33"
      />
    </svg>
  );
}
