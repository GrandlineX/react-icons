import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOPin(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-io-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M336 96a80 80 0 10-96 78.39v283.17a32.09 32.09 0 002.49 12.38l10.07 24a3.92 3.92 0 006.88 0l10.07-24a32.09 32.09 0 002.49-12.38V174.39A80.13 80.13 0 00336 96zm-56 0a24 24 0 1124-24 24 24 0 01-24 24z" />
    </svg>
  );
}
