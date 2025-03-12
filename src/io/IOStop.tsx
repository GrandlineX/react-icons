import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOStop(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-io-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M392 432H120a40 40 0 01-40-40V120a40 40 0 0140-40h272a40 40 0 0140 40v272a40 40 0 01-40 40z" />
    </svg>
  );
}
