import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOArrowUpCircle(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-io-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm91.36 212.65a16 16 0 01-22.63.09L272 208.42V342a16 16 0 01-32 0V208.42l-52.73 52.32A16 16 0 11164.73 238l80-79.39a16 16 0 0122.54 0l80 79.39a16 16 0 01.09 22.65z" />
    </svg>
  );
}
