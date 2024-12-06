import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOFlaskOutline(props: IconProps) {
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
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M176 48L336 48"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M118 304L394 304"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M208 48v93.48a64.09 64.09 0 01-9.88 34.18L73.21 373.49C48.4 412.78 76.63 464 123.08 464h265.84c46.45 0 74.68-51.22 49.87-90.51L313.87 175.66a64.09 64.09 0 01-9.87-34.18V48"
      />
    </svg>
  );
}
