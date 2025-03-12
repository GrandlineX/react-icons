import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOGiftOutline(props: IconProps) {
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
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z"
      />
      <rect
        width="384"
        height="112"
        x="64"
        y="160"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="32"
        ry="32"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M256 160L256 464"
      />
    </svg>
  );
}
