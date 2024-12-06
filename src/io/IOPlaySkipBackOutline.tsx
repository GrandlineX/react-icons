import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOPlaySkipBackOutline(props: IconProps) {
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
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M400 111v290c0 17.44-17 28.52-31 20.16L121.09 272.79c-12.12-7.25-12.12-26.33 0-33.58L369 90.84c14-8.36 31 2.72 31 20.16z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M112 80L112 432"
      />
    </svg>
  );
}
