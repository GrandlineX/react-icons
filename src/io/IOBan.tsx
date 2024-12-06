import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOBan(props: IconProps) {
  const { width, height } = useIconProps(props);

  return (
    <svg
      className="glx--icon glx-io-icon"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <circle
        cx="256"
        cy="256"
        r="200"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="48"
      />
      <path
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="48"
        d="M114.58 114.58L397.42 397.42"
      />
    </svg>
  );
}
