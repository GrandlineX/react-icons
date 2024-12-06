import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOCodeWorking(props: IconProps) {
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
        r="26"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="10"
      />
      <circle
        cx="346"
        cy="256"
        r="26"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="10"
      />
      <circle
        cx="166"
        cy="256"
        r="26"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="10"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="42"
        d="M160 368L32 256 160 144"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="42"
        d="M352 368L480 256 352 144"
      />
    </svg>
  );
}
