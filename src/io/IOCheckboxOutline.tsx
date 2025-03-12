import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOCheckboxOutline(props: IconProps) {
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
        d="M352 176L217.6 336 160 272"
      />
      <rect
        width="384"
        height="384"
        x="64"
        y="64"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="48"
        ry="48"
      />
    </svg>
  );
}
