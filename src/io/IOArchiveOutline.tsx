import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOArchiveOutline(props: IconProps) {
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
        d="M80 152v256a40.12 40.12 0 0040 40h272a40.12 40.12 0 0040-40V152"
      />
      <rect
        width="416"
        height="80"
        x="48"
        y="64"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="28"
        ry="28"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M320 304L256 368 192 304"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M256 345.89L256 224"
      />
    </svg>
  );
}
