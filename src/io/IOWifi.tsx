import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOWifi(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-io-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M346.65 304.3a136 136 0 00-180.71 0 21 21 0 1027.91 31.38 94 94 0 01124.89 0 21 21 0 0027.91-31.4z" />
      <path d="M256.28 183.7a221.47 221.47 0 00-151.8 59.92 21 21 0 1028.68 30.67 180.28 180.28 0 01246.24 0 21 21 0 1028.68-30.67 221.47 221.47 0 00-151.8-59.92z" />
      <path d="M462 175.86a309 309 0 00-411.44 0 21 21 0 1028 31.29 267 267 0 01355.43 0 21 21 0 0028-31.31z" />
      <circle cx="256.28" cy="393.41" r="32" />
    </svg>
  );
}
