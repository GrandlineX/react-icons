import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOClipboardOutline(props: IconProps) {
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
        strokeLinejoin="round"
        strokeWidth="32"
        d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32"
      />
      <rect
        width="160"
        height="64"
        x="176"
        y="32"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="26.13"
        ry="26.13"
      />
    </svg>
  );
}
