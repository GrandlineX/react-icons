import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOInformationOutline(props: IconProps) {
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
        strokeWidth="40"
        d="M196 220L260 220 260 392"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="40"
        d="M187 396L325 396"
      />
      <path d="M256 160a32 32 0 1132-32 32 32 0 01-32 32z" />
    </svg>
  );
}
