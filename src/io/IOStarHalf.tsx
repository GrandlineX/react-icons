import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOStarHalf(props: IconProps) {
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
        strokeLinejoin="round"
        strokeWidth="32"
        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
      />
      <path d="M256 48L256 364 118 464 172 304 32 208 204 208 256 48z" />
    </svg>
  );
}
