import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOReader(props: IconProps) {
  const { width, height } = useIconProps(props);

  return (
    <svg
      className="glx--icon glx-io-icon"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M368 32H144a64.07 64.07 0 00-64 64v320a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V96a64.07 64.07 0 00-64-64zM256 304h-80a16 16 0 010-32h80a16 16 0 010 32zm80-80H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32z" />
    </svg>
  );
}
