import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOArrowForwardCircleOutline(props: IconProps) {
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
        strokeWidth="32"
        d="M262.62 336L342 256 262.62 176"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M330.97 256L170 256"
      />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z"
      />
    </svg>
  );
}
