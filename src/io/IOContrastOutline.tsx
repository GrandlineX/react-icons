import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOContrastOutline(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-io-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <circle
        cx="256"
        cy="256"
        r="208"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path d="M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48z" />
    </svg>
  );
}
