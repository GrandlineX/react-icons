import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IONavigate(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-io-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M272 464a16 16 0 01-16-16.42V264.13a8 8 0 00-8-8H64.41a16.31 16.31 0 01-15.49-10.65 16 16 0 018.41-19.87l384-176.15a16 16 0 0121.22 21.19l-176 384A16 16 0 01272 464z" />
    </svg>
  );
}
