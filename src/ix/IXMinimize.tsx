import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IXMinimize(props: IconProps) {
  const { width, height, className } = useIconProps(props);
  return (
    <svg
      className={`glx--icon glx-xi-icon${className}`}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M6 19h12v2H6v-2z" />
    </svg>
  );
}
