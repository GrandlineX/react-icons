import React from 'react';
import { IconProps, useIconProps } from '../IconProps';

export default function IOIdCard(props: IconProps) {
  const { width, height, className } = useIconProps(props);

  return (
    <svg
      className={`glx--icon glx-io-icon${className}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M368 16H144a64.07 64.07 0 00-64 64v352a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V80a64.07 64.07 0 00-64-64zm-34.52 268.51c7.57 8.17 11.27 19.16 10.39 30.94C342.14 338.91 324.25 358 304 358s-38.17-19.09-39.88-42.55c-.86-11.9 2.81-22.91 10.34-31S292.4 272 304 272a39.65 39.65 0 0129.48 12.51zM192 80a16 16 0 0116-16h96a16 16 0 010 32h-96a16 16 0 01-16-16zm189 363.83a12.05 12.05 0 01-9.31 4.17H236.31a12.05 12.05 0 01-9.31-4.17 13 13 0 01-2.76-10.92c3.25-17.56 13.38-32.31 29.3-42.66C267.68 381.06 285.6 376 304 376s36.32 5.06 50.46 14.25c15.92 10.35 26.05 25.1 29.3 42.66a13 13 0 01-2.76 10.92z" />
    </svg>
  );
}
