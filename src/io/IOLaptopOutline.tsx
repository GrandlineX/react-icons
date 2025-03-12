import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOLaptopOutline(props: IconProps) {
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
        width="416"
        height="304"
        x="48"
        y="96"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="32.14"
        ry="32.14"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M16 416L496 416"
      />
    </svg>
  );
}
