import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOScan(props: IconProps) {
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
        strokeLinejoin="round"
        strokeWidth="44"
        d="M342 444h46a56 56 0 0056-56v-46M444 170v-46a56 56 0 00-56-56h-46M170 444h-46a56 56 0 01-56-56v-46M68 170v-46a56 56 0 0156-56h46"
      />
    </svg>
  );
}
