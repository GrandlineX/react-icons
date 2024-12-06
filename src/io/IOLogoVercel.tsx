import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOLogoVercel(props: IconProps) {
  const { width, height } = useIconProps(props);

  return (
    <svg
      className="glx--icon glx-io-icon"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fillRule="evenodd" d="M256 48l240 416H16z" />
    </svg>
  );
}
