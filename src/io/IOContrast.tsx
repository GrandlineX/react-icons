import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOContrast(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-io-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256 32A224 224 0 0097.61 414.39 224 224 0 10414.39 97.61 222.53 222.53 0 00256 32zM64 256c0-105.87 86.13-192 192-192v384c-105.87 0-192-86.13-192-192z" />
    </svg>
  );
}
