import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOLogoAngular(props: IconProps) {
  const { width, height } = useIconProps(props);

  return (
    <svg
      className="glx--icon glx-io-icon"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M213.57 256L298.42 256 255.99 166.64 213.57 256z" />
      <path d="M256 32L32 112l46.12 272L256 480l177.75-96L480 112zm88 320l-26.59-56H194.58L168 352h-40L256 72l128 280z" />
    </svg>
  );
}
