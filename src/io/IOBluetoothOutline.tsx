import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOBluetoothOutline(props: IconProps) {
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
        d="M144 352L368 160 256 48 256 464 368 352 144 160"
      />
    </svg>
  );
}
