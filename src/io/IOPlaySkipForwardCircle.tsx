import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOPlaySkipForwardCircle(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-io-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 272a16 16 0 01-32 0v-53l-111.68 67.44a10.78 10.78 0 01-16.32-9.31V186.87a10.78 10.78 0 0116.32-9.31L304 245v-53a16 16 0 0132 0z" />
    </svg>
  );
}
