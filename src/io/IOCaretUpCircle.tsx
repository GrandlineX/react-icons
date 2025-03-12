import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOCaretUpCircle(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-io-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm74.14 252H181.86a16 16 0 01-12.29-26.23l74.13-89.09a16 16 0 0124.6 0l74.13 89.09A16 16 0 01330.14 300z" />
    </svg>
  );
}
